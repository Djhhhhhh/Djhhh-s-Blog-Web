## A. The Third Three Number Problem

#### 思路

​	当n为奇数时，没有解；当n为偶数时，根据异或的性质，两个相同数字异或得0，则可以将偶数分为两半，然后第三个数取0即可达成题意。

#### 代码实现

~~~c++
void solve() {
    ll n; cin >> n;
    if (n % 2 == 1) {
        cout << "-1\n";
    }
    else {
        cout << "0" << " " << n / 2 << " " << n / 2 << "\n";
    }
}
~~~

