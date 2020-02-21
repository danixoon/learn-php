<?php
require_once "../resources/config.php";
require_once LIBRARY_PATH . "/template.php";

$view = $_GET["view"] ?? "main";

if (substr($view, 0, 3) === "api") {
  header("Content-Type: application/json");
  include_once API_PATH . substr($view, 3);
} else renderViewTemplate($view . ".php", array("view" => $view));
