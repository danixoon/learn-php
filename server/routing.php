<?php

namespace Routing;

class Handler
{
  protected $handler;
  public function __construct(callable $handler)
  {
    $this->handler = $handler;
  }
  public function handle()
  {
    $h = $this->handler;
    return $h();
  }
}

class Router
{
  protected $handlers = array();
  public function use(string $path, ...$functions)
  {
    $handlers = $this->handlers[$path];
    foreach ($functions as $function) {
      if (isset($handlers)) array_push($handlers, $function);
      else {
        $handlers = array($function);
        $this->handlers[$path] = $handlers;
      }
    }
  }
  public function handle(string $path)
  {
    $path_array = explode("/", $path);
    $path_match = array_shift($path_array);
    $handled_path = implode("/", $path_array);
    $handlers = $this->handlers[$path_match];

    if (!isset($handlers)) return;

    $i = 0;
    $iterate = function () use (&$iterate, &$i, $handlers, $handled_path) {
      // echo ("iter: " . $i);
      // print_r($handlers);
      $handler = $handlers[$i++];
      if (!isset($handler)) return;
      if (is_callable($handler)) {
        $handler($iterate);
      } else {
        $handler->handle($handled_path);
      }
    };
    $iterate();
  }
}
