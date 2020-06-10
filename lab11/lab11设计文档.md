****#2020年Web应用基础 lab11

18300200008张明

## cookie

Cookie是储存在用户本地终端上的数据

一般来说，cookie经由服务器端发送到客户端，由浏览器保存

在每次进行http请求的时候将cookie重新发回服务器端

### 设置cookie （利用setcookie()函数

```php

  setcookie("Username", $_POST['username'], $expiryTime);

```
setcookie()有三个参数:"cookie名字" "cookie值" "过期时间"

删除cookie就相当于cookie过期失效，我们只用把时间设置为-1即可

### 使用cookie

```php
if(isset($_COOKIE['Username'])){  
      echo "Welcome ".$_COOKIE['Username'];  
   }  
```

可以用isset($_COOKIE['cookie名字'])来检测是否有某个设置好的cookie

cookie值则通过$_COOKIE['cookie名字']来进行调取


## session

session一般翻译成时域

### 启动

```php

 session_start();

```

需要先使用session_start()进行初始化，这句语句要位于最前端

```php

 $_SESSION['Username']=$_POST['username'];`

```

注册session对象

### 注销

```php

unset($_SESSION['Username']);

```

使用unset()即可注销

*$_SESSION=array()可以一次清清除所有变量

## 两者的区别

1.cookie的数据内容保存在客户端，而session保存在服务器端

2.cookie需要显示设置过期时间，手动设置-1即可删除cookie,而session默认只有24分钟的有效时间（退出浏览器后自动结束）

3.cookie仅保存字符串，而session保存对象

4.session所存储的内容多于cookie
