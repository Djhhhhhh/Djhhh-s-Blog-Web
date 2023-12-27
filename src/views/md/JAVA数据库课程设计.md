## 文档说明

​	用于记录Java数据库课程设计开发，Java Swing开发。

## 选题背景调研

创建博客文章管理后台有很多重要的意义：

1.  **内容管理**：后台可以对网站的内容进行管理，包括文章、图片、视频、音频等，可以实现网站内容的添加、修改、删除等功能。这样可以让管理员更加方便快捷地管理网站或应用，而不必每次都要手动操作。
2.  **网络管理**：可以对网站的网络结构进行管理，可以设置网站的访问权限，控制网站的访问者，以及网站的安全等。
3.  **搜索引擎优化 (SEO)**：博客是改进搜索引擎优化 (SEO)、建立受众群体以及为您的业务创造更多流量和销售额的一种有效方式。
4.  **社区建设**：设置博客可以帮助您围绕产品和品牌建立社区。

总的来说，创建博客文章管理后台可以提高网站的运营效率，提升用户体验，同时也有助于提高网站的知名度和影响力。

## 需求说明

#### 登录页

​	输入用户名和密码，点击登录按钮时手机表单数据，在数据库中对人员进行查询。

​	创建登录和注册按钮。

​	密码框做字符替换隐藏处理。

#### 注册密钥

​	点击注册按钮后显示弹窗，用户输入注册密钥。

​	注册密钥锁死在代码内部。

#### 注册页

​	输入不同密钥会自动设置注册后账户的管理权限。

​	注册时，分别输入用户名，密码，检验密码。

​	密码栏均做字符替换隐藏处理。

​	创建注册和返回按钮。

​	当点击注册按钮时会收集表单数据，对于输入的用户名和密码进行检验。

​	若用户名存在则会提示；若密码两次输入不同，也会进行提示。	

​	注册成功会自动跳转至登录页。

#### 用户管理页

​	用户管理页创建一个表格用于显示不同用户的信息。

​	创建四个按钮：增加，删除，查找，修改密码

​	增加：当用户等级为1的时候，可以添加一个与自己等级相同的账户。

​	删除：当用户等级为1的时候，可以删除等级为2的用户。

​	查找：可以查找是否存在对应名字的用户，若存在返回用户数据，否则返回查询不到。

#### 文章分类页

​	文章分类页创建一个表格用于显示不同文章数据。

​	创建四个按钮：增加，删除，查找，修改

​	增加：增加新文章，在创建文章时，获取文章现有分类，若创建的文章不满足任何分类，可以新建一个分类。

​	删除：删除对应id文章。

​	查找：查找对应名的文章是否存在。

​	修改：修改文章内容。

#### 分类管理页

​	文章分类管理页创建表格用于显示现有文章分类。

​	创建四个按钮：增加，删除，查找，修改

​	增加：添加新文章分类。

​	删除：删除现有文章分类，获取现有文章分类数据，并创建下拉框。

​	查找：查找先有文章分类，返回分类下的数据，包含文章数量。

​	修改：修改文章分类名，且改变所有对应的文章的分类名。

#### 评论管理页

​	分类管理页创建表格用于显示现有评论。

​	创建四个按钮：增加，删除，查找，修改

​	增加：添加新评论，且可以选择评论文章为哪个。

​	删除：删除现有评论。

​	查找：查找评论。

​	修改：修改对应评论。

#### 切换账户

​	用于账户登出。

​	登出后返回登录页。

## 数据库设计

#### 后台登陆管理

数据库名：user

| 数据项                             | 数据类型 |
| ---------------------------------- | -------- |
| user_id(用户编号)                  | Integer  |
| user_name(用户名)                  | varchar  |
| user_password(用户密码)            | varchar  |
| user_power(用户访问权限)           | Integer  |
| user_creater_time(用户创建时间)    | Datetime |
| user_lastup_time(用户最后登录时间) | Datetime |

#### 文章信息

数据库名：page

| 数据项                         | 数据类型 |
| :----------------------------- | -------- |
| page_id(文章编号)              | Integer  |
| page_name(文章名)              | varchar  |
| page_class(文章所在分类)       | varchar  |
| page_content(文章内容)         | varchar  |
| page_releasedata(文章发布时间) | Datetime |
| page_update(文章最后修改时间)  | Datetime |
| page_permissions(文章访问权限) | Integer  |
| page_user(文章作者)            | varchar  |

#### 文章分类页

数据库名：page_class

| 数据项                  | 数据类型 |
| ----------------------- | -------- |
| page_class_id(分类编号) | Integer  |
| page_class_name(分类名) | varchar  |

#### 留言评论页

数据库名：comment

| 数据项                            | 数据类型 |
| --------------------------------- | -------- |
| comment_id(评论id)                | Integer  |
| comment_text(评论内容)            | varchar  |
| comment_releasedata(评论发布时间) | Datetime |
| comment_update(评论最后修改时间)  | Datetime |
| comment_agreesum(赞同数目)        | Integer  |
| comment_againstsum(不赞同数目)    | Integer  |
| comment_name(评论文章)            | varchar  |
| comment_user(评论人)              |          |

## 模块设计

#### Blog_windows.java

​	作为程序的入口，用于存放登录页相关实现。

~~~java
import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;

public class Blog_windows{
    //创建窗体对象并命名
    JFrame frame = new JFrame("Blog_windows");
    public void init() throws Exception {
        //设置窗体关闭模式
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //设置窗体大小
        frame.setSize(500, 300);
        //设置窗体居中
        frame.setLocationRelativeTo(null);
        //取消布局
        frame.setLayout(null);
        //设置窗口不能改变大小
        frame.setResizable(false);
        //设置文章标题
        Box titlebox=Box.createHorizontalBox();
        JLabel title = new JLabel("欢迎使用博客后台管理系统");
        Font font=new Font("宋体",Font.BOLD,30);
        title.setFont(font);
        titlebox.add(title);
        //定位标题
        titlebox.setBounds(60,35,400,40);
        frame.add(titlebox);
        //组装用户名
        Box uBox=Box.createHorizontalBox();
        JLabel uLabel=new JLabel("用户名:");
        JTextField uField = new JTextField(15);
        uBox.add(uLabel);
        uBox.add(Box.createHorizontalStrut(20));
        uBox.add(uField);
        //定位用户名
        uBox.setBounds(140,100,200,20);
        frame.add(uBox);
        //组装密码
        Box pBox=Box.createHorizontalBox();
        JLabel pLabel=new JLabel("密    码:");
        JPasswordField pField = new JPasswordField(15);
        pField.setEchoChar('*');
        pBox.add(pLabel);
        pBox.add(Box.createHorizontalStrut(20));
        pBox.add(pField);
        //定位密码
        pBox.setBounds(140,140,200,20);
        frame.add(pBox);
        //组装按钮
        Box btnbox = Box.createHorizontalBox();
        JButton loginBtn =new JButton("登录");
        JButton rigestBtn=new JButton("注册");
        btnbox.add(loginBtn);
        btnbox.add(Box.createHorizontalStrut(60));
        btnbox.add(rigestBtn);
        //定位按钮
        btnbox.setBounds(150,200,200,20);
        frame.add(btnbox);
        //登录按钮交互
        loginBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                //获取用户输入的数据
                String username = uField.getText().trim();
                String password = pField.getText().trim();
                //访问登录
                boolean YN = User.login(username,password);
                if(YN){
                    LocalDateTime time=LocalDateTime.now();
                    JdbcUtils.JdbcUpdate(User.sql_updata_lasttime,time,username);
                    JOptionPane.showMessageDialog(frame,"登录成功!");
                    try {
                        new Main_page().init(username);
                    } catch (Exception ex) {
                        throw new RuntimeException(ex);
                    }
                    frame.dispose();
                }else{
                    JOptionPane.showMessageDialog(frame,"登录失败!");
                }
            }
        });
        //注册按钮交互
        rigestBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String key=JOptionPane.showInputDialog(frame,"请输入注册密钥:");
                boolean key_yn= User.key_detection(key);
                int power =(key.equals(User.user_key_f)?1:2);
                if (key_yn){
                    new RegisterInerface().init(power);
                    //当前页面消失
                    frame.dispose();
                }else{
                    JOptionPane.showMessageDialog(frame,"密钥输入错误");
                }
            }
        });
        //设置窗体是否可见
        frame.setVisible(true);
    }
    public static void main(String[] args) {
        try {
            new Blog_windows().init();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}
~~~

#### RegisterLnerface.java

​	用于实现注册页。

~~~java
import user.User;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;

public class RegisterInerface {
    JFrame frame = new JFrame("注册");
    Font font1=new Font("宋体",Font.BOLD,15);
    Font font2=new Font("宋体",Font.BOLD,36);
    Font font3=new Font("宋体",Font.BOLD,20);
    public void init(int power) {
        //设置窗体关闭模式
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //设置窗体大小
        frame.setSize(400, 600);
        //设置窗体居中
        frame.setLocationRelativeTo(null);
        //取消布局
        frame.setLayout(null);
        //设置窗口不能改变大小
        frame.setResizable(false);
        //设置文章标题
        Box title1box=Box.createHorizontalBox();
        Box title2box=Box.createHorizontalBox();
        JLabel title1 = new JLabel(power+"级密钥输入正确,欢迎使用该系统");
        JLabel title2 = new JLabel("\n新管理注册");
        title1.setFont(font1);
        title2.setFont(font2);
        title1box.add(title1);
        title2box.add(title2);
        //定位标题
        title1box.setBounds(10,5,400,40);
        title2box.setBounds(100,70,400,40);
        frame.add(title1box);
        frame.add(title2box);
        //设置账户名
        Box user_namebox=Box.createHorizontalBox();
        JLabel nameLabel = new JLabel("用户名:");
        JTextField nameField = new JTextField(15);
        nameLabel.setFont(font3);
        nameField.setFont(font3);
        user_namebox.add(nameLabel);
        user_namebox.add(Box.createHorizontalStrut(20));
        user_namebox.add(nameField);
        //定位用户名
        user_namebox.setBounds(40,200,300,30);
        frame.add(user_namebox);
        //设置密码
        Box user_passwordbox= Box.createHorizontalBox();
        JLabel passwordLabel =new JLabel("密  码:");
        JPasswordField passwordField=new JPasswordField(15);
        passwordField.setEchoChar('*');
        passwordLabel.setFont(font3);
        passwordField.setFont(font3);
        user_passwordbox.add(passwordLabel);
        user_passwordbox.add(Box.createHorizontalStrut(20));
        user_passwordbox.add(passwordField);
        //定位密码
        user_passwordbox.setBounds(40,250,300,30);
        frame.add(user_passwordbox);
        //检验密码
        Box user_passwordbox_yn= Box.createHorizontalBox();
        JLabel passwordLabel_yn =new JLabel("检验密码:");
        JPasswordField passwordField_yn=new JPasswordField(15);
        passwordField_yn.setEchoChar('*');
        passwordLabel_yn.setFont(font3);
        passwordField_yn.setFont(font3);
        user_passwordbox_yn.add(passwordLabel_yn);
        user_passwordbox_yn.add(Box.createHorizontalStrut(20));
        user_passwordbox_yn.add(passwordField_yn);
        //定位密码
        user_passwordbox_yn.setBounds(18,300,322,30);
        frame.add(user_passwordbox_yn);
        //注册按钮
        Box btnbox=Box.createHorizontalBox();
        JButton btnYn=new JButton("注册");
        //返回登录按钮
        JButton backbtn=new JButton("返回");
        //挂载按钮
        btnbox.add(backbtn);
        btnbox.add(Box.createVerticalStrut(20));
        btnbox.add(btnYn);
        //定位按钮
        btnbox.setBounds(100,350,200,90);
        frame.add(btnbox);
        //为按钮注册点击时间
        //返回
        backbtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    new Blog_windows().init();
                } catch (Exception ex) {
                    throw new RuntimeException(ex);
                }
                frame.dispose();
            }
        });
        //注册
        btnYn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String username=nameField.getText().trim();
                String password=passwordField.getText().trim();
                String passwordYn=passwordField_yn.getText().trim();
                if(!password.equals(passwordYn)||User.user_queryYn(username)){
                    JOptionPane.showMessageDialog(frame,(User.user_queryYn(username)?"账户名已被占用\n":"")+(!password.equals(passwordYn)?"两次密码不同":""));
                }else{
                    if(User.ADD_user(username,password,power)){
                        JOptionPane.showMessageDialog(frame,"注册成功");
                        try {
                            new Blog_windows().init();
                        } catch (Exception ex) {
                            throw new RuntimeException(ex);
                        }
                        frame.dispose();
                    }else{
                        JOptionPane.showMessageDialog(frame,"注册出现异常,请稍后尝试");
                    }
                }
            }
        });
        //设置窗体是否可见
        frame.setVisible(true);
    }
}
~~~

