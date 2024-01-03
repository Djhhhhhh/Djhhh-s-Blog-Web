## [A - Codeforces Checking](https://vjudge.net/problem/CodeForces-1791A)

#### 思路

​	判断输入的字符是否为codeforces中的一个，经典div4白痴题。

#### 代码实现

~~~
int main() {
    int t;
    cin >> t;
    while (t--) {
        char a;
        cin >> a;
        switch (a) {
        case 'c':
        case 'o':
        case 'd':
        case 'e':
        case 'f':
        case 'r':
        case 's':
            cout << "YES\n";
            break;
        default:
            cout << "NO\n";
        }
    }
    return 0;
}
~~~



## [B - Following Directions](https://vjudge.net/problem/CodeForces-1791B)

#### 思路

​	给你一个要走的方向序列，设定一个初始坐标(0,0)然后按照方向模拟，判断中途是否经过(1,1)即可。

#### 代码实现

~~~
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        string k;
        cin >> k;
        int x = 0;
        int y = 0;
        bool u = 0;
        for (int i = 0; i < n; i++) {
            switch (k[i])
            {
            case 'U':x += 1; break;
            case 'R':y += 1; break;
            case 'D':x -= 1; break;
            case 'L':y -= 1; break;
            }
            if (x == 1 && y == 1) {
                u = 1;
                break;
            }
        }
        if (u)cout << "YES\n";
        else cout << "NO\n";
    }
    return 0;
}
~~~



## [C - Prepend and Append](https://vjudge.net/problem/CodeForces-1791C)

#### 思路

​	让你构造一个初始序列，可以通过有限次的题目中给的操作变成给定的01序列。

​	判断前后两个数字是否一个为0一个为1即可，输出最后剩下的数字。

#### 代码实现

~~~
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        deque<char>p;
        string k;
        cin >> k;
        for (int i = 0; i < n; i++) {
            p.push_back(k[i]);
        }
        while ((p.back() == '0' && p.front() == '1') || (p.back() == '1' && p.front() == '0')) {
            p.pop_front(); p.pop_back();
            if (p.size() == 1 || p.size() == 0)break;
        }
        cout << p.size() << "\n";
    }
    return 0;
}
~~~



## [D - Distinct Split](https://vjudge.net/problem/CodeForces-1791D)

#### 思路

​	给定一个字符串序列，让这个字符串从中间某个点分开，然后分别对两组序列中的不同字符进行统计，然后求和，使和最大。因为是在该序列中某个点断开，分为前后两半，所以我们可以从头进行一次遍历，判断到遍历所在位置之前的不同字符的个数。然后反向进行一次此操作，最后对于求出的两组进行求和处理，然后取最大值得出答案。

#### 代码实现

~~~c++
ll sum1[NN] = { 0 };
ll sum2[NN] = { 0 };
int main() {
    int t;
    cin >> t;
    while (t--) {
        ll n;
        cin >> n;
        string k;
        cin >> k;
        ll p1[500] = { 0 };
        ll p2[500] = { 0 };
        ll ans = 0;
        ll cnt1 = 0;
        ll cnt2 = 0;
        for (int i = 0; i < n; i++) {
            p1[k[i]]++;
            if (p1[k[i]] == 1) {
                cnt1++;
            }
            sum1[i] = cnt1;
        }
        for (int i = n-1; i >= 0; i--) {
            p2[k[i]]++;
            if (p2[k[i]] == 1) {
                cnt2++;
            }
            sum2[i] = cnt2;
        }
        for (int i = 0; i < n; i++)ans = max(ans, sum1[i] + sum2[i] - ((p1[k[i]] == 1 && p2[k[i]] == 1) ? 1 : 0));
        cout << ans << "\n";
    }
    return 0;
}
~~~



## [E - Negatives and Positives](https://vjudge.net/problem/CodeForces-1791E)

#### 思路

​	思维题，如果序列中存在偶数个-号那么求和即可，如果为奇数个，则求和后减去2倍的最小值。(自己考虑为什么说2倍最小值)。

#### 代码实现

~~~C++
ll o[NN];
int main() {
    fastread();
    int t;
    cin >> t;
    while (t--) {
        ll n;
        cin >> n;
        ll cnt = 0;
        ll ans = 0;
        for (int i = 1; i <= n; i++) {
            cin >> o[i];
            if (o[i] < 0) {
                cnt++;
                o[i] = abs(o[i]);
            }
            ans +=o[i];
        }
        sort(o + 1, o + 1 + n);
        if (cnt % 2 == 0) {
            cout << ans << "\n";
        }
        else {
            cout << ans - 2*o[1] << "\n";
        }
    }
    return 0;
}
~~~



## [F - Range Update Point Query](https://vjudge.net/problem/CodeForces-1791F)

#### 思路

​	提取题目中重点，区间修改访问次数，单点输出。可以很直观的看出是线段树或者树状数组。

