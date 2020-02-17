<?php

function generate_view_path($page)
{
  return "views/" . $page . ".php";
}

function render_view($page)
{
  ob_start();
  $path = generate_view_path($page);

?>

  <html lang="ru">

  <head>
    <?php include 'includes/contents/head.php' ?>
  </head>

  <body>
    <main>
      <?php include($path) ?>

    </main>
    <?php include "includes/components/footer.php" ?>
  </body>

  </html>

<?php
}
?>