<?php
require_once "../resources/config.php";
require_once LIBRARY_PATH . "/template.php";

$view = $_GET["view"] ?? "main";
$route = ROUTES_PATH . "/{$view}.php";

if (file_exists($route)) include_once $route;
else renderViewTemplate("error", json_encode(array("error" => "404")));