#### Main_page.java

​	作为后台文章的管理页的主题，在内部创建不同的管理页面。

~~~java
import CommentTable.CommentTable;
import PageClassTable.PageClassTable;
import PageTable.PageTable;
import UserTable.UserTable;
import comment.Comment;
import page.Page;
import page.PageClass;
import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import javax.swing.tree.DefaultMutableTreeNode;
import java.util.List;
import java.util.Map;

public class Main_page {
    JFrame frame = new JFrame("主页");
    String sql_user="SELECT * FROM user WHERE user_name = ?";
    public void init(String name)throws Exception{
        //设置窗体关闭模式
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //设置窗体大小
        frame.setSize(800, 600);
        //设置窗体居中
        frame.setLocationRelativeTo(null);
        //设置窗口不能改变大小
        frame.setResizable(false);
        //获取用户信息
        List<Map<String, Object>> user= JdbcUtils.JdbcQuery(sql_user,name);
        int id = 0;
        int power = 0;
        String password = null;
        for(Map<String,Object> map : user){
            for(String key : map.keySet()){
                if(key.equals("user_password")) password= (String) map.get(key);
                if(key.equals("user_id")) id= (int) map.get(key);
                if(key.equals("user_power")) power= (int) map.get(key);
            }
        }
        //获取用户信息
        JSplitPane sp=new JSplitPane();
        sp.setContinuousLayout(true);
        sp.setDividerLocation(150);
        sp.setDividerSize(7);
        //左侧树
        DefaultMutableTreeNode root = new DefaultMutableTreeNode("系统管理");
        DefaultMutableTreeNode user_manage = new DefaultMutableTreeNode("用户管理");
        DefaultMutableTreeNode page_manage = new DefaultMutableTreeNode("文章管理");
        DefaultMutableTreeNode page_class_manage = new DefaultMutableTreeNode("分类管理");
        DefaultMutableTreeNode comment_manage = new DefaultMutableTreeNode("评论管理");
        DefaultMutableTreeNode change_user = new DefaultMutableTreeNode("切换账户");
        root.add(user_manage);
        root.add(page_manage);
        root.add(page_class_manage);
        root.add(comment_manage);
        root.add(change_user);
        JTree tree = new JTree(root);
        tree.setSelectionRow(0);
        int finalPower = power;
        //点击条目的时候 会执行
        tree.addTreeSelectionListener(e -> {
            //得到当前选中的结点对象
            Object lastpath =  e.getNewLeadSelectionPath().getLastPathComponent();
            if(user_manage.equals(lastpath)){
                User.idChange();
                sp.setRightComponent(new UserTable(finalPower,name));
                sp.setDividerLocation(150);
            }
            if(page_manage.equals(lastpath)){
                Page.idChange();
                sp.setRightComponent(new PageTable(finalPower,name));
                sp.setDividerLocation(150);
            }
            if(page_class_manage.equals(lastpath)){
                PageClass.idChange();
                sp.setRightComponent(new PageClassTable(finalPower,name));
                sp.setDividerLocation(150);
            }
            if(comment_manage.equals(lastpath)){
                Comment.idChange();
                sp.setRightComponent(new CommentTable(finalPower,name));
                sp.setDividerLocation(150);
            }
            if(change_user.equals(lastpath)){
                int userOption =  JOptionPane.showConfirmDialog(frame,"确认退出?","退出", JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE);
                if (userOption == JOptionPane.OK_OPTION) {
                    try {
                        frame.dispose();
                        new Blog_windows().init();
                    } catch (Exception ex) {
                        throw new RuntimeException(ex);
                    }
                }
            }
        });

        sp.setLeftComponent(tree);
        frame.add(sp);
        //设置窗体是否可见
        frame.setVisible(true);
    }
}
~~~

#### utils包

​	utils包作为工具包，本项目需要创建Jdbc操作的封装。

##### JdbcUtils.java

~~~java
package utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/**
 *  JDBC常量类
**/
class Constants{
    public static final String driver = "com.mysql.cj.jdbc.Driver";
    public static final String url = "jdbc:mysql://127.0.0.1:3306/blogs-manager?useUnicode=true&characterEncoding=UTF-8&userSSL=false&serverTimezone=GMT%2B8";
    public static final String username="root";
    public static final String password="root";
}

