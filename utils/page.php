<?php function generate_page($content)
{
?>

  <html lang="ru">

  <head>
    <?php include 'includes/head-content.php' ?>
  </head>

  <body>
    <main>
      <?php $content ?>
    </main>
    <?php include "includes/footer.php" ?>
  </body>

  </html>

<?php
}
?>