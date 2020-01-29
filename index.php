<?php

include_once 'includes/config.php';
include "utils/page.php";


$page = $_GET["page"];

if ($page == '')
    $page = "main";
else if (!file_exists(generate_page_path($page)))
    $page = "404";


generate_page($page);
