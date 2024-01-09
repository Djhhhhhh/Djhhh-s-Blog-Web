## A. Winner

#### 题目来源

​	[Codeforces Beta Round 2](https://codeforces.com/contest/2)

#### 思路

​	题意就是一坨。总结下来意思就是，求出所有人最终得分中的最高分，然后找在最后得到最高得分的人最先得到最高得分以上的是谁。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<pair<string, ll>>k(n);
    map<string, ll>p;
    map<string, ll>pp;
    for (int i = 0; i < n; i++) {
        cin >> k[i].first >> k[i].second;
        p[k[i].first] = k[i].second + p[k[i].first];
    }
    ll mx = -pow(2, 30);
    for (auto x : p) {
        mx = max(mx, x.second);
    }
    for (int i = 0; i < n; i++) {
        pp[k[i].first] += k[i].second;
        if (pp[k[i].first] >= mx&&p[k[i].first]==mx) {
            cout << k[i].first << "\n";
            return;
        }
    }
}
~~~

## C. Little Girl and Maximum Sum

#### 题目来源

​	[Codeforces Round 169 (Div. 2)](https://codeforces.com/contest/276)

#### 思路

​	就是求区间覆盖子次数，按最高次数来计算。根据给定的区间，求出对应的差分数组，然后求出前缀和数组，然后排序该前缀和数组和原数组计算即可。

#### 代码实现

~~~c++
void solve() {
    ll n, m; cin >> n >> m;
    vector<ll>o(n);
    for (int i = 0; i < n; i++)cin >> o[i];
    vector<ll>cha(n + 1, 0);
    for (int i = 0; i < m; i++) {
        ll l, r; cin >> l >> r;
        cha[l-1]++;
        cha[r]--;
    }
    for (int i = 0; i < n; i++) {
        if (i != 0)cha[i] += cha[i - 1];
    }
    sort(cha.begin(), cha.end(), cmpb);
    sort(o.begin(), o.end(), cmpb);
    ll ans = 0;
    for (int i = 0; i < n; i++)ans += o[i] * cha[i];
    cout << ans << "\n";
}
~~~

## A. Powered Addition

#### 题目来源

​	[Codeforces Round 633 (Div. 1)](https://codeforces.com/contest/1338)

#### 思路

​	倍增思路，用最大值开始加上去，然后判断是否超过前一个数，不超过的话证明能需要加进去。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<ll>o(n);
    for (int i = 0; i < n; i++) {
        cin >> o[i];
    }
    ll mx = 0;
    for (int i = 1; i < n; i++) {
        if (o[i] < o[i - 1]) {
            for (ll j = 63; j >= 0; j--) {
                if (o[i] + pow(2, j) <= o[i - 1]) {
                    mx = max(mx, j + 1);
                    o[i] += pow(2, j);
                }
            }
        }
    }
    cout << mx << "\n";
}
~~~

