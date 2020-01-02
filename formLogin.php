<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body class="bg-secondary">
<?php require_once "header.php"; ?>

<div id ="container" class="w-50 p-2 border-0 mx-auto text-center mt-5 bg-light" style=" max-width: 450px">
    <form method="post" action="">
        <div class="form-group ">
            <strong>ĐĂNG NHẬP</strong>
        </div>
        <div class="form-group">
            <input type="tel" class="form-control" name="phone" placeholder="Nhập số điện thoại" pattern="[0-9]{10}" required>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Nhập mật khẩu" required>
        </div>
        <div class="form-group form-check float-left">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-warning btn-lg btn-block" style="max-height:40px; font-size: medium">
                Đăng nhập
            </button>
            <a href="#" type="button" class="btn btn-secondary btn-lg btn-block "
               style="max-height:40px; font-size: medium">Quên mật khẩu</a>
        </div>
        <hr>
        <div class="form-group">
            <small>Hoặc</small>
        </div>
        <div class="form-group">
            <a href="formRegister.php" type="button" class="btn btn-success btn-lg btn-block"
               style="max-height:40px; font-size: medium"> Đăng ký</a>
        </div>
    </form>
</div>

<?php require_once "footer.php" ?>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>
</html>