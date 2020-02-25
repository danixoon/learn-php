<?php
require_once realpath(dirname(__FILE__) . "/../config.php");

function handle_error($error)
{
  if (!isset($error["code"])) $error["code"] = 400;

  http_response_code($error["code"]);
  unset($error["code"]);

  $response = json_encode($error);
  echo $response;
}

function handle_request(string $method, callable ...$callbacks)
{
  if ($_SERVER['REQUEST_METHOD'] === $method) {
    $proceed_callback = function (int $id = 0) use (&$proceed_callback, $callbacks) {
      if ($id >= count($callbacks)) return;

      $cb = $callbacks[$id];
      $cb(function ($error = null) use ($id, $proceed_callback) {
        if (isset($error)) handle_error($error);
        else return $proceed_callback($id + 1);
      });
    };
    $proceed_callback();
  }
}

function create_error(string $message = "error", int $code = 400, array $payload = null)
{
  $error = array("message" => $message, "code" => $code);
  if (isset($payload)) $error["error"] = $payload;

  return $error;
}