public class JdbcUtils {
    /*  静态内部块，随着类的加载执行，启用JDBC驱动程序 */
    static {
        try {
            Class.forName(Constants.driver);
        }catch (Exception e){
            System.out.println("驱动加载失败！");
        }
    }
    /* LinkJdbc连接数据库 */
    private static Connection LinkJdbc(){
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(Constants.url, Constants.username, Constants.password);
        } catch (Exception e) {
            System.out.println("获取连接失败！");
        }
        return conn;
    }
    /* JdbcUpdate执行更新操作 */
    public static int JdbcUpdate(String sql,Object...params){
        //链接数据库
        Connection conn = LinkJdbc();
        //设置一个空的执行sql对象
        PreparedStatement ps = null;
        int rows=0;
        try {
            //获取使用占位符的SQl语句
            ps = LinkJdbc().prepareStatement(sql);
            //将params对象上的参数给SQL语句中的站位符分别设置
            //如果params===null的话，证明该sql语句没有缺省参数
            if(params!=null&&params.length>0){
                for(int i=0;i<params.length;i++){
                    ps.setObject(i+1,params[i]);
                }
            }
            //执行更新操作 返回受影响的行数
            rows = ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally{
            //执行完语句将资源释放
            try {
                closeJDBC(conn, ps, null);
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
        return rows;
    }
    /* JdbcQuery执行查询操作 */
    public static List<Map<String, Object>> JdbcQuery(String sql, Object...params){
        //链接数据库
        Connection conn = LinkJdbc();
        //设置一个空的执行sql对象
        PreparedStatement ps=null;
        //创捷一个 结果集
        ResultSet set=null;
        //创建一个链表表数组 用于存储 sql键值对
        List<Map<String, Object>> list = new ArrayList<>();
        try {
            //获取使用占位符的SQl语句
            ps = conn.prepareStatement(sql);
            //将params对象上的参数给SQL语句中的站位符分别设置
            //如果params===null的话，证明该sql语句没有缺省参数
            if(params!=null&&params.length>0){
                for(int i=0;i<params.length;i++){
                    ps.setObject(i+1,params[i]);
                }
            }
            //执行更新操作 返回受影响的结果集
            set = ps.executeQuery();
            //ResultSetMetaData 类
            //可用于获取关于 ResultSet 对象中列的类型和属性信息的对象
            ResultSetMetaData rsmd = set.getMetaData();
            int columnCount = rsmd.getColumnCount();
            while(set.next()){
                Map<String,Object> map = new HashMap<>();
                for(int i=1;i<=columnCount;i++){
                    //getColumnName()获取指定列的名称
                    map.put(rsmd.getColumnName(i), set.getObject(i));
                }
                list.add(map);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }finally {
            try {
                closeJDBC(conn,ps,set);
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
        //返回结果集，每一条结果为所有查询的字段名和字段值为键值对的Map集合
        return list;
    }
    /* 释放资源 */
    private static void closeJDBC(Connection conn,PreparedStatement ps,ResultSet rs) throws SQLException{
        if(rs!=null){
            rs.close();
        }
        if(ps!=null){
            ps.close();
        }
        if(conn!=null){
            conn.close();
        }
    }
}
~~~

#### User包

​	用于管理存放用户类的包。

##### User.java

​	用于封装用户管理所需要的sql语句和方法。

~~~java
package user;

import utils.JdbcUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class User {
    public static int sum = JdbcUtils.JdbcQuery("SELECT user_id FROM user").size();  //注册人员数目统计

    public static final String user_key_f="whyFi";  //注册管理员账户密钥
    public static final String user_key_s="whySe";  //注册管理员账户密钥
    public static String sql_user_nameQuery = "SELECT user_name FROM user WHERE user_name = ?";
    public static String sql_add_user="INSERT INTO user(user_id,user_name,user_password,user_power,user_create_time,user_lastup_time) VALUES (?,?,?,?,?,?)";
    private static final String sql="SELECT user_name,user_password FROM user WHERE user_name = ? AND user_password = ?";
    //注册密钥检测
    public static boolean key_detection(String key){
        return key.equals(User.user_key_f)||key.equals(User.user_key_s);
    }
    //用户注册
    public static boolean user_queryYn(String name){
        return !JdbcUtils.JdbcQuery(sql_user_nameQuery,name).isEmpty();
    }
    public static boolean ADD_user(String name,String password,int power){
        LocalDateTime time=LocalDateTime.now();
        return JdbcUtils.JdbcUpdate(sql_add_user,User.sum+1,name,password,power,time,time)>=1;
    }
    //登录
    public static boolean login(String username,String password){
        return !JdbcUtils.JdbcQuery(sql,username,password).isEmpty();
    }
    public static String sql_query="SELECT * FROM user WHERE user_name = ?";
    public static String sql_lowpoer_query="SELECT user_name FROM user WHERE user_power = 2";
    public static String sql_updata_password="UPDATE user SET user_password = ?  WHERE user_name = ?";
    public static String sql_delete_user="DELETE FROM user WHERE user_name = ?";

    public static String sql_updata_lasttime="UPDATE user SET user_lastup_time = ? WHERE user_name = ?";
    public static void idChange(){
        String sql = "SELECT * FROM user ORDER BY user_id ASC";
        List<Map<String, Object>> rs = JdbcUtils.JdbcQuery(sql);
        int newId = 1;
        for(Map<String,Object> map : rs){
            for(String key : map.keySet()) {
                if (key.equals("user_id")){
                    int oldId = (int) map.get(key);
                    String updateSql = ("UPDATE user SET user_id = " + newId +" WHERE user_id = " + oldId);
                    JdbcUtils.JdbcUpdate(updateSql);
                    newId++;
                }
            }
        }
    }
}
~~~

#### UserTable包

​	用于存放用户管理类的包。

##### UserTable.java

​	作为用户管理页的主页面。

~~~java
package UserTable;

import page.Page;
import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class UserTable extends Box {

    Font font1=new Font("宋体",Font.BOLD,25);
    Font font2=new Font("宋体",Font.BOLD,20);
    String sql_message="SELECT * FROM user";
    public UserTable(int power,String name){
        super(BoxLayout.Y_AXIS);
        Box user_sum_box=Box.createHorizontalBox();
        Box user_power_box= Box.createHorizontalBox();
        JLabel user_sum_title= new JLabel("现注册用户:"+User.sum+"人\n");
        JLabel user_power_title=new JLabel("欢迎"+name+"使用该系统"+",你的管理权限为:"+power);
        user_sum_title.setFont(font2);
        user_power_title.setFont(font1);
        user_sum_box.add(user_sum_title);
        user_power_box.add(user_power_title);
        this.add(user_sum_box);
        this.add(user_power_box);
        //创建按钮
        JPanel btnPanel =new JPanel();
        btnPanel.setMaximumSize(new Dimension(800,20));
        JButton addBtn=new JButton("添加");
        JButton updateBtn=new JButton("修改密码");
        JButton deleteBtn=new JButton("删除");
        JButton queryBtn=new JButton("查询");
        btnPanel.add(addBtn);
        btnPanel.add(updateBtn);
        btnPanel.add(deleteBtn);
        btnPanel.add(queryBtn);
        this.add(btnPanel);
        //添加按钮
        addBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Frame frame=new Frame();
                if(power>1)JOptionPane.showMessageDialog(frame,"您的权限不足");
                else AddUser.init(power,name);
            }
        });
        updateBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Frame frame=new Frame();
                if(power>1)JOptionPane.showMessageDialog(frame,"您的权限不足");
                else UpdataUser.init(power,name);
            }
        });
        deleteBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Frame frame=new Frame();
                if(power>1)JOptionPane.showMessageDialog(frame,"您的权限不足");
                else DeleteUser.init();
            }
        });
        queryBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                QueryUser.init();
            }
        });
        User.idChange();
        String[] ts={"用户编号","用户名","用户创建时间","用户最后登录时间","用户权限"};
        String[][] begin =data_update();
        JTable table =new JTable();
        table.setEnabled(false);
        DefaultTableModel model =new DefaultTableModel(begin,ts); // 新建一个默认数据模型
        JScrollPane scrollPane=new JScrollPane(table);
        table.setModel(model);
        this.add(scrollPane);
    }
    public String[][] data_update(){
        int MX= User.sum;
        String[][] data =new String[MX][5];
        int sum=0;
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery(sql_message);
        for(Map<String,Object> map : datas){
            int id = 0;
            String name = null;
            int power=0;
            LocalDateTime timebe=null;
            LocalDateTime timeup=null;
            for(String key : map.keySet()) {
                if(key.equals("user_id"))id= (int) map.get(key);
                if(key.equals("user_name"))name= (String) map.get(key);
                if(key.equals("user_create_time"))timebe= (LocalDateTime) map.get(key);
                if(key.equals("user_lastup_time"))timeup= (LocalDateTime) map.get(key);
                if(key.equals("user_power"))power= (int) map.get(key);
            }
            data[sum][0]= String.valueOf(id);
            data[sum][1]= String.valueOf(name);
            data[sum][2]= String.valueOf(timebe);
            data[sum][3]= String.valueOf(timeup);
            data[sum][4]= String.valueOf(power);
            sum++;
        }	
        return data;
    }
}
~~~

##### AddUser.java

​	用于创建添加用户的页面。

~~~java
package UserTable;

