<?php
// Проверочка на GET метод
if ($_SERVER['REQUEST_METHOD'] !== 'GET') die();

header('Content-Type: application/json');

$response = array('before' => $OWO);
$OWO = $_GET['value'];
$response['after'] = $OWO;

echo json_encode($response);
