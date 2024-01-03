## [A. Channel](https://codeforces.com/contest/1863/problem/A)

#### 思路

​	给你一个现在观看人数，和一个目标观看人数，如果在访问中+号的数量加上最初观看人数大于等于目标观看人数，则maybe，在输入访问记录的期间记录+和-的数量，进行运算来判断中途是否有可能所有人都在线。

#### 代码实现

~~~c++
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, a, q;
        cin >> n >> a >> q;
        char k;
        ll cnt1 = 0;
        ll cnt2 = 0;
        int v = 0;
        for (int i = 0; i < q; i++) {
            cin >> k;
            if (k == '-') {
                cnt1++;
            }
            else {
                cnt2++;
            }
            if (a + cnt2 - cnt1 == n) {
                v = 1;
            }
        }
        if (v || n == a) {
            cout << "YES\n";
        }
        else if (a + cnt2 >= n) {
            cout << "MAYBE\n";
        }
        else {
            cout << "NO\n";
        }
    }
    return 0;
}
~~~

## [B.Split Sort](https://codeforces.com/contest/1863/problem/B)

#### 思路

​	给你一个序列，一种操作方式。根据观察，操作能改变的是非递增连续序列的顺序，所以我们只需要查询队列种存在多少种不同的顺序就是我们所要进行的操作数。

#### 代码实现

~~~c++
ll o[1000000];
int main() {
    ll t;
    cin>>t;
    while(t--){
        ll n;
        cin>>n;
        map<ll,ll>p;
        ll ans=0;
        for(ll i=1;i<=n;i++){
            cin>>o[i];
            p[o[i]]=i;
        }
        ll wz=p[n];
        for(ll i=n-1;i>=1;i--){
            if(p[i]>wz){
                ans++;
            }
            wz=p[i];
        }
        cout<<ans<<"\n";
    }   
    return 0;
}
~~~

## [C.MEX Repetition](https://codeforces.com/contest/1863/problem/C)

#### 思路

​	这题很明显啊，就是个队列，把没存在过的数字加到队尾，每一次询问走一次。但是需要优化次数，我们可以发现每n+1次就是一个循环。

#### 代码实现

~~~c++
int main() {
    ll t;
    cin>>t;
    while(t--){
        ll n,m;
        cin>>n>>m;
        deque<ll>k;
        map<ll,ll>p;
        m=m%(n+1);
        for(ll i=1;i<=n;i++){
            ll a;
            cin>>a;
            k.push_back(a);
            p[a]=1;
        }
        for(int i=0;i<=n;i++){
            if(p[i]==0){
                k.push_back(i);
                break;
            }
        }
        for(ll i=1;i<=m;i++){
            k.push_front(k.back());
            k.pop_back();
        }
        for(ll i=1;i<=n;i++){
            cout<<k.front()<<" ";
            k.pop_front(); 
        }
        cout<<"\n";
    }   
    return 0;
}
~~~