import page.Page;
import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class UserTable extends Box {

    Font font1=new Font("宋体",Font.BOLD,25);
    Font font2=new Font("宋体",Font.BOLD,20);
    String sql_message="SELECT * FROM user";
    public UserTable(int power,String name){
        super(BoxLayout.Y_AXIS);
        Box user_sum_box=Box.createHorizontalBox();
        Box user_power_box= Box.createHorizontalBox();
        JLabel user_sum_title= new JLabel("现注册用户:"+User.sum+"人\n");
        JLabel user_power_title=new JLabel("欢迎"+name+"使用该系统"+",你的管理权限为:"+power);
        user_sum_title.setFont(font2);
        user_power_title.setFont(font1);
        user_sum_box.add(user_sum_title);
        user_power_box.add(user_power_title);
        this.add(user_sum_box);
        this.add(user_power_box);
        //创建按钮
        JPanel btnPanel =new JPanel();
        btnPanel.setMaximumSize(new Dimension(800,20));
        JButton addBtn=new JButton("添加");
        JButton updateBtn=new JButton("修改密码");
        JButton deleteBtn=new JButton("删除");
        JButton queryBtn=new JButton("查询");
        btnPanel.add(addBtn);
        btnPanel.add(updateBtn);
        btnPanel.add(deleteBtn);
        btnPanel.add(queryBtn);
        this.add(btnPanel);
        //添加按钮
        addBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Frame frame=new Frame();
                if(power>1)JOptionPane.showMessageDialog(frame,"您的权限不足");
                else AddUser.init(power,name);
            }
        });
        updateBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Frame frame=new Frame();
                if(power>1)JOptionPane.showMessageDialog(frame,"您的权限不足");
                else UpdataUser.init(power,name);
            }
        });
        deleteBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Frame frame=new Frame();
                if(power>1)JOptionPane.showMessageDialog(frame,"您的权限不足");
                else DeleteUser.init();
            }
        });
        queryBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                QueryUser.init();
            }
        });
        User.idChange();
        String[] ts={"用户编号","用户名","用户创建时间","用户最后登录时间","用户权限"};
        String[][] begin =data_update();
        JTable table =new JTable();
        table.setEnabled(false);
        DefaultTableModel model =new DefaultTableModel(begin,ts); // 新建一个默认数据模型
        JScrollPane scrollPane=new JScrollPane(table);
        table.setModel(model);
        this.add(scrollPane);
    }
    public String[][] data_update(){
        int MX= User.sum;
        String[][] data =new String[MX][5];
        int sum=0;
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery(sql_message);
        for(Map<String,Object> map : datas){
            int id = 0;
            String name = null;
            int power=0;
            LocalDateTime timebe=null;
            LocalDateTime timeup=null;
            for(String key : map.keySet()) {
                if(key.equals("user_id"))id= (int) map.get(key);
                if(key.equals("user_name"))name= (String) map.get(key);
                if(key.equals("user_create_time"))timebe= (LocalDateTime) map.get(key);
                if(key.equals("user_lastup_time"))timeup= (LocalDateTime) map.get(key);
                if(key.equals("user_power"))power= (int) map.get(key);
            }
            data[sum][0]= String.valueOf(id);
            data[sum][1]= String.valueOf(name);
            data[sum][2]= String.valueOf(timebe);
            data[sum][3]= String.valueOf(timeup);
            data[sum][4]= String.valueOf(power);
            sum++;
        }
        return data;
    }
}
~~~

##### DeleteUser.java

​	用于删除用户的页面实现。

~~~java
package UserTable;

import page.Page;
import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import java.util.List;
import java.util.Map;

public class DeleteUser {
    public static void init(){
        JFrame frame=new JFrame();
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery(User.sql_lowpoer_query);
        if(datas.isEmpty()){
            JOptionPane.showMessageDialog(frame,"没有可删除的用户");
        }else{
            String[] options=new String[datas.size()];
            int sum=0;
            for(Map<String,Object> map : datas){
                for(String key : map.keySet()) {
                    options[sum]= (String) map.get(key);
                    sum++;
                }
            }
            String info =  (String)JOptionPane.showInputDialog(frame,"请输入你的选项：","提示",JOptionPane.QUESTION_MESSAGE,null,options,options[0]);
            if(!info.isEmpty()){
                int yn=JOptionPane.showConfirmDialog(frame,"确定提交修改吗？","提示", JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE);
                if(yn==JOptionPane.OK_OPTION) {
                    JdbcUtils.JdbcUpdate(User.sql_delete_user,info);
                    JdbcUtils.JdbcUpdate(Page.sql_delete_name,info);
                }
            }
        }
    }
}
~~~

##### UpdataUser.java

​	用于修改用户信息的页面实现。

~~~java
package UserTable;

import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class UpdataUser {

    public static void init(int power,String name){
        JFrame frame=  new JFrame("修改");
        //设置窗体大小
        frame.setSize(600, 400);
        //设置窗体居中
        frame.setLocationRelativeTo(null);
        //取消布局
        frame.setLayout(null);
        //设置窗口不能改变大小
        frame.setResizable(false);
        //设置窗体是否可见
        frame.setVisible(true);
        List<Map<String, Object>> re= JdbcUtils.JdbcQuery(User.sql_query,name);
        String password=null;
        for(Map<String,Object> map : re){
            for(String key : map.keySet()) {
                if(key.equals("user_password"))password= (String) map.get(key);
            }
        }
        //原密码
        Box passbox=Box.createHorizontalBox();
        JLabel pass_a = new JLabel("  原密码为:");
        JPasswordField pass_b=new JPasswordField(15);
        pass_b.setEchoChar('*');
        passbox.add(pass_a);
        passbox.add(Box.createHorizontalStrut(10));
        passbox.add(pass_b);
        passbox.setBounds(30,50,400,30);
        frame.add(passbox);
        //修改密码
        Box passnew_box=Box.createHorizontalBox();
        JLabel passnew_a = new JLabel("修改密码为:");
        JPasswordField passnew_b=new JPasswordField(15);
        passnew_b.setEchoChar('*');
        passnew_box.add(passnew_a);
        passnew_box.add(Box.createHorizontalStrut(10));
        passnew_box.add(passnew_b);
        passnew_box.setBounds(30,100,400,30);
        frame.add(passnew_box);
        //检验密码
        Box passyn_box=Box.createHorizontalBox();
        JLabel passyn_a = new JLabel("重新输入:");
        JPasswordField passyn_b=new JPasswordField(15);
        passyn_b.setEchoChar('*');
        passyn_box.add(passyn_a);
        passyn_box.add(Box.createHorizontalStrut(10));
        passyn_box.add(passyn_b);
        passyn_box.setBounds(30,150,400,30);
        frame.add(passyn_box);
        //按钮盒子
        Box btnbox=Box.createHorizontalBox();
        //提交修改按钮
        JButton subBtn=new JButton("修改");
        //取消修改按钮
        JButton noBtn=new JButton("返回");
        btnbox.add(subBtn);
        btnbox.add(Box.createHorizontalStrut(60));
        btnbox.add(noBtn);
        btnbox.setBounds(150,300,400,50);
        frame.add(btnbox);

        noBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int yn=JOptionPane.showConfirmDialog(frame,"确定退出吗？","提示", JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE);	//确认对话框
                if(yn==JOptionPane.OK_OPTION) frame.dispose();
            }
        });
        String finalPassword = password;
        subBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String be=pass_b.getText().trim();
                String now=passnew_b.getText().trim();
                String nowag=passyn_b.getText().trim();
                if(!now.equals(nowag)|| !Objects.equals(finalPassword, be)){
                    JOptionPane.showMessageDialog(frame,((!Objects.equals(finalPassword, be))?"原密码错误\n": "")+((!now.equals(nowag)) ? "两次密码不同" : ""));
                }else{
                    int yn=JOptionPane.showConfirmDialog(frame,"确定提交修改吗？","提示", JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE);
                    if(yn==JOptionPane.OK_OPTION) {
                        JdbcUtils.JdbcUpdate(User.sql_updata_password,now,name);
                        JOptionPane.showMessageDialog(frame,"修改成功");
                        frame.dispose();
                    }
                }
            }
        });
    }
}
~~~

##### QueryUser.java

​	用于查询用户信息页面的实现。

~~~java
package UserTable;

import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class QueryUser {
    public static void init(){
        JFrame frame=  new JFrame("查询");
        String info = JOptionPane.showInputDialog(frame,"你要查询的用户名为:","查询",JOptionPane.WARNING_MESSAGE);
        List<Map<String, Object>> re= JdbcUtils.JdbcQuery(User.sql_query,info);
        if(!re.isEmpty()){
            JOptionPane.showMessageDialog(frame,"查询成功");
            int id = 0;
            String name = null;
            int power=0;
            LocalDateTime timebe=null;
            LocalDateTime timeup=null;
            for(Map<String,Object> map : re){
                for(String key : map.keySet()) {
                    if(key.equals("user_id"))id= (int) map.get(key);
                    if(key.equals("user_name"))name= (String) map.get(key);
                    if(key.equals("user_create_time"))timebe= (LocalDateTime) map.get(key);
                    if(key.equals("user_lastup_time"))timeup= (LocalDateTime) map.get(key);
                    if(key.equals("user_power"))power= (int) map.get(key);
                }
            }
            JOptionPane.showMessageDialog(frame,"用户名id为:"+id+"\n用户名为:"+name+"\n用户创建时间:"+timebe+"\n用户最后登录时间"+timeup+"\n用户权限"+power);
        }
    }
}
~~~

#### page包

​	用于存取文章相关类的包。

##### Page.java

​	用于存储文章管理的sql语句和方法。

~~~java
package page;

import utils.JdbcUtils;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class Page {
    public static int sum= JdbcUtils.JdbcQuery("SELECT page_name FROM page").size();  //注册文章数目统计

    public static void jssum(){
        sum=JdbcUtils.JdbcQuery("SELECT page_name FROM page").size();  //注册文章数目统计
    }
    public static String sql_add="INSERT INTO page values (?,?,?,?,?,?,?,?);";
    public static String sql_query_id="select * from page where page_name = ?";
    public static String sql_query_class_sum="select * from page where page_class = ?";
    public static String sql_updata_class="UPDATE page SET page_class = ? WHERE page_class = ? ";
    public static String sql_delete_name="DELETE FROM page WHERE page_name = ?";
    public static String sql_delete_class="DELETE FROM page WHERE page_class = ?";

    public static boolean sameName(String name){
        String sql_same_query="SELECT page_name FROM page WHERE page_name = "+name;
        return !JdbcUtils.JdbcQuery(sql_same_query).isEmpty();
    }
    public static void idChange(){
        String sql = "SELECT * FROM page ORDER BY page_id ASC";
        List<Map<String, Object>> rs = JdbcUtils.JdbcQuery(sql);
        int newId = 1;
        for(Map<String,Object> map : rs){
            for(String key : map.keySet()) {
                if (key.equals("page_id")){
                    int oldId = (int) map.get(key);
                    String updateSql = ("UPDATE page SET page_id = " + newId +" WHERE page_id = " + oldId);
                    JdbcUtils.JdbcUpdate(updateSql);
                    newId++;
                }
            }
        }
    }
}
~~~

