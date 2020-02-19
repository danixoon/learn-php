<?php
require_once realpath(dirname(__FILE__) . "/../config.php");

function handle_request(string $method, callable ...$callbacks)
{
  if ($_SERVER['REQUEST_METHOD'] === $method) {
    $proceed_callback = function() use (&$proceed_callback, $callbacks) {
      if(count($callbacks) === 0) return;

      $cb = array_shift($callbacks);
      $cb($proceed_callback);       
    };
    $proceed_callback();
  }
}
