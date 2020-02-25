<?php
require_once realpath(dirname(__FILE__) . "/../config.php");
require_once LIBRARY_PATH . "/request.php";
require_once LIBRARY_PATH . "/template.php";
require_once LIBRARY_PATH . "/middleware/auth.php";

handle_request("GET",  function () {
    renderViewTemplate("auth", get_store());
});