##### PageClass.java

​	用于存取文章分类的sql语句和方法。

~~~java
package page;

import utils.JdbcUtils;

import java.util.List;
import java.util.Map;

public class PageClass {
    public static int sum= JdbcUtils.JdbcQuery("SELECT page_class_name FROM page_class").size();  //注册文章种类统计
    public static void jssum(){
        sum=JdbcUtils.JdbcQuery("SELECT page_class_name FROM page_class").size();  //注册文章数目统计
    }
    public static String sql_addClass="INSERT INTO page_class values ( ? , ? );";
    public static String sql_deleteClass="DELETE FROM page_class WHERE page_class_name = ?";

    public static String sql_queryClass="select * from page_class where page_class_name = ?";
    public static String sql_updataClass="UPDATE page_class SET page_class_name = ? WHERE page_class_name = ?";
    public static boolean sameName(String name){
        String sql_same_query="SELECT * FROM page_class WHERE page_class_name = "+name;
        return !JdbcUtils.JdbcQuery(sql_same_query).isEmpty();
    }
    public static void idChange(){
        String sql = "SELECT * FROM page_class ORDER BY page_class_id ASC";
        List<Map<String, Object>> rs = JdbcUtils.JdbcQuery(sql);
        int newId = 1;
        for(Map<String,Object> map : rs){
            for(String key : map.keySet()) {
                if (key.equals("page_class_id")){
                    int oldId = (int) map.get(key);
                    String updateSql = ("UPDATE page_class SET page_class_id = " + newId +" WHERE page_class_id = " + oldId);
                    JdbcUtils.JdbcUpdate(updateSql);
                    newId++;
                }
            }
        }
    }
}
~~~

#### PageTable包

​	用于存取文章相关页面类的包。

##### PageTable.java

​	文章展示页面的实现。

~~~java
package PageTable;

import page.Page;
import utils.JdbcUtils;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.*;
import java.util.List;

public class PageTable extends Box {
    public PageTable(int power,String name){
        super(BoxLayout.Y_AXIS);
        //创建按钮
        JPanel btnPanel =new JPanel();
        btnPanel.setMaximumSize(new Dimension(800,20));
        JButton addBtn=new JButton("添加");
        JButton updateBtn=new JButton("修改");
        JButton deleteBtn=new JButton("删除");
        JButton queryBtn=new JButton("查询");
        btnPanel.add(addBtn);
        btnPanel.add(updateBtn);
        btnPanel.add(deleteBtn);
        btnPanel.add(queryBtn);
        this.add(btnPanel);
        addBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                AddPage.add(power,name);
            }
        });
        updateBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                UpdataPage.updata(power,name);
            }
        });
        deleteBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                DeletePage.delete();
            }
        });
        queryBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                QueryPage.find(power, name);
            }
        });
        String[] ts={"文章编号","文章名","作者","文章分类","文章内容","文章创建时间","最后一次更改时间","文章权限"};
        String[][] begin =data_update();
        JTable table =new JTable();
        table.setEnabled(false);
        DefaultTableModel model =new DefaultTableModel(begin,ts); // 新建一个默认数据模型
        JScrollPane scrollPane=new JScrollPane(table);
        table.setModel(model);
        add(scrollPane);
    }
    public String[][] data_update(){
        int MX= Page.sum;
        String[][] data =new String[MX][8];
        int sum=0;
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT * FROM page");
        for(Map<String,Object> map : datas){
            int id = 0;
            String name = null;
            String class_ = null;
            String content = null;
            LocalDateTime betime = null;
            LocalDateTime updatetime = null;
            int power = 0;
            String username = null;
            int comment_sum=0;
            for(String key : map.keySet()) {
                if (key.equals("page_id")) id = (int) map.get(key);
                if (key.equals("page_name")) name = (String) map.get(key);
                if (key.equals("page_class")) class_ = (String) map.get(key);
                if (key.equals("page_content")) content = (String) map.get(key);
                if (key.equals("page_releasedata")) betime = (LocalDateTime) map.get(key);
                if (key.equals("page_update")) updatetime = (LocalDateTime) map.get(key);
                if (key.equals("page_permissions")) power = (int) map.get(key);
                if(key.equals("page_user"))username= (String) map.get(key);
            }
            data[sum][0]= String.valueOf(id);data[sum][2]= String.valueOf(username);
            data[sum][1]= String.valueOf(name);data[sum][3]= String.valueOf(class_);
            data[sum][4]= String.valueOf(content);data[sum][5]= String.valueOf(betime);
            data[sum][6]= String.valueOf(updatetime);data[sum][7]= String.valueOf(power);
            sum++;
        }
        return data;
    }
}
~~~

##### AddPage.java

​	文章添加页的实现。

~~~java
package PageTable;

import PageClassTable.AddPageClass;
import page.Page;
import page.PageClass;
import user.User;
import utils.JdbcUtils;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class AddPage {


    static Font font3=new Font("宋体",Font.BOLD,20);
    public static void add(int power,String name){
        JFrame frame =new JFrame("添加信息");
        //设置窗体大小
        frame.setSize(500, 400);
        //设置窗体居中
        frame.setLocationRelativeTo(null);
        //取消布局
        frame.setLayout(null);
        //设置窗口不能改变大小
        frame.setResizable(false);
        //按钮盒子
        Box btnbox=Box.createHorizontalBox();
        //提交修改按钮
        JButton subBtn=new JButton("提交");
        //取消修改按钮
        JButton noBtn=new JButton("返回");
        btnbox.add(subBtn);
        btnbox.add(Box.createHorizontalStrut(60));
        btnbox.add(noBtn);
        //定位盒子
        btnbox.setBounds(144,304,500,20);
        frame.add(btnbox);
        //设置窗体是否可见
        frame.setVisible(true);
        //文章名:
        Box namebox=Box.createHorizontalBox();
        JLabel namelabel=new JLabel("文章名:");
        JTextField nameField=new JTextField(15);
        namelabel.setFont(font3);
        nameField.setFont(font3);
        namebox.add(namelabel);
        namebox.add(Box.createVerticalStrut(20));
        namebox.add(nameField);
        namebox.setBounds(100,40,300,30);
        frame.add(namebox);
        //文章类名:
//        JComboBox<String> c1 = new JComboBox<String>();//创建一个下拉列表框c1
        Box classbox=Box.createHorizontalBox();
        JLabel classlabel=new JLabel("分类名:");
        JComboBox<String> classField= new JComboBox<>();
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT page_class_name FROM page_class");
        for(Map<String,Object> map : datas){
            for(String key : map.keySet()) {
                classField.addItem((String) map.get(key));
            }
        }
        classField.addItem("添加新类");
        classlabel.setFont(font3);
        classField.setFont(font3);
        classbox.add(classlabel);
        classbox.add(Box.createVerticalStrut(20));
        classbox.add(classField);
        classbox.setBounds(100,90,300,30);
        frame.add(classbox);
        //文章内容:
        Box textbox=Box.createHorizontalBox();
        JLabel textlabel=new JLabel("内  容:");
        JTextArea textField=new JTextArea(2,30);
        textField.setLineWrap(true);// 激活自动换行功能
        textField.setFont(font3);
        JScrollPane croll = new JScrollPane(textField);
        textlabel.setFont(font3);
        textbox.add(textlabel);
        textbox.add(Box.createVerticalStrut(20));
        textbox.add(croll);
        textbox.setBounds(100,140,300,140);
        frame.add(textbox);
        //按钮逻辑
        noBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                frame.dispose();
            }
        });
        subBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name_page =nameField.getText().trim();
                String class_page= Objects.requireNonNull(classField.getSelectedItem()).toString();
                String text_page=textField.getText().trim();
                if(Objects.equals(class_page, "添加新类")){
                    class_page=AddPageClass.init(power);
                }
                int yn=JOptionPane.showConfirmDialog(frame, "确认添加该文章？", "确认框", JOptionPane.OK_CANCEL_OPTION);
                if(yn==JOptionPane.YES_OPTION){
                    if(Page.sameName(name_page)){
                        JOptionPane.showMessageDialog(frame, "文章名重复");
                    }else{
                        LocalDateTime time=LocalDateTime.now();
                        JdbcUtils.JdbcUpdate(Page.sql_add, Page.sum+1,name_page,class_page,text_page,time,time,power,name);
                        Page.jssum();
                        JOptionPane.showMessageDialog(frame, "创建成功");
                    }
                }
                frame.dispose();
            }
        });
    }
}
~~~

##### DeletePage.java

​	文章删除页的实现。

~~~java
package PageTable;

