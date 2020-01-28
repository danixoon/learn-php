<?php

function use_middleware(string $name, ...$args)
{
  try {
    include("middleware/" . $name . ".php");
    handle(...$args);
  } catch (Exception $e) {
    echo $e->getMessage();
    die();
  }
}
