<?php
require_once realpath(dirname(__FILE__) . "/../../config.php");

$auth_middleware = function (callable $next) {
  if (isset($_SESSION["id"])) $next();
  // if (isset($_REQUEST["token"]) && $_REQUEST["token"] === "1488") $next();
  else $next(create_error("invalid token", 403));
};