import comment.Comment;
import page.Page;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class DeletePage {
    public static String sql_delete="DELETE FROM page WHERE page_id = ?";
    public static  void delete(){
        JFrame frame=  new JFrame("修改");
        String info = JOptionPane.showInputDialog(frame,"你要删除的文章id号","删除",JOptionPane.WARNING_MESSAGE);
        if(info!=null){
            List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT * FROM page WHERE page_id = "+info);
            String name=null;
            for(Map<String,Object> map : datas) {
                for (String key : map.keySet()) {
                    if (key.equals("page_name")) name = (String) map.get(key);
                }
            }
            int id = Integer.parseInt(info);
            int yn=JOptionPane.showConfirmDialog(frame, "确认删除该文章？", "确认框", JOptionPane.OK_CANCEL_OPTION);
            if(yn==JOptionPane.YES_OPTION){
                JdbcUtils.JdbcUpdate(sql_delete,id);
                JdbcUtils.JdbcUpdate(Comment.sql_deleteComment_class,name);
                Page.jssum();
                JOptionPane.showMessageDialog(frame, "删除成功");
            }else{
                frame.dispose();
            }
        }
    }
}
~~~

##### UpdataPage.java

​	文章修改页的实现。

~~~java
package PageTable;

import PageClassTable.AddPageClass;
import utils.JdbcUtils;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class UpdataPage {
    static String sql_query_id="select * from page where page_id = ?";
    static String sql_updata_id="UPDATE page SET page_name = ? , page_class = ? ,page_content = ? ,page_update = ? WHERE page_id = ?";
    public static void updata(int power,String name){
        JFrame frame=  new JFrame("修改");
        String info = JOptionPane.showInputDialog(frame,"你要修改的文章id号","修改",JOptionPane.WARNING_MESSAGE);
        if(info!=null){
            //设置窗体大小
            frame.setSize(800, 600);
            //设置窗体居中
            frame.setLocationRelativeTo(null);
            //取消布局
            frame.setLayout(null);
            //设置窗口不能改变大小
            frame.setResizable(false);
            //设置窗体是否可见
            frame.setVisible(true);
            int id = Integer.parseInt(info);
            List<Map<String, Object>> re= JdbcUtils.JdbcQuery(sql_query_id,id);
            String name_page = null;
            String class_ = null;
            String content = null;
            LocalDateTime betime = null;
            LocalDateTime updatetime = null;
            String username = null;
            for(Map<String,Object> map : re){
                for(String key : map.keySet()) {
                    if (key.equals("page_name")) name_page = (String) map.get(key);
                    if (key.equals("page_class")) class_ = (String) map.get(key);
                    if (key.equals("page_content")) content = (String) map.get(key);
                    if (key.equals("page_releasedata")) betime = (LocalDateTime) map.get(key);
                    if (key.equals("page_update")) updatetime = (LocalDateTime) map.get(key);
                    if (key.equals("page_permissions")) power = (int) map.get(key);
                    if(key.equals("page_user"))username= (String) map.get(key);
                }
            }
            Box textid=Box.createHorizontalBox();
            JLabel textid_a = new JLabel("文章id为:"+id);
            textid.add(textid_a);
            textid.add(Box.createHorizontalStrut(10));
            textid.setBounds(30,50,700,30);
            frame.add(textid);

            Box textuser=Box.createHorizontalBox();
            JLabel textuser_a=new JLabel("文章作者为:"+username);
            textuser.add(textuser_a);
            textuser.add(Box.createHorizontalStrut(10));
            textid.setBounds(30,100,700,30);
            frame.add(textid);

            Box texttimebe=Box.createHorizontalBox();
            JLabel texttimebe_a = new JLabel("发布时间id为:"+betime);
            texttimebe.add(texttimebe_a);
            texttimebe.add(Box.createHorizontalStrut(10));
            texttimebe.setBounds(30,150,700,30);
            frame.add(texttimebe);

            Box texttime=Box.createHorizontalBox();
            JLabel texttime_a = new JLabel("上次修改时间id为:"+updatetime);
            texttime.add(texttime_a);
            texttime.add(Box.createHorizontalStrut(10));
            texttime.setBounds(30,200,700,30);
            frame.add(texttime);

            Box textname=Box.createHorizontalBox();
            JLabel textname_a = new JLabel("文章名为为:"+name_page+"  修改为:");
            JTextField textname_b=new JTextField(15);
            textname.add(textname_a);
            textname.add(Box.createHorizontalStrut(10));
            textname.add(textname_b);
            textname.setBounds(30,250,700,30);
            frame.add(textname);

            JComboBox<String> textclass_b= new JComboBox<>();
            List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT page_class_name FROM page_class");
            for(Map<String,Object> map : datas){
                for(String key : map.keySet()) {
                    textclass_b.addItem((String) map.get(key));
                }
            }
            textclass_b.addItem("添加新类");
            Box textclass_=Box.createHorizontalBox();
            JLabel textclass_a = new JLabel("文章分类为:"+class_+"  修改为:");
            textclass_.add(textclass_a);
            textclass_.add(Box.createHorizontalStrut(10));
            textclass_.add(textclass_b);
            textclass_.setBounds(30,300,700,30);
            frame.add(textclass_);



            Box textcontent=Box.createHorizontalBox();
            JTextArea textcontent_a = new JTextArea(2,30);
            textcontent_a.append("原文为:\n"+content);
            textcontent_a.setLineWrap(true);// 激活自动换行功能
            textcontent_a.setEditable(false); //只读状态
            JScrollPane croll1 = new JScrollPane(textcontent_a);
            JTextArea textcontent_b=new JTextArea(2,30);
            textcontent_b.setLineWrap(true);// 激活自动换行功能
            JScrollPane croll2 = new JScrollPane(textcontent_b);
            textcontent.add(croll1);
            textcontent.add(Box.createHorizontalStrut(10));
            textcontent.add(croll2);
            textcontent.setBounds(30,350,700,80);
            frame.add(textcontent);

            //按钮盒子
            Box btnbox=Box.createHorizontalBox();
            //提交修改按钮
            JButton subBtn=new JButton("修改");
            //取消修改按钮
            JButton noBtn=new JButton("返回");
            btnbox.add(subBtn);
            btnbox.add(Box.createHorizontalStrut(60));
            btnbox.add(noBtn);
            btnbox.setBounds(450,450,700,50);
            frame.add(btnbox);

            noBtn.addActionListener(new AbstractAction() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    int yn=JOptionPane.showConfirmDialog(frame,"确定退出吗？","提示", JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE);	//确认对话框
                    if(yn==JOptionPane.OK_OPTION) frame.dispose();
                }
            });
            String finalName_page = name_page;
            String finalClass_ = class_;
            String finalContent = content;
            subBtn.addActionListener(new AbstractAction() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    int yn=JOptionPane.showConfirmDialog(frame,"确定提交修改吗？","提示", JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE);
                    if(yn==JOptionPane.OK_OPTION) {
                        LocalDateTime time=LocalDateTime.now();
                        String a=textname_b.getText().trim();
                        if(a.isEmpty())a= finalName_page;
                        String b= Objects.requireNonNull(textclass_b.getSelectedItem()).toString();
                        if(Objects.equals(b, "添加新类")) {
                            b = AddPageClass.init(1);
                        }
                        String c=textcontent_b.getText().trim();
                        if(c.isEmpty())c= finalContent;
                        JdbcUtils.JdbcUpdate(sql_updata_id,a,b,c,time,id);
                        JOptionPane.showMessageDialog(frame,"修改成功");
                        frame.dispose();
                    }
                }
            });
        }
    }
}
~~~

##### QueryPage.java

​	文章查询页的实现。

~~~java
package PageTable;

import comment.Comment;
import page.Page;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class QueryPage {

    public static  void find(int power,String name){
        JFrame frame=  new JFrame("查询");
        String info = JOptionPane.showInputDialog(frame,"你要查询的文章名为:","查询",JOptionPane.WARNING_MESSAGE);
        List<Map<String, Object>> re= JdbcUtils.JdbcQuery(Page.sql_query_id,info);
        if(!re.isEmpty()){
            JOptionPane.showMessageDialog(frame,"查询成功");
            //设置窗体大小
            frame.setSize(800, 600);
            //设置窗体居中
            frame.setLocationRelativeTo(null);
            //取消布局
            frame.setLayout(null);
            //设置窗口不能改变大小
            frame.setResizable(false);
            //设置窗体是否可见
            frame.setVisible(true);
            int id=0;
            String name_page = null;
            String class_ = null;
            String content = null;
            LocalDateTime betime = null;
            LocalDateTime updatetime = null;
            String username = null;
            for(Map<String,Object> map : re){
                for(String key : map.keySet()) {
                    if(key.equals("page_id"))id= (int) map.get(key);
                    if (key.equals("page_name")) name_page = (String) map.get(key);
                    if (key.equals("page_class")) class_ = (String) map.get(key);
                    if (key.equals("page_content")) content = (String) map.get(key);
                    if (key.equals("page_releasedata")) betime = (LocalDateTime) map.get(key);
                    if (key.equals("page_update")) updatetime = (LocalDateTime) map.get(key);
                    if (key.equals("page_permissions")) power = (int) map.get(key);
                    if(key.equals("page_user"))username= (String) map.get(key);
                }
            }
            Box textid=Box.createHorizontalBox();
            JLabel textid_a = new JLabel("文章id为:"+id);
            textid.add(textid_a);
            textid.add(Box.createHorizontalStrut(10));
            textid.setBounds(30,50,700,30);
            frame.add(textid);

            Box textuser=Box.createHorizontalBox();
            JLabel textuser_a=new JLabel("文章作者为:"+username);
            textuser.add(textuser_a);
            textuser.add(Box.createHorizontalStrut(10));
            textid.setBounds(30,100,700,30);
            frame.add(textid);

            Box texttimebe=Box.createHorizontalBox();
            JLabel texttimebe_a = new JLabel("发布时间id为:"+betime);
            texttimebe.add(texttimebe_a);
            texttimebe.add(Box.createHorizontalStrut(10));
            texttimebe.setBounds(30,150,700,30);
            frame.add(texttimebe);

            Box texttime=Box.createHorizontalBox();
            JLabel texttime_a = new JLabel("上次修改时间id为:"+updatetime);
            texttime.add(texttime_a);
            texttime.add(Box.createHorizontalStrut(10));
            texttime.setBounds(30,200,700,30);
            frame.add(texttime);

            Box textname=Box.createHorizontalBox();
            JLabel textname_a = new JLabel("文章名为为:"+name_page);
            textname.add(textname_a);
            textname.setBounds(30,250,700,30);
            frame.add(textname);

            Box textclass_=Box.createHorizontalBox();
            JLabel textclass_a = new JLabel("文章分类为:"+class_);
            textclass_.add(textclass_a);
            textclass_.setBounds(30,300,700,30);
            frame.add(textclass_);

            Box comment=Box.createHorizontalBox();
            JLabel comment_a = new JLabel("文章下的评论数为:"+ JdbcUtils.JdbcQuery(Comment.sql_queryComment_sum,name_page).size());
            comment.add(comment_a);
            comment.setBounds(30,350,700,30);
            frame.add(comment);

            Box textcontent=Box.createHorizontalBox();
            JTextArea textcontent_a = new JTextArea(2,30);
            textcontent_a.append("原文为:\n"+content);
            textcontent_a.setLineWrap(true);// 激活自动换行功能
            textcontent_a.setEditable(false); //只读状态
            JScrollPane croll1 = new JScrollPane(textcontent_a);
            textcontent.add(croll1);
            textcontent.setBounds(30,400,700,80);
            frame.add(textcontent);
        }else{
            JOptionPane.showMessageDialog(frame,"查询失败");
        }
    }
}
~~~

