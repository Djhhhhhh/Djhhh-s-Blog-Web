## A. Coins

#### 思路

​	判断总数是否可以被2整除或者被m整除或者(n-m)是否可以被2整除即可。

#### 代码实现

~~~c++
void solve() {
    ll n, m; cin >> n >> m;
    if ((n - m) % 2 == 0 || n % m == 0||n%2==0) {
        cout << "YES\n";
    }else {
        cout << "NO\n";
    }
}
~~~

## B. Long Legs

#### 思路

​	假定x为跨到终点的值，那么可证此刻最佳答案应该为：x-1+ceil(a/x)+ceil(b/x)。

​	具体证明水平有限，请参考网上资料。

#### 代码实现

~~~c++
void solve() {
    ll a, b; cin >> a >> b;
    if (a > b)swap(a, b);
    ll ans = pow(2, 31) - 1;
    for (int i = 1; i <= 100000; i++) {
        ans = min(ans, (ll)ceil(a * 1.0 / i) + (ll)ceil(b * 1.0 / i) + i - 1ll);
    }
    cout << ans << "\n";
}
~~~

## C. Search in Parallel

#### 思路

​	按出现频率排序，然后分别给两个机器即可，注意代码细节。

#### 代码实现

~~~c++
void solve() {
    ll n, t1, t2; cin >> n >> t1 >> t2;
    vector<ll>o(n);
    for (int i = 0; i < n; i++)cin >> o[i];
    vector<int>p(n);
    iota(p.begin(), p.end(), 0);
    sort(p.begin(), p.end(), [&](ll a, ll b) {
        return o[a] > o[b];
        });
    queue<ll>f;
    queue<ll>s;
    ll t = 0;
    ll b = 1;
    for (int i = 0; i < n; i++) {
        if (t1 > t2) {
            t += t2;
            if (t / t1 == b) {
                b++;
                f.push(p[i] + 1);
                if (i + 1 < n) {
                    s.push(p[i + 1] + 1); i++;
                }
            }
            else {
                s.push(p[i] + 1);
            }
        }
        else if(t2>t1) {
            t += t1;
            if (t / t2 == b) {
                b++;
                s.push(p[i] + 1);
                if (i + 1 < n) {
                    f.push(p[i + 1] + 1); i++;
                }
            }
            else {
                f.push(p[i] + 1);
            }
        }
        else if (t2 == t1) {
            t++;
            if (t % 2 == 0) {
                s.push(p[i] + 1);
            }
            else {
                f.push(p[i] + 1);
            }
        }
    }
    cout << f.size() << " ";
    while (f.size()) {
        cout << f.front() << " ";
        f.pop();
    }
    cout << "\n" << s.size() << " ";
    while (s.size()) {
        cout << s.front() << " ";
        s.pop();
    }
    cout << "\n";
}
~~~



