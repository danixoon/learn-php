<?php
require_once realpath(dirname(__FILE__) . "/../config.php");
require_once LIBRARY_PATH . "/request.php";

handle_request("GET", function () {
  $username = $_REQUEST["username"];
  $password = $_REQUEST["password"];

  if ($username === "dane4ka" && $password === "123") {
    http_response_code(200);
    echo json_encode(array("status" => "access_granted"));
  } else {
    http_response_code(403);
    echo json_encode(array("status" => "access_denied"));
  }
});