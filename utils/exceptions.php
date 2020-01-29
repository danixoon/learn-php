<?php class MiddlewareException extends Exception
{

  public function __construct($message = "", $code = 500, Exception $previous = null)
  {
    parent::__construct($message, $code, $previous);
  }
  public function getJson()
  {
    $error = array("message" => $this->getMessage(), "stack" => $this->getTraceAsString());
    return json_encode($error);
  }
}
