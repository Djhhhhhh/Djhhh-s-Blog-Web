## C. Heavy Intervals

#### 题目来源

​	[Pinely Round 3 (Div. 1 + Div. 2)](https://codeforces.com/contest/1909)

#### 思路

​	对于lr两组端点，类似于括号匹配的模式。按照区间长度严格递增，然后得到的代价即为最小。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<ll>o1(n);
    vector<ll>o2(n);
    vector<ll>c(n);
    for (int i = 0; i < n; i++)cin >> o1[i];
    for (int i = 0; i < n; i++)cin >> o2[i];
    for (int i = 0; i < n; i++)cin >> c[i];
    sort(o1.begin(), o1.end());
    sort(o2.begin(), o2.end());
    sort(c.begin(), c.end(), cmpb);
    vector<ll>cha;
    ll l = 0, r = 0;
    stack<ll>u;
    while (l != n || r != n) {
        if (l == n) {
            cha.push_back(o2[r] - u.top());
            u.pop();
            r++;
            continue;
        }
        if (o1[l] < o2[r]) {
            u.push(o1[l]);
            l++;
        }else {
            cha.push_back(o2[r] - u.top());
            u.pop();
            r++;
        }
    }
    sort(cha.begin(), cha.end());
    ll ans = 0;
    for (int i = 0; i < n; i++) {
        ans += c[i] * cha[i];
    }
    cout << ans << "\n";
}   
~~~

## C. Phoenix and Towers

#### 题目来源

​	[Codeforces Global Round 14](https://codeforces.com/contest/1515)

#### 思路

​	题目中给的x范围，不存在no的情况。我们只需要贪心即可，每次取出高度最低的加上当前的木块即可。

#### 代码实现

~~~c++
void solve() {
    ll n, m, cha; cin >> n >> m >> cha;
    priority_queue<pair<ll, ll>, vector<pair<ll, ll>>, greater<pair<ll, ll>> >p;
    vector<ll>ans(n, 0);
    for (int i = 1; i <= m; i++) {
        p.push({ 0,i });
    }
    for (int i = 1; i <= n; i++) {
        ll x; cin >> x;
        pair<ll, ll>mid = p.top();
        p.pop();
        mid.first += x;
        ans[i - 1] = mid.second;
        p.push(mid);
    }
    cout << "YES\n";
    for (int i = 0; i < n; i++)cout << ans[i] << " ";
    cout << "\n";
}   
~~~

## C. News Distribution

#### 题目来源

​	[Educational Codeforces Round 65 (Rated for Div. 2)](https://codeforces.com/contest/1167)

#### 思路

​	并查集，没啥说的，这题数据挺猛容易被卡。

#### 代码实现

~~~c++
ll n, m;
ll fa[1010000];//父节点数组
ll ans[1010000];//高度节点数组
int Find(int x) {//查询优化  路径压缩
    return fa[x] == x ? fa[x] : fa[x] = Find(fa[x]);//使元素直接指向树的根 
}
void solve() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) fa[i] = i;
    for (int i = 1; i <= m; i++)
    {
        ll x; cin >> x;
        if (x == 0) continue;
        ll be; cin >> be;
        for (int j = 2; j <=  x; j++)
        {
            ll mid;cin >> mid; ll a = Find(be), b = Find(mid);
            fa[a] = b;
        }
    }
    for (int i = 1; i <= n; i++) ans[Find(i)]++; 
    for (int i = 1; i <= n; i++) cout << ans[Find(i)] << ' ';
    cout << "\n";
}
~~~