​	但此题线段树解法非正解，会被卡常数。

#### 代码实现

​	树状数组解法（正解）

~~~c++
ll o[NN];  //原数组
ll a[NN];   //树状数组
ll n;    //原数组大小
ll q;  //操作数
ll lowbit(ll x)
{
    return x & (-x);
}
ll sum(ll x) {
    ll res = 0;
    for (ll i = x; i; i -= lowbit(i)) {
        res += a[i];
    }
    return res;
}
void add(ll x, ll y) {
    for (ll i = x; i <= n; i += lowbit(i)) {
        a[i] += y;
    }
}
ll gxnum(ll x) {
    ll ret = 0;
    while (x)
    {
        ret += x % 10;
        x /= 10;
    }
    return ret;
}
int main() {
    fastread();
    ll t;
    cin >> t;
    while (t--) {
        cin >> n >> q;
        for (ll i = 1; i <= n; i++) {
            cin >> o[i];
            a[i] = 0;
        }
        while (q--) {
            ll k;
            cin >> k;
            if (k == 1) {
                ll l, r;
                cin >> l >> r;
                add(l, 1);
                add(r + 1, -1);
            }
            else {
                ll x;
                cin >> x;
                ll ans = o[x];
                if (o[x] >= 10) {
                    for (ll i = 1; i <= sum(x); i++)
                    {
                        ans = gxnum(ans);
                        if (ans < 10)
                            break;
                    }
                }
                cout << ans << "\n";
            }
        }
    }
    return 0;
}
~~~

线段树解法(非正解)

~~~c++
struct xianduan {
    ll l;   //当前节点左边界
    ll r;   //当前节点右边界
    ll val;  //当前节点的值
    ll lazy;  //当前节点lazy标记
}tr[NN];   //大小  线段树如果没有特别处理叶子节点的话，要开 8倍
ll a[Nn * 2];  //原数组
void pushup(ll id) {  //更新父节点
    tr[id].val = tr[id * 2].val + tr[id * 2 + 1].val;
}
void pushdown(ll id) { //更新下面两个点的值和lazy值
    if (tr[id].lazy) {
        tr[id * 2].val += tr[id].lazy * (tr[id * 2].r - tr[id * 2].l + 1);
        tr[id * 2 + 1].val += tr[id].lazy * (tr[id * 2 + 1].r - tr[id * 2 + 1].l + 1);
        tr[id * 2].lazy += tr[id].lazy;
        tr[id * 2 + 1].lazy += tr[id].lazy;
        tr[id].lazy = 0;
    }
}
void build(ll id, ll l, ll r) {
    if (l == r) {
        tr[id] = { l,r,a[l] };
        return;
    }
    else {
        tr[id] = { l,r };
    }
    ll mid = (l + r) >> 1;
    build(id * 2, l, mid);
    build(id * 2 + 1, mid + 1, r);
    pushup(id);
}
void qjgx(ll id, ll l, ll r, ll val) {
    if (tr[id].l >= l && tr[id].r <= r) {  //如果当前节点的值在询问的值中间，则直接返回
        tr[id].val += (tr[id].r - tr[id].l + 1) * val;
        tr[id].lazy += val;
        return;
    }
    pushdown(id);
    ll mid = (tr[id].l + tr[id].r) >> 1;
    if (l <= mid)qjgx(id * 2, l, r, val);
    if (r > mid)qjgx(id * 2 + 1, l, r, val);
    pushup(id);
}
ll query(ll id, ll l, ll r) {
    ll ans = 0;
    if (tr[id].l >= l && tr[id].r <= r) {
        return tr[id].val;
    }
    pushdown(id);
    ll mid = (tr[id].l + tr[id].r) >> 1;
    if (l <= mid)ans += query(id * 2, l, r);
    if (r > mid)ans += query(id * 2 + 1, l, r);
    return ans;
}
ll o[Nn * 2];
ll cnt[Nn*2];
int main() {
    fastread();
    ll t;
    cin >> t;
    while (t--) {
        ll n, q;
        cin >> n >> q;
        for (ll i = 1; i <= n; i++) {
            cin >> o[i];
            a[i] = 0;
            cnt[i] = 0;
        }
        build(1, 1, n);
        while (q--) {
            ll k;
            cin >> k;
            if (k == 1) {
                ll l, r;
                cin >> l >> r;
                qjgx(1, l, r, 1);
            }
            else {
                ll x;
                cin >> x;
                if (o[x] >= 10) {
                    ll cnt1 = query(1, x, x);
                    while (cnt[x] < cnt1) {
                        cnt[x]++;
                        ll u = 0;
                        while (o[x] != 0) {
                            u += o[x] % 10;
                            o[x] /= 10;
                        }
                        o[x] = u;
                    }
                }
                cout << o[x] << "\n";
            }
        }
    }
    return 0;
}
~~~

