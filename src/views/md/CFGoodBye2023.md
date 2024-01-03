## A. 2023

#### 思路

​	所有数乘积等于2023，现在少了k个数字，我们只需要将现在给的数字乘积求出，然后求出乘积与多少乘等于2023，所以在k个数字中，有一个等于该数字即可，另外所有数字均为1即可。

#### 代码实现

~~~c++
void solve() {
    ll n, m; cin >> n >> m;
    vector<ll>o(n);
    ll sum = 1;
    for (int i = 0; i < n; i++) {
        cin >> o[i];
        sum *= o[i];
    }
    if (2023 % sum == 0) {
        cout << "YES\n";
        cout << 2023 / sum << " ";
        for (int i = 1; i < m; i++)cout << "1 ";
        cout << "\n";
    }
    else {
        cout << "NO\n";
    }
}
~~~

## B. Two Divisors

#### 思路

​	给你两个整数 a和 b ，它们是数x的两个最大除数。当b不能被a整除的时候，x为ab的最小公倍数；当b能被a整除时，则x为b*b/a。

#### 代码实现

~~~c++
ll gcd(ll a,ll b) 
{    
    if(b) while((a%=b) && (b%=a));    
    return a+b;
}
ll lcm(ll a, ll b) {
    return a / gcd(a, b) * b;
}
void solve() {
    ll n,m;cin>>n>>m;
    if(lcm(n,m)==m){
        cout<<m*m/n<<"\n";
    }else{
        cout<<lcm(m,n)<<"\n";
    }
}
~~~

## C. Training Before the Olympiad

#### 思路

​	先手的目标是最大化最终数字，后手的目标是最大化最终数字。游戏的操作为，选择序列中的任意两个数字，将他俩乘加和除二后再乘二。当选取得数字是一奇数一偶数得时候，精度误差会导致丢失一个数字，从而导致序列最终数字减小1位。

​	对于先手操作，如果存在两个以上奇数，那么必然对两个奇数进行操作，从而减少一个或两个奇数。

​	对于后手操作，如果存在一个以上奇数，那么必然选取一个奇数和一个偶数进行操作，使精度出现误差，少一个数。

​	所以对于三个以上奇数得操作其实可以合并在一起，缺少的数字即为奇数的个数除以三，还有，当cnt%3==1的时候，缺少的数字仍需加一。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    ll sum = 0;
    ll cnt = 0;
    for (int i = 1; i <= n; i++) {
        ll x; cin >> x;
        sum += x;
        cnt += x % 2;
        ll mid = 0;
        if (cnt == 1 && i == 1) {
            mid = 0;
        }
        else {
            mid = cnt / 3;
            if (cnt % 3 == 1)mid++;
        }
        cout << sum - mid << " ";
    }
    cout << "\n";
}
~~~

## D. Mathematical Problem

#### 思路

​	打标发现对1_6_9中间加任意零均可以组成满足题意的整数；对9_6_1中间加任意零也可以满足。

​	注意：当n=1的时候需要特判输出1即可。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    if (n == 1) {
        cout << 1 << "\n";
        return;
    }
    cout << "196" << string(n - 3, '0') << "\n";
    for (int i = 0; i < n / 2; i++) {
        cout << 1 << string(i, '0') << 6 << string(i, '0') << 9 << string(n - 3 - 2 * i, '0') << "\n";
        cout << 9 << string(i, '0') << 6 << string(i, '0') << 1 << string(n - 3 - 2 * i, '0') << "\n";
    }
}
~~~

## 总结

​	第二题赛事一直在猜结论，想不明白。第三题赛时逻辑混乱，静下心就能好些吧。

