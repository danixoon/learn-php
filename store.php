<?php
header("Content-Type: application/json");
$initial_state = array("username" => "vova");

echo json_encode($initial_state);
