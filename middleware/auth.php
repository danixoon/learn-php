<?php

include "utils/exceptions.php";

function handle($token = "1488")
{
  if (getallheaders()["Authorization"] !== $token) throw new MiddlewareException("Invalid token", 403);
}
