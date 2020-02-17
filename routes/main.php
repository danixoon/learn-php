<?php
require_once "server/routing.php";

require_once "utils/view.php";
require_once "utils/middleware.php";

use Routing\Router;
use Routing\Handler;

$handler = new Handler(function () {
  $router = new Router();

  $router->use("",  function (callable $next) {
    // render_view("test");
    // print_r($next);
    $next();
  });

  $router->use("", function (callable $next) {
    // $response = array("owo" => "success");
    // print_r("owo");
    // echo json_encode($response);
    echo "fuckl";
  });

  return $router;
});

// function handler()
// {

// }
