<?php

$request = $_SERVER['REDIRECT_URL'];

switch ($request) {
    case '/' :
        require 'home/index.php';
        break;
    case '' :
        require 'home/index.php';
        break;
    case '/reel' :
        require 'reel/index.php';
        break;
    case '/contact' :
        require 'contact/index.php';
        break;
    case '/about' :
        require 'about/index.php';
        break;
    default:
        require '404/index.php';
        break;
}
?>