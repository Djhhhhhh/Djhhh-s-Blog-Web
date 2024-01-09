## A. Boredom

#### 题目来源

​	[Codeforces Round 260 (Div. 1)](https://codeforces.com/contest/455)

#### 思路

​	dp，将数字最大值取出来后，按照数字算值即可，看当前值是否全取。

#### 代码实现

~~~c++
ll dp[210000];
void solve() {
    ll n; cin >> n;
    map<ll, ll>p;
    ll mx = 0;
    for (int i = 0; i < n; i++) {
        ll x; cin >> x;
        p[x]++;
        mx = max(x, mx);
    }
    dp[1] = p[1];
    for (int i = 2; i <= mx; i++) {
        dp[i] = max(dp[i - 1], dp[i - 2] + p[i] * i);
    }
    cout << dp[mx] << "\n";
}
~~~

## C. Kefa and Park

#### 题目来源

​	[Codeforces Round 321 (Div. 2)](https://codeforces.com/contest/580)

#### 思路

​	搜满足的叶子结点个数即可。

#### 代码实现

~~~c++
ll val[210000];
vector<ll>to[210000];
ll ans = 0;
ll n, m;
void dfs(ll id, ll sum,ll fa) {
    if (sum > m)return;
    ll u = 1;
    for (auto x :to[id]) {
        if (x == fa)continue;
        u = 0;
        dfs(x, (val[x] ? sum + 1 : 0), id);
    }
    ans += u;
}
void solve() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) {
        cin >> val[i];
    }
    for (int i = 0; i < n - 1; i++) {
        ll x, y; cin >> x >> y;
        to[x].push_back(y);
        to[y].push_back(x);
    }
    dfs(1, val[1], 0);
    cout << ans << "\n";
}
~~~

## A. Two Substrings

#### 题目来源

​	[Codeforces Round 306 (Div. 2)](https://codeforces.com/contest/550)

#### 思路

​	先复制一遍串，然后先找AB替换，然后再找BA；如果没找到再反着来一遍。

#### 代码实现

~~~c++
void solve() {
    string k; cin >> k;
    string kk = k;
    if (k.find("AB") != string::npos) {
        k = k.replace(k.find("AB"), 2, "..");
        if (k.find("BA") != string::npos) {
            cout << "YES\n";
            return;
        }
    }
    if (kk.find("BA") != string::npos) {
        kk = kk.replace(kk.find("BA"), 2, "..");
        if (kk.find("AB") != string::npos) {
            cout << "YES\n";
            return;
        }
    }
    cout << "NO\n";
}
~~~

## C. Divisibility by Eight

#### 题目来源

​	[Codeforces Round 306 (Div. 2)](https://codeforces.com/contest/550)

#### 思路

​	可知，前三位数中可以被8整除的数才能被8整除。暴力。

#### 代码实现

~~~c++
void solve() {
    string k; cin >> k;
    for (int i = 0; i < k.size(); i++) {
        for (int j = i + 1; j < k.size(); j++) {
            for (int z = j + 1; z < k.size(); z++) {
                ll x = (k[i] - '0') * 100 + (k[j] - '0') * 10 + (k[z] - '0');
                if (x % 8 == 0) {
                    cout << "YES\n" << x << "\n";
                    return;
                }
            }
            ll x = (k[i] - '0') * 10 + (k[j] - '0');
            if (x % 8 == 0) {
                cout << "YES\n" << x << "\n";
                return;
            }
        }
        ll x = (k[i] - '0');
        if (x % 8 == 0) {
            cout << "YES\n" << x << "\n";
            return;
        }
    }
    cout << "NO\n";
}
~~~

