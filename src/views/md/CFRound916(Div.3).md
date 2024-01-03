## A. Problemsolving Log

#### 思路

​	记录题目所用时间，遍历字母判断是否可以完成题目即可。

#### 代码实现

~~~~
void solve() {
    ll n;cin>>n;
    string k;cin>>k;
    ll v[27]={0};
    for(int i=0;i<n;i++){
        v[k[i]-'A'+1]++;
    }
    ll ans=0;
    for(int i=1;i<=26;i++){
        if(v[i]>=i){
            ans++;
        }
    }
    cout<<ans<<"\n";
}
~~~~

## B. Preparing for the Contest

#### 思路

​	构造题，构造一个先递减再递增即可，让他后面一直兴奋。

#### 代码实现

~~~
void solve() {
    ll n,m;cin>>n>>m;
    for(int i=n;i>=m+2;i--){
        cout<<i<<" ";
    }
    for(int i=1;i<=m+1;i++){
        cout<<i<<" ";
    }
    cout<<"\n";
}
~~~

## C. Quests

#### 思路

​	求出第第一个数组的前缀和，然后第二个数组取得是b数组中前面i个的最大值，然后暴力跑长度即可。

#### 代码实现

~~~
ll a[210000];
ll suma[210000];
ll b[210000];
ll sumb[210000];
void solve() {
    ll n,m;cin>>n>>m;
    suma[0]=0;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        suma[i]=suma[i-1]+a[i];
    }
    ll mx=0;
    for(int i=1;i<=n;i++){
        cin>>b[i];
        mx=max(b[i],mx);
        sumb[i]=mx;
    }
    ll ans=0;
    for(int i=1;i<=m;i++){
        if(i<=n)ans=max(ans,suma[i]+(m-i)*sumb[i]);
        else {
            ans=max(ans,suma[n]+(m-n)*sumb[n]);
            break;
        }
    }
    cout<<ans<<"\n";
}
~~~

## D. Three Activities

#### 思路

​	因只需要选择三个不同的天，排序完暴力跑六种情况取最大值即可。

​	注意：可能会有一天中，有很多值都是较大的，要对这个进行抉择。

#### 代码实现

~~~c++
struct k{
    ll id,val;
};
bool cmp(k a,k b){
    return a.val>b.val;
}
void solve() {
    k a[210000];
    k b[210000];
    k c[210000];
    ll n;cin>>n;
    for(int i=1;i<=n;i++){
        k mid;
        cin>>mid.val;
        mid.id=i;
        a[i]=mid;
    }
    for(int i=1;i<=n;i++){
        k mid;
        cin>>mid.val;
        mid.id=i;
        b[i]=mid;
    }
    for(int i=1;i<=n;i++){
        k mid;
        cin>>mid.val;
        mid.id=i;
        c[i]=mid;
    }
    sort(a+1,a+1+n,cmp);    
    sort(b+1,b+1+n,cmp);
    sort(c+1,c+1+n,cmp);
    ll ans=0;
    for(int i=1;i<=6;i++){
        ll la=1;
        ll lb=1;
        ll lc=1;
        ll val=0;
        switch(i){
            case 1:
            val+=a[la].val;
            if(b[lb].id==a[la].id)lb++;
            if(c[lc].id==a[la].id)lc++;
            val+=b[lb].val;
            if(c[lc].id==b[lb].id)lc++;
            if(c[lc].id==a[la].id)lc++;
            val+=c[lc].val;
            break;
            case 2:
            val+=a[la].val;
            if(b[lb].id==a[la].id)lb++;
            if(c[lc].id==a[la].id)lc++;
            val+=c[lc].val;
            if(c[lc].id==b[lb].id)lb++;
            if(b[lb].id==a[la].id)lb++;
            val+=b[lb].val;
            break;
            case 3:
            val+=b[lb].val;
            if(a[la].id==b[lb].id)la++;
            if(c[lc].id==b[lb].id)lc++;
            val+=a[la].val;
            if(c[lc].id==a[la].id)lc++;
            if(b[lb].id==c[lc].id)lc++;
            val+=c[lc].val;
            break;
            case 4:
            val+=b[lb].val;
            if(a[la].id==b[lb].id)la++;
            if(c[lc].id==b[lb].id)lc++;
            val+=c[lc].val;
            if(a[la].id==c[lc].id)la++;
            if(a[la].id==b[lb].id)la++;
            val+=a[la].val;
            break;
            case 5:
            val+=c[lc].val;
            if(a[la].id==c[lc].id)la++;
            if(b[lb].id==c[lc].id)lb++;
            val+=a[la].val;
            if(b[lb].id==a[la].id)lb++;
            if(b[lb].id==c[lc].id)lb++;
            val+=b[lb].val;
            break;
            case 6:
            val+=c[lc].val;
            if(a[la].id==c[lc].id)la++;
            if(b[lb].id==c[lc].id)lb++;
            val+=b[lb].val;
            if(b[lb].id==a[la].id)la++;
            if(a[la].id==c[lc].id)la++;
            val+=a[la].val;
            break;
        }
        ans=max(val,ans);
    }
    cout<<ans<<"\n";
}
~~~

## E1E2. Game with Marbles 

#### 思路

​	爱丽丝希望得分最大化，而鲍勃希望得分最小化。所以他们两个的操作其实是等价的，我们只需要排序他们对应的弹珠大小也就是权值大小即可，按照id号对于两组的大小进行排序。然后对于得到的id序列，对于奇数次，也就是爱丽丝操作的时候，让差值变大，ans加上爱丽丝的弹珠数量；对于偶数次操作，让差值变小，减下去鲍勃的弹珠即可。

#### 代码实现

~~~c++
void solve() {
    ll n;cin >> n;
    vector<ll>p1(n);
    vector<ll>p2(n);
    for (int i = 0; i < n; i++)cin>>p1[i];
    for (int i = 0; i < n; i++)cin>>p2[i];
    vector<int> p(n);
    iota(p.begin(), p.end(), 0);
    sort(p.begin(), p.end(), [&](ll a, ll b) {
        return p1[a] + p2[a] > p1[b] + p2[b];
        });
    ll ans = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            ans += p1[p[i]] - 1;
        }
        else {
            ans -= p2[p[i]] - 1;
        }
    }
    cout << ans << "\n";
}
~~~



