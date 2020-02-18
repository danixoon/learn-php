<?php
require_once "./resources/config.php";
require_once LIBRARY_PATH . "/template.php";

$view = $_GET["view"];
// if (!isset($view)) $view = "main";
renderTemplate($view . ".php", array("view" => $view));
