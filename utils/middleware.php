<?php

function use_middleware(string $name, ...$args)
{
  try {
    include("middleware/" . $name . ".php");
    handle(...$args);
  } catch (MiddlewareException $e) {

    $code = $e->getCode();

    header('Content-Type: application/json');
    http_response_code($code);
    ob_clean();
    exit($e->getJson());
  }
}
