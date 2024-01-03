## B. Regular Bracket Sequence

#### 题目来源

​	[Codeforces Beta Round 26](https://codeforces.com/contest/26)

#### 思路

​	括号序列，拿栈模拟即可。

#### 代码实现

~~~c++
void solve() {
    string k; cin >> k;
    stack<char>u;
    ll ans = 0;
    for (int i = 0; i < k.size(); i++) {
        if (k[i] == '(')u.push(k[i]);
        else {
            if (u.size()) {
                u.pop(); ans += 2;
            }
        }
    }
    cout << ans << "\n";
}
~~~

## B. Applejack and Storages

#### 题目来源

​	[Codeforces Round 662 (Div. 2)](https://codeforces.com/contest/1393)

#### 思路

​	模拟即可，计数优先记四个相同，看剩下的能不能组一对。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    set<ll>o;
    map<ll, ll>p;
    for (int i = 0; i < n; i++) {
        ll x; cin >> x;
        o.insert(x); p[x]++;
    }
    ll four = 0;
    ll two = 0;
    for (auto x : o) {
        four += p[x] / 4;
        two += p[x] % 4 / 2;
    }
    ll t; cin >> t;
    while (t--) {
        char c; cin >> c;
        if (c == '+') {
            ll x; cin >> x; o.insert(x); p[x]++;
            four -= (p[x]-1) / 4;
            two -= (p[x]-1) % 4 / 2;
            four += p[x] / 4;
            two += p[x] % 4 / 2;
        }
        else {
            ll x; cin >> x; p[x]--; if (p[x] == 0)o.erase(x);
            four -= (p[x] + 1) / 4;
            two -= (p[x] + 1) % 4 / 2;
            four += p[x] / 4;
            two += p[x] % 4 / 2;
        }
        if (four >= 1 && (two >= 2 || four >= 2)) {
            cout << "YES\n";
        }else cout << "NO\n";
    }
}
~~~

