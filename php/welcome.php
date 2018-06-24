<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>退出登录界面</title>
  </head>
  <body>
    
    <?php
    session_start ();
    if (isset ( $_SESSION ["code"] )) {//判断code存不存在，如果不存在，说明异常登录
    ?>
    <a href="exit.php">退出登录</a>
    <?php
    } else {//code不存在，调用exit.php 退出登录
    ?>
    <script type="text/javascript">
    alert("退出登录");
    window.location.href="exit.php";
    </script>
    <?php
    }
    ?>
    
  </body>
</html>