#### PageClassTable包

​	用于存取文章分类相关页面类的包。

##### PageClassTable.java

​	文章分类页面的实现。

~~~java
package PageClassTable;

import PageTable.AddPage;
import PageTable.DeletePage;
import PageTable.QueryPage;
import PageTable.UpdataPage;
import page.Page;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.util.List;
import java.util.Map;

public class PageClassTable extends Box {
    public PageClassTable(int power, String name) {
        super(BoxLayout.Y_AXIS);
        //创建按钮
        JPanel btnPanel =new JPanel();
        btnPanel.setMaximumSize(new Dimension(800,20));
        JButton addBtn=new JButton("添加");
        JButton updateBtn=new JButton("修改");
        JButton deleteBtn=new JButton("删除");
        JButton queryBtn=new JButton("查询");
        btnPanel.add(addBtn);
        btnPanel.add(updateBtn);
        btnPanel.add(deleteBtn);
        btnPanel.add(queryBtn);
        this.add(btnPanel);
        addBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                AddPageClass.init(power);
            }
        });
        updateBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                UpdataPageClass.init(power);
            }
        });
        deleteBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                DeletePageClass.init(power);
            }
        });
        queryBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                QueryPageClass.init(power);
            }
        });
        String[] ts={"分类编号","分类名"};
        String[][] begin =data_update();
        JTable table =new JTable();
        table.setEnabled(false);
        DefaultTableModel model =new DefaultTableModel(begin,ts); // 新建一个默认数据模型
        JScrollPane scrollPane=new JScrollPane(table);
        table.setModel(model);
        add(scrollPane);
    }
    public String[][] data_update(){
        PageClass.jssum();
        int MX= PageClass.sum;
        String[][] data =new String[MX][2];
        int sum=0;
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT * FROM page_class");
        for(Map<String,Object> map : datas){
            int id = 0;
            String name = null;
            for(String key : map.keySet()) {
                if (key.equals("page_class_id")) id = (int) map.get(key);
                if (key.equals("page_class_name")) name = (String) map.get(key);
            }
            data[sum][0]= String.valueOf(id);
            data[sum][1]= String.valueOf(name);
            sum++;
        }
        return data;
    }
}
~~~

##### AddPageClass.java

​	添加文章分类页面实现。

~~~java
package PageClassTable;

import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;

public class AddPageClass {
    public static String init(int power){
        JFrame frame=new JFrame();
        String info = JOptionPane.showInputDialog(frame,"要加入的分类为:","输入",JOptionPane.WARNING_MESSAGE);
        if(!info.isEmpty()){
            if(PageClass.sameName(info)){
                JOptionPane.showMessageDialog(frame,"分类名重复");
            }else{
                JdbcUtils.JdbcUpdate(PageClass.sql_addClass,PageClass.sum+1,info);
                JOptionPane.showMessageDialog(frame,"添加新分类成功");
            }
        }
        return info;
    }
}
~~~

##### DeletePageClass.java

​	删除文章分类页面实现。

~~~java
package PageClassTable;

import page.Page;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;

public class DeletePageClass {
    public static void init(int power){
        JFrame frame=new JFrame();
        String info = JOptionPane.showInputDialog(frame,"要删除的分类为:","输入",JOptionPane.WARNING_MESSAGE);
        if(!JdbcUtils.JdbcQuery(PageClass.sql_queryClass,info).isEmpty()){
            int yn=JOptionPane.showConfirmDialog(frame, "确认删除该分类？", "确认框", JOptionPane.OK_CANCEL_OPTION);
            if(yn==JOptionPane.YES_OPTION){
                JdbcUtils.JdbcUpdate(PageClass.sql_deleteClass,info);
                JdbcUtils.JdbcUpdate(Page.sql_delete_class,info);
                PageClass.jssum();
                JOptionPane.showMessageDialog(frame, "删除成功");
            }else{
                frame.dispose();
            }
        }else{
            JOptionPane.showMessageDialog(frame, "分类不存在");
        }
    }
}
~~~

##### UpdataPageClass.java

​	文章分类修改页面实现。

~~~java
package PageClassTable;

import page.Page;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import java.util.List;
import java.util.Map;

public class UpdataPageClass {
    public static void init(int power){
        JFrame frame=new JFrame();
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT * FROM page_class");
        int sum=0;
        String[] options=new String[datas.size()];
        for(Map<String,Object> map : datas){
            for(String key : map.keySet()) {
                if (key.equals("page_class_name")) options[sum++] = (String) map.get(key);
            }
        }
        String info1 = (String)JOptionPane.showInputDialog(frame,"请输入你的选项：","修改",JOptionPane.QUESTION_MESSAGE,null,options,options[0]);
        if(!info1.isEmpty()){
            String info2 = JOptionPane.showInputDialog(frame,"修改为:","输入",JOptionPane.WARNING_MESSAGE);
            if(!info2.isEmpty()){
                JdbcUtils.JdbcUpdate(PageClass.sql_updataClass,info2,info1);
                JdbcUtils.JdbcUpdate(Page.sql_updata_class,info2,info1);
                JOptionPane.showMessageDialog(frame,"修改成功");
            }else{
                JOptionPane.showMessageDialog(frame,"修改不许为空:");
            }
        }

    }
}
~~~

##### QueryPageClass.java

​	文章分类查询页面实现。

~~~java
package PageClassTable;

import page.Page;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import java.util.List;
import java.util.Map;

public class UpdataPageClass {
    public static void init(int power){
        JFrame frame=new JFrame();
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT * FROM page_class");
        int sum=0;
        String[] options=new String[datas.size()];
        for(Map<String,Object> map : datas){
            for(String key : map.keySet()) {
                if (key.equals("page_class_name")) options[sum++] = (String) map.get(key);
            }
        }
        String info1 = (String)JOptionPane.showInputDialog(frame,"请输入你的选项：","修改",JOptionPane.QUESTION_MESSAGE,null,options,options[0]);
        if(!info1.isEmpty()){
            String info2 = JOptionPane.showInputDialog(frame,"修改为:","输入",JOptionPane.WARNING_MESSAGE);
            if(!info2.isEmpty()){
                JdbcUtils.JdbcUpdate(PageClass.sql_updataClass,info2,info1);
                JdbcUtils.JdbcUpdate(Page.sql_updata_class,info2,info1);
                JOptionPane.showMessageDialog(frame,"修改成功");
            }else{
                JOptionPane.showMessageDialog(frame,"修改不许为空:");
            }
        }

    }
}
~~~

#### comment包

​	用于存储评论类。

##### Comment.java

​	用于评论相关的操作。

~~~java
package comment;

