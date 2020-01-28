<?php

include_once 'includes/config.php';
include "utils/page.php";

function generate_page_path($page)
{
    return "pages/" . $page . ".php";
}

$page = $_GET["page"];

if ($page == '')
    $page = "main";
else if (!file_exists(generate_page_path($page)))
    $page = "404";

echo "lol";
echo generate_page(include(generate_page_path($page)));
