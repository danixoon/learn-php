<?php
require_once "./resources/config.php";
require_once LIBRARY_PATH . "/template.php";

$view = $_GET["view"];
if ($view === "") $view = "main";
else if (substr($view, 0, 3) === "api") {
  include_once API_PATH . substr($view, 3);
} else renderTemplate($view . ".php", array("view" => $view));
