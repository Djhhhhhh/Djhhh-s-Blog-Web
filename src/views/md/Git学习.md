## Git的使用方式

#### 命令行

​	通过命令对git进行控制。

#### 图形化界面（GUI）

​	通过一些专业的图形化界面来使用git。

#### IDEA插件/扩展

​	编译器中的可视化操作。

## 配置

#### 设定用户名

~~~cmd
git config --global user.name "Djh"
~~~

#### 设定邮箱

~~~cmd
git config --global user.email 1161015498@qq.com
~~~

#### 保存用户名密码

~~~cmd
git config --global credential.helper store
~~~

#### 查看git配置信息

~~~~cmd
git config --global --list
~~~~

#### 注意

​	--global ：全局配置，所有仓库生效。

​	--system：系统配置，对所有用户有效。

​	(默认)：本地配置，支队本地仓库有效。

## 新建仓库

#### 仓库

​	可以理解为一个目录。

#### 方式

1.在本地创建一个仓库

~~~cmd
git init 
~~~

2.在远程克隆一个仓库

~~~cmd
git clone
~~~

## Git的工作区域

#### 工作区

​	本地文件夹。

​	例：.git所在目录

#### 暂存区

​	临时存储区域。

​	例：.git/index	

#### 本地仓库

​	通过git init命令创建的仓库，它包含完整的项目历史和元数据，是git存储代码的主要位置。

​	例：.git/objects

#### 流程

​	工作区->git add->暂存区->git commit->本地仓库

## Git中的文件状态

#### 未跟踪

​	我们新创建的文件。

#### 未修改

​	已经被git管理起来，但是还没有被修改过。

#### 已修改

​	被git管理起来并且修改过。

#### 已暂存

​	修改完后放到暂存区内。

#### 流程

​	未跟踪   ->git add->  未修改 ->修改->     已修改  ->git add->    已暂存

——————————————>git add————————————————>

​		<—git rm—              <———————git commit—————

​						<—git checkout———  <——git reset————

## 常数

#### HEAD

​	指向分支的最新提交结点。

#### HEAD~n

​	指向上n个版本

#### HEAD^n

​	指向上n个版本。

## 常用命令

#### 查看仓库的状态

~~~cmd
git status
~~~

#### 创建仓库

~~~cmd
git init
~~~

#### 添加到暂存区

~~~cmd
git add
~~~

#### 提交

~~~cmd
git commit -m "提交附带的信息"
~~~

####  查看仓库提交历史记录

~~~cmd
git log
~~~

​	注：可以使用--oneline参数来查看简介的提交记录。

#### 回退版本

1.软回退：回退某个版本，并保留工作区和暂存区的内容。

~~~
git reset --soft
~~~

2.硬回退：工作区和暂存区都会清空。

~~~cmd
git reset --hard
~~~

3.混合回退：保留工作区，清空暂存区。

~~~
git reset --mixed
~~~

#### 查看差异

1.查看工作区，暂存区，本地仓库之间的差异

2.查看不同版本之间的差异。

3.查看不同分支之间的差异。

~~~cmd
git diff
~~~

参数：1.默认查看工作区和暂存区的差异。

​	    2.git diff HEAD 查看工作区和版本库的差异。

​	    3.git diff --cached 查看暂存区和版本库的差异。

​	    4.git diff 版本id 版本id 查看两个版本的内容。

​	    5.git diff 文件名   查看文件的差异内容

​	    6.git diff分支名 查看分支之间的差异。

