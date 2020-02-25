<?php

require_once realpath(dirname(__FILE__) . "/../config.php");
require_once LIBRARY_PATH . "/store.php";



function renderViewTemplate($viewName, $store)
{
  $views = array(
    "auth" => "page-view__auth",
    "main" => "page-view__main",
    "error" => "page-view__error"
  );

  $viewClass = $views[$viewName] ?? null;

  if (!isset($viewClass)) $viewClass = $views["error"];
?>
  <html lang="ru">

  <head data-store='<?php echo $store ?>'>
    <?php require_once(CONTENT_PATH . "/head.php"); ?>
  </head>

  <body>
    <div id="page-info"></div>
    <header id="page-header"></header>

    <div id="<?php echo $viewClass ?>"></div>

    <footer id="page-footer"></footer>
  </body>

  </html>
<?php
}
