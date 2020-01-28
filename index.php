<?php
session_start();
?>

<html>

<head>
    <script src="./index.js"></script>
    <link rel="stylesheet" href="./styles.css" />
</head>

<body>
    <form action="./handler.php" method="POST">
        <input type="username" name="username" />
        <button type="submit"> Тест </button>
    </form>
    <button onclick="Downloader.fetchCurrency"> Загрузить </button>
    <ul id="currencyTable">

    </ul>
</body>

</html>