<?php

require_once realpath(dirname(__FILE__) . "/../config.php");

function renderTemplate($contentFile, $variables = array())
{
  $contentFileFullPath = VIEWS_PATH . "/" . $contentFile;

  // making sure passed in variables are in scope of the template
  // each key in the $variables array will become a variable
  if (count($variables) > 0) {
    foreach ($variables as $key => $value) {
      if (strlen($key) > 0) {
        ${$key} = $value;
      }
    }
  }

  echo `<html lang="ru">\n`
    . `<head>`;

  require_once(TEMPLATES_PATH . "/head-content.php");

  echo `<head/>`;

  require_once(TEMPLATES_PATH . "/header.php");

  echo "<div id=\"content\">\n";

  if (file_exists($contentFileFullPath)) {
    require_once($contentFileFullPath);
  } else {
    require_once(TEMPLATES_PATH . "/error.php");
  }

  echo "</div>\n";

  require_once(TEMPLATES_PATH . "/footer.php");
  echo `<html/>`;
}
