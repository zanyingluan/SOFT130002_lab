<html lang="zh">
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)

//设置时区
date_default_timezone_set("Asia/Shanghai");
$d = date("l , F dS , Y H:i:s ");
echo "This page was generated: " . $d . "<hr/>";


$remaining = 365 + date("L") - date("z") ;
echo "There are ". $remaining . " days left in the year";

echo "<br>"; //notice we must echo tags in php.

?>
</body>
</html>