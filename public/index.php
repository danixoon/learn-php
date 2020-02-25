<?php
require_once "../resources/config.php";
require_once LIBRARY_PATH . "/template.php";
require_once LIBRARY_PATH . "/request.php";

$view = $_GET["view"] ?? "main";
$route = ROUTES_PATH . "/{$view}.php";

if (file_exists($route)) include_once $route;
else {
  http_response_code(404);
  renderViewTemplate("error", array_merge(get_store(), array("error" => create_error("Несуществующая страница", 404))));
}
