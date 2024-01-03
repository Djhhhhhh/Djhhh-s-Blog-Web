## [Problem - A - Codeforces](https://codeforces.com/contest/1862/problem/A)

#### 思路

​	因为n,m最多只有20，所以该题目可暴力解决。每次循环先循环列，再循环行，这是满足题意的方式。然后按照顺序一次记录"vika"每个字母是否出现，找到当前需要找的字母并且未记录过的时候，记录这个字母出现，然后跳过当前次循环。

#### 代码实现

~~~c++
int main() {
    fastread();
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        char k[22][22];
        cin >> n >> m;
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++)
                cin >> k[i][j];
        map<char, int>p;
        map<char, int>pp;
        pp[1] = 'v';
        pp[2] = 'i';
        pp[3] = 'k';
        pp[4] = 'a';
        int cnt = 1;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (k[j][i] ==pp[cnt]) {
                    p[pp[cnt]] = 1;
                    cnt++;
                    break;
                }
            }
        }
        if(p['a']==0||p['i']==0||p['k']==0||p['v'==0]){
            cout << "no\n";
        }
        else {
            cout << "yes\n";
        }
 
    }
    return 0;
}
~~~

## [Problem - B - Codeforces](https://codeforces.com/contest/1862/problem/B)

#### 思路

​	是一道构造题，根据题目中所要求的条件，构造出原序列。该题目很容易看出，开辟一个答案队列，然后你循环数组中的每个位置，若当前数字比前一个数字大，则将该数字扔进队列两次，否则扔进一次。

#### 代码实现

~~~c++
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        int o[200001];
        cin >> n;
        for (int i = 1; i <= n; i++) {
            cin >> o[i];
        }
        queue<int>p;
        for (int i = 1; i <= n; i++) {
            if (o[i] >= o[i - 1]) {
                p.push(o[i]);
            }
            else {
                p.push(o[i]);
                p.push(o[i]);
            }
        }
        cout << p.size()<<"\n";
        while (p.size()) {
            cout << p.front()<<" ";
            p.pop();
        }
        cout << "\n";
    }
    return 0;
}
~~~

## [Problem - C - Codeforces](https://codeforces.com/contest/1862/problem/C)

#### 思路

​	输入一组序列，让你判断该序列平放和竖放得出的图形，是否是对称图形。我们可以想如果要是两个图像对称的话，两个图形的外围边长所构成的序列必然相反。所以我们可以开两个队列用于存取答案，然后比较得出答案。

#### 代码实现

~~~c++
ll o[200002];
int main() {
    ll t;
    cin >> t;
    while (t--) {
        ll n;
        cin >> n;
        if (n == 1) {
            cin >> n;
            if (n == 1) {
                cout << "YES\n";
            }
            else {
                cout << "NO\n";
            }
            continue;
        }
        cin >> o[1];
        ll h = o[1];
        ll v = 1;
        queue<ll>p1;
        queue<ll>p2;
        for (int i = 2; i <= n; i++) {
            cin >> o[i];
            if (o[i] == h) {
                v++;
            }
            else if (o[i] != h) {
                p1.push(v);
                p1.push(h - o[i]);
                h = o[i];
                v = 1;
            }
            if (i == n && o[i] == h) {
                p1.push(v);
                p1.push(o[i]);
            }
        }
        h = o[n];
        v = 1;
        p2.push(h);
        for (int i = n-1; i >=1; i--) {
            if (o[i] == h) {
                v++;
            }
            else if(o[i]!=h) {
                p2.push(v);
                p2.push(o[i] - h);
                h = o[i];
                v = 1;
            }
            if (i == 1 && o[i] == h) {
                p2.push(v);
            }
        }
        bool flag = 1;
        while (p1.size()) {
            if (p1.front() != p2.front()) {
                flag = 0;
                break;
            }
            p1.pop();
            p2.pop();
        }
        if (flag) {
            cout << "YES\n";
        }
        else {
            cout << "NO\n";
        }
    }
    return 0;
}
~~~

## [Problem - D - Codeforces](https://codeforces.com/contest/1862/problem/D)

#### 思路

​	由题目很容易看出，取得距离目标种类数最近且小于的数字的Cn2然后加上种类减去Cn2的数值。得出答案。该题目为1e18，爆longlong，需要使用unsigned long long

#### 代码实现

~~~c++
unsigned ll n;
bool check(unsigned ll x) {
    return x <= n * 2 / (x - 1);
}
int main() {
    unsigned ll t;
    cin >> t;
    while (t--) {
        cin >> n;
        if (n == 1) {
            cout << "2\n";
            continue;
        }
        unsigned ll l = 0;
        unsigned ll r = 1e18;
        unsigned ll ans = 1e18;
        while (l <= r) {
            unsigned ll mid = l + r >> 1;
            if (check(mid)) {
                ans = min(mid + n - (mid*(mid - 1) / 2), ans);
                l = mid+1;
            }
            else {
                r = mid-1;
            }
        }
        cout << ans << "\n";
    }
    return 0;
}
~~~

## [Problem - E - Codeforces](https://codeforces.com/contest/1862/problem/E)

#### 思路

​	给出一个长度为n的序列，然后让你求出m个数值，且根据题目中所要求取得的数值最大。我们只需要开取一个优先队列，然后从开头到后，将每个大于0的数字扔入队列中，然后每单那个队列中数目大于m的时候，弹出该数字，并将该数字的影响减下去，每次判断是否比记录的答案大，取最大值。

#### 代码实现

~~~c++
ll o[200002];
int main() {
    int t;
    cin>>t;
    while(t--){
        ll n,m,d;
        cin>>n>>m>>d;
        for(int i=1;i<=n;i++)cin>>o[i];
        priority_queue<ll,vector<ll>,greater<>>p;
        ll sum=0;
        ll ans=0;
        for(int i=1;i<=n;i++){
            if(o[i]>0){
                p.push(o[i]);
                sum+=o[i];
            }
            if(p.size()>m){
                sum-=p.top();
                p.pop();
            }
            ans=max(ans,sum-i*d);
        }
        cout<<ans<<"\n";
    }
    return 0;
}
~~~



