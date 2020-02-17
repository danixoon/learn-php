<?php
require_once "server/routing.php";

require_once "utils/view.php";
require_once "utils/middleware.php";

use Routing\Router;
use Routing\Handler;

$handler = new Handler(function () {
  $router = new Router();

  $router->use("",  function (callable $next) {
    echo "404 error";
  });

  return $router;
});
