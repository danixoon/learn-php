<?php


function handle($token = "1488")
{
  if (getallheaders()["Authorization"] !== $token) throw new Exception("Invalid token");
}
