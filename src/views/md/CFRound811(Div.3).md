## A. Everyone Loves to Sleep

#### 思路

​	计算出所有的相差分钟数，排序后取最小值即可。

#### 代码实现

~~~c++
void solve() {
    ll n, h, m; cin >> n >> h >> m;
    vector<ll>p;
    for (int i = 0; i < n; i++) {
        ll hh, mm; cin >> hh >> mm;
        if (hh < h) {
            hh += 24;
        }else if (hh == h&&mm<m) {
            hh += 24;
        }
        p.push_back((hh - h) * 60 + mm-m);
    }
    sort(p.begin(), p.end());
    cout << p.front()/60 << " " << p.front()%60 << "\n";
}
~~~

## B. Remove Prefix

#### 思路

​	移除最左端元素，将计数减一，直到所有字符出现次数为1。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<ll>o(n);
    map<ll, ll>p;
    map<ll, ll>pp;
    ll cnt = 0;
    for (int i = 0; i < n; i++) {
        cin >> o[i];
        p[o[i]]++;
        if (p[o[i]] >= 2&&pp[o[i]]!=1) {
            cnt++;
            pp[o[i]] = 1;
        }
    }
    if (cnt == 0) {
        cout << 0 << "\n";
        return;
    }
    for (int i = 0; i < n; i++) {
        p[o[i]]--;
        if (p[o[i]] == 1) {
            cnt--;
        }
        if (cnt == 0) {
            cout << i + 1 << "\n";
            return;
        }
    }
}
~~~

## C. Minimum Varied Number

#### 思路

​	最小组成，爆搜。

#### 代码实现

~~~c++
ll n;
string ans="";
void dfs(char id, ll sum, string k) {
    if (sum == n) {
        ans = k;
        return;
    }
    for (char i = id; i >= '0'; i--) {
        if (sum + (i-'0') <= n) {
            dfs(id - 1, sum + (i - '0'), k + i);
        }
        if (ans!="")return;
    }
}
void solve() {
    ans = "";
    cin >> n;
    dfs('9', 0, "");
    reverse(ans.begin(), ans.end());
    cout << ans << "\n";
}
~~~

## D. Color with Occurrences

#### 思路

​	暴力求出所有可以涂色的线段，然后转变为最小区间覆盖问题。

#### 代码实现

~~~
struct line {
    ll id = 0;
    ll l = 0;
    ll r = 0;
    line(ll id, ll l, ll chang) {
        this->id = id;
        this->l = l;
        this->r = l + chang - 1;
    }
};
void solve() {
    string k; cin >> k;
    ll n; cin >> n;
    vector<line>now;
    now.clear();
    for (int i = 0; i < n; i++) {
        string x; cin >> x;
        for (int j = 0; j < k.size() - x.size()+1; j++) {
            if (x == k.substr(j, x.size())) {
                now.push_back(line(i, j, x.size()));
            }
        }
    }
    if (now.size() == 0) {
        cout << "-1\n"; return;
    }
    sort(now.begin(), now.end(), [&](line a, line b) {
        if (a.l != b.l)return a.l < b.l;
        return a.r > b.r;
        });
    if (now[0].l > 0) {  //当第一个区间连0都不能覆盖的时候跳出程序
        cout << "-1\n";
        return;
    }
    vector<line>ans;
    ans.clear();
    ans.push_back(now[0]);
    ll r = now[0].r; //当前能够覆盖的最右端
    ll rr = r;//用于判断当前区间的左端点是否在范围内
    ll cnt = 1;//当前选中的时第几个线段
    ll nn = now.size();//区间个数
    ll mm = k.size();//最大范围
    while (cnt < nn && rr < mm - 1) {
        if (now[cnt].l > rr+1) {//比前一个右端点还大，直接退出
            cout << "-1\n"; return;
        }
        ll id = -1;
        while (cnt < nn && r < mm&&now[cnt].l <= rr + 1) {
            if (now[cnt].r > r) {
                id = cnt;
                r = now[cnt].r;
            }
            cnt++;
        }
        ans.push_back(now[id]);
        rr = r;
    }
    if (rr < mm-1) { //没有完整覆盖
        cout << "-1\n"; return;
    }
    cout << ans.size() << "\n";
    for (int i = 0; i < ans.size(); i++)cout << ans[i].id + 1 << " " << ans[i].l + 1 << "\n";
}
~~~

注：该代码莫名RE，过不了，先放在这里，以后改。

## E. Add Modulo 10

#### 思路

​	找规律，发现 2 4 6 8有循环结。奇数均可转化为偶数，5 0特判即可。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    set<ll>u;
    for (int i = 0; i < n; i++) {
        ll x; cin >> x;
        while (x % 10 != 2&&x%10!=0) {
            x += x % 10;
        }
        if (x % 10 == 0) {
            u.insert(x);
        }else u.insert(x % 20);
    }
    if (u.size() == 1)cout << "Yes\n";
    else cout << "No\n";
}
~~~



