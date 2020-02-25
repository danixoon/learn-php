<?php
require_once realpath(dirname(__FILE__) . "/../../config.php");
require_once LIBRARY_PATH . "/request.php";
require_once LIBRARY_PATH . "/middleware/auth.php";


handle_request("POST", $auth_middleware,  function ($next) use ($mysqli) {
  header("Content-Type: application/json");

  $username = $_REQUEST["username"] ?? null;
  $password = $_REQUEST["password"] ?? null;

  $password_hash = password_hash($password, PASSWORD_BCRYPT);
  $query = "INSERT INTO Users VALUES (NULL, \"{$username}\", \"{$password_hash}\");";
  $result = $mysqli->query($query);
  if (!$result) {
    $next(create_error("invalid query"));
  } else {
    http_response_code(200);
    echo json_encode(array("id" => $mysqli->insert_id));
  }

  // $username =  $_REQUEST["username"] ?? null;
  // $password = $_REQUEST["password"] ?? null;

  // if ($username === "dane4ka" && $password === "123") {
  //   http_response_code(200);
  //   echo json_encode(array("status" => "access_granted"));
  // } else {
  //   http_response_code(403);
  //   echo json_encode(array("status" => "access_denied"));
  // }
});


handle_request("GET", $auth_middleware,  function () use ($mysqli) {

  echo $mysqli->query("SELECT * FROM owobase");

  http_response_code(200);
  echo json_encode(array("username" => $_SESSION["id"]));

  // $username =  $_REQUEST["username"] ?? null;
  // $password = $_REQUEST["password"] ?? null;

  // if ($username === "dane4ka" && $password === "123") {
  //   http_response_code(200);
  //   echo json_encode(array("status" => "access_granted"));
  // } else {
  //   http_response_code(403);
  //   echo json_encode(array("status" => "access_denied"));
  // }
});