import utils.JdbcUtils;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class Comment {
    public static int sum= JdbcUtils.JdbcQuery("SELECT * FROM comment").size();
    public static void jssum(){
        sum=JdbcUtils.JdbcQuery("SELECT * FROM comment").size();  //注册文章数目统计
    }
    public static String sql_addComment="INSERT INTO comment values (?,?,?,?,?,?,?,?);";
    public static String sql_deleteComment="DELETE FROM comment WHERE comment_id = ?";
    public static String sql_deleteComment_class="DELETE FROM comment WHERE comment_name = ?";
    public static String sql_queryComment="SELECT * FROM comment WHERE comment_id = ? ";
    public static String sql_queryComment_sum="SELECT * FROM comment WHERE comment_name = ? ";
    public static String sql_updataCommentText="UPDATE comment SET comment_text = ? WHERE comment_id = ?";
    public static String sql_updataCommentTime="UPDATE comment SET comment_updata = ? WHERE comment_id = ?";
    public static boolean comment_same(String name){
        return !JdbcUtils.JdbcQuery("SELECT comment_name FROM comment WHERE comment_name = "+name).isEmpty();
    }
    public static void idChange(){
        String sql = "SELECT * FROM comment ORDER BY comment_id ASC";
        List<Map<String, Object>> rs = JdbcUtils.JdbcQuery(sql);
        int newId = 1;
        for(Map<String,Object> map : rs){
            for(String key : map.keySet()) {
                if (key.equals("comment_id")){
                    int oldId = (int) map.get(key);
                    String updateSql = ("UPDATE comment SET comment_id = " + newId +" WHERE comment_id = " + oldId);
                    JdbcUtils.JdbcUpdate(updateSql);
                    newId++;
                }
            }
        }
    }
}
~~~

#### CommentTable包

​	用于存储评论页面的包。

##### CommentTable.java

​	用于实现评论管理页面的实现。

~~~java
package CommentTable;

import PageClassTable.AddPageClass;
import PageClassTable.DeletePageClass;
import PageClassTable.QueryPageClass;
import PageClassTable.UpdataPageClass;
import comment.Comment;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class CommentTable extends Box{
    public CommentTable(int power, String name) {
        super(BoxLayout.Y_AXIS);
        //创建按钮
        JPanel btnPanel =new JPanel();
        btnPanel.setMaximumSize(new Dimension(800,20));
        JButton addBtn=new JButton("添加");
        JButton updateBtn=new JButton("修改");
        JButton deleteBtn=new JButton("删除");
        JButton queryBtn=new JButton("查询");
        btnPanel.add(addBtn);
        btnPanel.add(updateBtn);
        btnPanel.add(deleteBtn);
        btnPanel.add(queryBtn);
        this.add(btnPanel);
        addBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                AddComment.init(name);
            }
        });
        updateBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                UpdataComment.init(name);
            }
        });
        deleteBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                DeleteComment.init(name);
            }
        });
        queryBtn.addActionListener(new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                QueryComment.init();
            }
        });
        String[] ts={"评论编号","评论人","评论文章","评论内容","评论同意数","评论反对数","评论创建时间","评论修改时间"};
        String[][] begin =data_update();
        JTable table =new JTable();
        table.setEnabled(false);
        DefaultTableModel model =new DefaultTableModel(begin,ts); // 新建一个默认数据模型
        JScrollPane scrollPane=new JScrollPane(table);
        table.setModel(model);
        add(scrollPane);
    }
    public String[][] data_update(){
        int MX= Comment.sum;
        String[][] data =new String[MX][8];
        int sum=0;
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT * FROM comment");
        for(Map<String,Object> map : datas){
            int id = 0;
            String text = null;
            LocalDateTime timebe=null;
            LocalDateTime timeen=null;
            int agree=0;
            int disagree=0;
            String name=null;
            String user=null;
            for(String key : map.keySet()) {
                if(key.equals("comment_id"))id= (int) map.get(key);
                if(key.equals("comment_text"))text= (String) map.get(key);
                if(key.equals("comment_releasedata"))timebe= (LocalDateTime) map.get(key);
                if(key.equals("comment_update"))timeen= (LocalDateTime) map.get(key);
                if(key.equals("comment_agreesum"))agree= (int) map.get(key);
                if(key.equals("comment_againstsum"))disagree=(int)map.get(key);
                if(key.equals("comment_user"))user=(String)map.get(key);
                if(key.equals("comment_name"))name= (String) map.get(key);
            }
            data[sum][0]= String.valueOf(id);
            data[sum][1]= String.valueOf(user);
            data[sum][2]= String.valueOf(name);
            data[sum][3]= String.valueOf(text);
            data[sum][4]= String.valueOf(agree);
            data[sum][5]= String.valueOf(disagree);
            data[sum][6]= String.valueOf(timebe);
            data[sum][7]= String.valueOf(timeen);
            sum++;
        }
        return data;
    }
}
~~~

##### AddComment.java

​	用于添加评论页面的实现。

~~~java
package CommentTable;

import comment.Comment;
import page.Page;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class AddComment {
    public static void init(String name){
        JFrame frame=new JFrame();
        List<Map<String, Object>> datas= JdbcUtils.JdbcQuery("SELECT page_name FROM page");
        String [] options = new String[Page.sum];
        int sum=0;
        for(Map<String,Object> map : datas){
            for(String key : map.keySet()) {
                options[sum++]= (String) map.get(key);
            }
        }
        String info = (String)JOptionPane.showInputDialog(frame,"评论的文章为：","提示",JOptionPane.QUESTION_MESSAGE,null,options,options[0]);
        if(!info.isEmpty()){
            if(Comment.comment_same(info)){
                JOptionPane.showMessageDialog(frame,"要评论的文章不存在");
            }else{
                String info2 = JOptionPane.showInputDialog(frame,"评论内容为:","输入",JOptionPane.WARNING_MESSAGE);
                if(!info2.isEmpty()){
                    LocalDateTime time=LocalDateTime.now();
                    JdbcUtils.JdbcUpdate(Comment.sql_addComment,Comment.sum+1,info2,time,time,0,0,info,name);
                    Comment.jssum();
                    JOptionPane.showMessageDialog(frame,"添加评论成功");
                }
            }
        }
    }
}
~~~

##### DeleteComment.java

​	用于删除评论的实现。

~~~java
package CommentTable;

import comment.Comment;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class DeleteComment {
    public static void init(String name){
        JFrame frame=new JFrame();
        String info = JOptionPane.showInputDialog(frame,"要删除的评论id编号为:","输入",JOptionPane.WARNING_MESSAGE);
        int yn=JOptionPane.showConfirmDialog(frame, "确认删除该评论？", "确认框", JOptionPane.OK_CANCEL_OPTION);
        if(yn==JOptionPane.YES_OPTION){
            JdbcUtils.JdbcUpdate(Comment.sql_deleteComment,info);
            PageClass.jssum();
            JOptionPane.showMessageDialog(frame, "删除成功");
        }
    }
}
~~~

##### QueryComment.java

​	用于查询评论的实现。

~~~java
package CommentTable;

import comment.Comment;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class QueryComment {
    public static void init(){
        JFrame frame=new JFrame();
        String info = JOptionPane.showInputDialog(frame,"要查寻的id编号为:","输入",JOptionPane.WARNING_MESSAGE);
        if(!info.isEmpty()){
            JOptionPane.showMessageDialog(frame,"查询成功");
            int id = 0;
            String text = null;
            LocalDateTime timebe=null;
            LocalDateTime timeen=null;
            int agree=0;
            int disagree=0;
            String user=null;
            String name=null;
            List<Map<String, Object>> datas= JdbcUtils.JdbcQuery(Comment.sql_queryComment,info);
            for(Map<String,Object> map : datas){
                for(String key : map.keySet()) {
                    if(key.equals("comment_id"))id= (int) map.get(key);
                    if(key.equals("comment_text"))text= (String) map.get(key);
                    if(key.equals("comment_releasedata"))timebe= (LocalDateTime) map.get(key);
                    if(key.equals("comment_update"))timeen= (LocalDateTime) map.get(key);
                    if(key.equals("comment_agreesum"))agree= (int) map.get(key);
                    if(key.equals("comment_againstsum"))disagree=(int)map.get(key);
                    if(key.equals("comment_user"))user=(String)map.get(key);
                    if(key.equals("comment_name"))name= (String) map.get(key);
                }
            }
            JOptionPane.showMessageDialog(frame,"id:"+id+"\n"+"文章名为:"+name+"\n作者:"+user+"\n内容:"+text+"\n赞同数"+agree+"\n反对数"+disagree+"\n创建时间:"+timebe+"\n最后修改时间"+timeen);
        }
    }
}
~~~

##### UpdataComment.java

​	用于修改评论的实现。

~~~java
package CommentTable;

import comment.Comment;
import page.PageClass;
import utils.JdbcUtils;

import javax.swing.*;
import java.time.LocalDateTime;

public class UpdataComment {
    public static void init(String name){
        JFrame frame=new JFrame();
        String info = JOptionPane.showInputDialog(frame,"要修改的评论id编号为:","输入",JOptionPane.WARNING_MESSAGE);
        if(JdbcUtils.JdbcQuery(Comment.sql_queryComment,info).isEmpty()){
            JOptionPane.showMessageDialog(frame,"id不存在");
        }else{
            String info2 = JOptionPane.showInputDialog(frame,"要修改内容为为:","输入",JOptionPane.WARNING_MESSAGE);
            int yn=JOptionPane.showConfirmDialog(frame, "确认修改该评论？", "确认框", JOptionPane.OK_CANCEL_OPTION);
            if(yn==JOptionPane.YES_OPTION){
                LocalDateTime time=LocalDateTime.now();
                JdbcUtils.JdbcUpdate(Comment.sql_updataCommentText,info2,info);
                JdbcUtils.JdbcUpdate(Comment.sql_updataCommentTime,time,info);
                PageClass.jssum();
                JOptionPane.showMessageDialog(frame, "修改成功");
            }
        }
    }
}
~~~

## 总结

​	重点在于Jdbc的封装，和学习JavaSwing的使用吧。

​	其余的内容仍需要更加细化练习。



