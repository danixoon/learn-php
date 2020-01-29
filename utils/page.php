<?php

function generate_page_path($page)
{
  return "pages/" . $page . ".php";
}

function generate_page($page)
{
  ob_start();
  $path = generate_page_path($page);

?>

  <html lang="ru">

  <head>
    <?php include 'includes/head-content.php' ?>
  </head>

  <body>
    <main>
      <?php include($path) ?>

    </main>
    <?php include "includes/footer.php" ?>
  </body>

  </html>

<?php
}
?>