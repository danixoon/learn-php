<?php

require_once 'config.php';
require_once "utils/view.php";
require_once 'server/routing.php';

use Routing\Router;



session_start();

// function handle_route($view)
// {
//     $path = explode("/", $view);
// }
// function handle_route($view)
// {
//     $view_handler = generate_view_path($view);
//     include($view_handler);

//     return $router->handle;
// }


function handle_route($route)
{

    $path = "routes/" . $route . ".php";
    file_exists($path);
    include_once($path);

    return $handler->handle();
}


$view = $_GET["view"];

$router = new Router();

$router->use("", handle_route("main"));
$router->use("", handle_route("404"));

$router->handle($view ? $view : "");

// include($view_handler);





// if ($view == '')
//     $view = "main";
// else if (!file_exists(generate_view_path($view)))
//     $view = "404";


// generate_view($view);
