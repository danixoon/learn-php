<?php
require_once realpath(dirname(__FILE__) . "/../config.php");

function handle_request(string $method, callable $callback)
{
  if ($_SERVER['REQUEST_METHOD'] === $method) {
    $callback();
  }
}
