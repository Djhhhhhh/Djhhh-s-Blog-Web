## E. Accidental Victory

#### 题目来源

​	[Codeforces Round 702 (Div. 3)](https://codeforces.com/contest/1490)

#### 思路

​	对于每个人的硬币与他的id是绑定的，所以在将数据排序的时候也需要将id进行排序，此处可以用结构体代替。对于每个人的硬币，他可以拿所有比它小的硬币，那么做一个前缀和重复处理即可，二分去查可以拿的最大值，直到两次选取的位置一样停下操作，判断是否为最后一个位置，输出序号即可。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<ll>o(n);
    for (int i = 0; i < n; i++)cin >> o[i];
    vector<int>id(n);
    iota(id.begin(), id.end(), 0);
    sort(id.begin(), id.end(), [&](ll a, ll b) {
        return o[a] < o[b];
        });
    sort(o.begin(), o.end(), cmps);
    vector<ll>sum(n);
    for (int i = 0; i < n; i++) {
        if (i == 0)sum[i] = o[i];
        else sum[i] = sum[i - 1] + o[i];
    }
    vector<ll>ans;
    for (int i = 0; i < n; i++) {
        ll be = 0;
        ll mid = sum[i];
        while (be != (upper_bound(o.begin(), o.end(), mid) - o.begin()-1)) {
            be = upper_bound(o.begin(), o.end(), mid) - o.begin()-1;
            mid = sum[be];
        }
        if (be + 1 == n)ans.push_back(id[i] + 1);
    }
    sort(ans.begin(), ans.end(), cmps);
    cout << ans.size() << "\n";
    for (int i = 0; i < ans.size(); i++)cout << ans[i] << " ";
    cout << "\n";
}
~~~

## A. Learning Languages

#### 题目来源

