<?php
require_once realpath(dirname(__FILE__) . "/../config.php");
require_once LIBRARY_PATH . "/request.php";
require_once LIBRARY_PATH . "/middleware/auth.php";

handle_request("GET", $auth_middleware,  function () {
  $username =  $_REQUEST["username"] ?? null;
  $password = $_REQUEST["password"] ?? null;

  if ($username === "dane4ka" && $password === "123") {
    http_response_code(200);
    echo json_encode(array("status" => "access_granted"));
  } else {
    http_response_code(403);
    echo json_encode(array("status" => "access_denied"));
  }
});
