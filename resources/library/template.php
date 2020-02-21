<?php

require_once realpath(dirname(__FILE__) . "/../config.php");
require_once LIBRARY_PATH . "/store.php";

function renderViewTemplate($contentFile, $variables = array())
{
  $viewPath = VIEWS_PATH . "/" . $contentFile;
  if (!file_exists($viewPath)) $viewPath = VIEWS_PATH . "/error.php";

  if (count($variables) > 0) {
    foreach ($variables as $key => $value) {
      if (strlen($key) > 0) {
        ${$key} = $value;
      }
    }
  }
  $store = get_store();
?>


  <html lang="ru">

  <head data-store='<?php echo $store ?>'>
    <?php require_once(CONTENT_PATH . "/head.php"); ?>
  </head>

  <body>
    <div id="page-info"></div>
    <header id="page-header"></header>
    <div id="page-view">
      <?php require_once($viewPath); ?>
    </div>
    <footer id="page-footer"></footer>
  </body>

  </html>
<?php
}

// function renderTemplate($contentFile, $variables = array())
// {
//   
//   echo `<html lang="ru">\n`
//     . "<head data-store='{$store}'>";

//   

//   echo `<head/>`;

//   require_once(TEMPLATES_PATH . "/header.php");

//   echo "<div id='page__content'>\n";

//   if (file_exists($contentFileFullPath)) {
//     require_once($contentFileFullPath);
//   } else {
//     require_once(TEMPLATES_PATH . "/error.php");
//   }

//   echo "</div>\n";

//   require_once(TEMPLATES_PATH . "/footer.php");
//   echo `<html/>`;
// }
