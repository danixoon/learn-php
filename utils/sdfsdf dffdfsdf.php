<?php

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

    if (isset($handlers)) {
      foreach ($handlers as $handler) {
        if (!isset($handler)) continue;
        if (is_callable($handler)) {
          $handler();
        } else {
          $handler->handle($handled_path);
        }
      }
    }
  }
}
