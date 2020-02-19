<?php

$config = array(
  "db" => array(
    "database" => array(
      "dbname" => "database1",
      "username" => "dbUser",
      "password" => "pa$$",
      "host" => "localhost"
    ),
  ),
  "urls" => array(
    "baseUrl" => "http://localhost"
  ),
  "paths" => array(
    "resources" => "resources",
    "images" => array(
      "content" => $_SERVER["DOCUMENT_ROOT"] . "public/img/content",
      "layout" => $_SERVER["DOCUMENT_ROOT"] . "public/img/layout"
    )
  )
);


defined("LIBRARY_PATH")
  or define("LIBRARY_PATH", realpath(dirname(__FILE__) . '/library'));

defined("API_PATH")
  or define("API_PATH", realpath(dirname(__FILE__) . '/api'));

defined("TEMPLATES_PATH")
  or define("TEMPLATES_PATH", realpath(dirname(__FILE__) . '/templates'));

defined("VIEWS_PATH")
  or define("VIEWS_PATH", realpath(dirname(__FILE__) . '/views'));

defined('PRODUCTION')
  or define("PRODUCTION", false);

   ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); 