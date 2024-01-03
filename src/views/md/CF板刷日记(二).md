## C. Soldier and Cards

#### 题目来源

​	[Codeforces Round 304 (Div. 2)](https://codeforces.com/contest/546)

#### 思路

​	模拟，然后限制操作次数，超过一定次数输出-1。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    deque<ll>p1;
    deque<ll>p2;
    ll cnt; cin >> cnt;
    for (int i = 0; i < cnt; i++) {
        ll x; cin >> x; p1.push_back(x);
    }
    cin >> cnt;
    for (int i = 0; i < cnt; i++) {
        ll x; cin >> x; p2.push_back(x);
    }
    ll ans = 0;
    while (p1.size() && p2.size()) {
        ans++;
        if (ans >= 1000000) {
            cout << "-1\n"; return;
        }
        if (p1.front() < p2.front()) {
            p2.push_back(p1.front());
            p1.pop_front();
            p2.push_back(p2.front());
            p2.pop_front();
        }
        else {
            p1.push_back(p2.front());
            p2.pop_front();
            p1.push_back(p1.front());
            p1.pop_front();
        }
    }
    cout << ans << " ";
    if (p1.size())cout << 1 << "\n";
    else cout << 2 << "\n";
}
~~~

## C. Johnny and Another Rating Drop

#### 题目来源

​	[Codeforces Round 647 (Div. 2) - Thanks, Algo Muse!](https://codeforces.com/contest/1362)

#### 思路

​	打标找规律，可得是根据原数右移加和。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    ll ans = 0;
    while (n) {
        ans += n;
        n >>= 1;
    }
    cout << ans << "\n";
}
~~~

## 	B. Polo the Penguin and Matrix

#### 题目来源

​	[Codeforces Round 177 (Div. 2)](https://codeforces.com/contest/289)

#### 思路

​	首先，当矩阵中所有值与d的余数相等时才可以被加和为同一个数。第二，对于剩下的数字，我们只需要排序后找到中的数字，然后让所有的数等于中间值即为最小操作次数。

#### 代码实现

~~~c++
void solve() {
    ll n, m, d; cin >> n >> m >> d;
    ll ans = 0;
    vector<ll>o(n * m);
    cin >> o[0];
    ll mood = o[0] % d;
    for (int i = 1; i < n * m; i++) {
        cin >> o[i];
        if (o[i] % d != mood) {
            cout << "-1\n"; return;
        }
    }
    sort(o.begin(), o.end(), cmps);
    for (int i = 0; i < n * m; i++) {
        ans += abs(o[i] - o[n * m / 2]) / d;
    }
    cout << ans << "\n";
}
~~~

## C. Constanze's Machine

#### 题目来源

​	[Codeforces Round 597 (Div. 2)](https://codeforces.com/contest/1245)

#### 思路

​	首先可以知道，机器必然将m转化为nn，w转化为uu，所以当m和w存在时输出0；然后我们再观察数列，数列可以构成的种类数构成斐波那契数列，我们预处理方案即可。然后记录连续的数目，最后求和即可。

#### 代码实现

~~~c++
ll F[100002];
void solve() {
    F[2] = 2;
    F[1] = 1;
    for (int i = 3; i < 100003; i++) {
        F[i] = (F[i - 1] + F[i - 2])%(ll)(1e9+7);
    }
    string k; cin >> k;
    vector<ll>o;
    for (int i = 0; i < k.size();) {
        ll l = i;
        if(k[l]=='u')
        while (l+1<k.size() && k[l] == 'u' && k[l + 1] == k[l]) {
            l++;
        }
        else if(k[l]=='n')
        while (l + 1 < k.size() && k[l] == 'n' && k[l + 1] == k[l]) {
            l++;
        }
        o.push_back(l - i + 1);
        i = l + 1;
    }
    if (count(k.begin(), k.end(), 'm') || count(k.begin(), k.end(), 'w')) {
        cout << "0\n";
        return;
    }
    ll ans = 1;
    for (int i = 0; i < o.size(); i++) {
        ans = ans * F[o[i]] % (ll)(1e9 + 7);
    }
    cout << ans<< "\n";
}
~~~



​	