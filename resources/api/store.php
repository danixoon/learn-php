<?php
require_once realpath(dirname(__FILE__) . "/../config.php");
require_once LIBRARY_PATH . "/request.php";

handle_request("GET", function () {
  header("Content-Type: application/json");

  $view = $_REQUEST["state"] ?? null;
  $initial_state = array();

  switch ($view) {
    case "auth": {
        $initial_state["username"] = "dane4ka";
      }
  }
  
  echo json_encode($initial_state);
});