​	[Codeforces Round 170 (Div. 1)](https://codeforces.com/contest/277)

#### 思路

​	对于两个来说，只要中间存在一条中间人翻译的链接，即使语言差太多也能进行沟通。我们可以把该问题抽象为图，也就是意思在图内任意两点只要存在一条通路即可进行翻译。所以我们只需要判断连通的块数即可，用并查集抽象该问题。对于会语言为0的同学，我们只需要为他创建一个全新的语言块即可，即m+1。对于所有人都不会说话的情况，特判输出人数即可。

#### 代码实现

~~~c++
ll n, m;
ll f[210000];//父节点数组
ll h[210000];//高度节点数组
void Init() { //初始化
	for (int i = 1; i <= 210; i++) {
		f[i] = i;
		h[i] = 0;
	}
}
int Find(int x) {//查询优化  路径压缩
	return f[x] == x ? f[x] : f[x] = Find(f[x]);//使元素直接指向树的根 
}
void merge(int a, int b) {//合并优化 避免退化（按秩合并）
	int fa = Find(a);
	int fb = Find(b);
	if (fa == fb) return;
	if (h[fa] < h[fb]) {  //如果元素 a对应的树的高度比 b小 
		f[fa] = fb;  //使元素 a的根指向元素 b的根 
	}
	else {
		f[fb] = fa;  //否则让元素 b的根指向元素 a的根 
		if (h[fa] == h[fb]) h[fa]++;// 如果两者对应的树的高度相同，则使新生成的树高度 +1 
	}
}
void solve() {
    cin >> n >> m;
	Init();
	map<ll, ll>p;
	bool u = 1;
	for (int i = 1; i <= n; i++) {
		ll x; cin >> x;
		if (x == 0) {
			m++;
			p[m]++;
		}
		else {
			u = 0;
			vector<ll>o(x);
			for (int i = 0; i < x; i++) {
				cin >> o[i];
				p[o[i]]++;
				if (i != 0) {
					merge(o[i - 1], o[i]);
				}
			}
		}
	}
	ll ans = 0;
	if (u) {
		cout << n << "\n";
		return;
	}
	for (int i = 1; i <= m; i++) {
		if (i == Find(i)&&p[i]!=0) {
			ans++;
		}
	}
	cout << ans-1 << "\n";
}
~~~

## B. Quasi Binary

#### 题目来源

​	[Codeforces Round 300](https://codeforces.com/contest/538)

#### 思路

​	按数字拆就完事了，最多就9*10^6^ 次。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<ll>ans;
    while (n) {
        ll x = n;
        ll cnt = 1;
        ll sum = 0;
        while (x) {
            if((x % (ll)pow(10, cnt))!=0) sum += pow(10, cnt - 1);
            x -= (x % (ll)pow(10, cnt));
            cnt++;
        }
        n -= sum;
        ans.push_back(sum);
    }
    cout << ans.size() << "\n";
    for (int i = 0; i < ans.size(); i++)cout << ans[i] << " ";
}
~~~

## D. Game With Array

#### 题目来源

​	[Codeforces Round 643 (Div. 2)](https://codeforces.com/contest/1355)

#### 思路

​	贪心，我们将数组中元素中的种类尽可能减小，也就是除了最后一个以外均为1。然后对于剩下那个数字的数值我们确定，我们就可以得到一个可以组成的区间值。然后判断是否大于n即可。

#### 代码实现

~~~c++
void solve() {
    ll n, m; cin >> n >> m;
    if (m - (n - 1) > n) {
        cout << "YES\n";
        for (int i = 0; i < n - 1; i++) {
            cout << "1 ";
        }
        cout << m - (n - 1) << "\n" << n << "\n";
    }
    else {
        cout << "NO\n";
    }
}
~~~

## A. k-th divisor

#### 题目来源

​	[Educational Codeforces Round 17](https://codeforces.com/contest/762)

#### 思路

​	用类似于质数筛的试除法，我们只需要找出1至sqrt(n)的因数即可，剩下的所有因数可以由已有的因数得到。

#### 代码实现

~~~c++
void solve() {
    ll n, k; cin >> n >> k;
    vector<ll>ans;
    for (ll i = 1; i * i <= n; i++) {
        if (n % i)continue;
        ans.push_back(i);
        if (i * i != n)ans.push_back(n / i);
    }
    sort(ans.begin(),ans.end(), cmps);
    if (k > ans.size()) {
        cout << "-1\n";
        return;
    }
    cout << ans[k - 1] << "\n";
}
~~~

## D. Divide by three, multiply by two

#### 题目来源

​	[Codeforces Round 479 (Div. 3)](https://codeforces.com/contest/977)

#### 思路

​	100个数字，爆搜。

#### 代码实现

~~~c++
ll n;
ll o[2100];
ll ans[2100];
ll v[210000];
bool u = 0;
void dfs(ll x, ll id) {
    if (u)return;
    if (id == n-1 ) {
        u = 1;
        for (int i = 0; i < n; i++)cout << ans[i] << " ";
        cout << "\n";
        return;
    }
    v[x] = 1;
    for (int i = 0; i < n; i++) {
        if (v[i] != 1 && (o[i] == ans[id] * 2 || o[i] * 3 == ans[id])) {
            ans[id + 1] = o[i];
            dfs(i, id + 1);
        }
    }
    v[x] = 0;
}
void solve() {
    u = 0;
    cin >> n;
    for (int i = 0; i < n; i++)cin >> o[i];
    for (int i = 0; i < n; i++) {
        ans[0] = o[i];
        memset(v, 0, sizeof(v));
        dfs(i, 0);
    }
}
~~~

## B. Composite Coloring

#### 题目来源

​	[Codeforces Round 630 (Div. 2)](https://codeforces.com/contest/1332)

#### 思路

​	对于每个数字，它可以看他可以最小被多少的数字给分解，然后按照最小因子来规划他的颜色。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    vector<ll>o(n);
    set<ll>u;
    for (int i = 0; i < n; i++) {
        ll x = 2;
        cin >> o[i];
        while (o[i] % x != 0)x++;
        o[i] = x;
        u.insert(x);
    }
    vector<ll>ans(u.begin(), u.end());
    cout << ans.size() << "\n";
    for (int i = 0; i < n; i++) {
        cout << lower_bound(ans.begin(), ans.end(), o[i]) - ans.begin() + 1 << " ";
    }
    cout << "\n";
}
~~~

