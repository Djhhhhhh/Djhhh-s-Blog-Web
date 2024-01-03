## [A.Prime Deletion](https://codeforces.com/contest/1861/problem/A)

#### 思路

​	因给定的数列是由不重复的1-9个数字组成，那么我们只需要拿出第一位然后输出一个十位是该数字的质数就能满足题意。

#### 代码实现

~~~c++
int main() {
    int t;
    cin>>t;
    while(t--){
        string k;
        cin>>k;
        switch(k[0]){
            case '1':cout<<"13\n";
            break;
            case '2':cout<<"23\n";
            break;
            case '3':cout<<"31\n";
            break;
            case '4':cout<<"41\n";
            break;
            case '5':cout<<"53\n";
            break;
            case '6':cout<<"61\n";
            break;
            case '7':cout<<"71\n";
            break;
            case '8':cout<<"83\n";
            break;
            case '9':cout<<"97\n";
            break;
        }
    }
    return 0;
}
~~~

## [B.Two Binary Strings](https://codeforces.com/contest/1861/problem/B)

#### 思路

​	给两个数列，两个数列均是由01组成的序列且每个数列的第一位必然是0，最后一位必然是1。给定一种操作，选取数列中的两个相同的数字，这两个数字中间的所有数字改变为该数字，让我们求是否可以在有限的操作内让两个数列相等。通过仔细思考我们可以想到，如果在两个数列同样的位置上存在该位为0下一位为1，且两个数列均如此，我们就可以让两个数列相等，否则就不存在操作。

#### 代码实现

~~~c++
int main() {
    int t;
    cin>>t;
    while(t--){
        string k;
        string q;
        cin>>k>>q;
        int u=0;
        for(int i=0;i<k.size()-1;i++){
            if(k[i]=='0'&&q[i]=='0'&&k[i+1]=='1'&&q[i+1]=='1'){
                u=1;break;
            }
        }
        if(u){
            cout<<"YES\n";
        }else{
            cout<<"NO\n";
        }
    }
    return 0;
}
~~~

