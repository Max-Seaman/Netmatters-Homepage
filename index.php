<?php

require_once realpath(__DIR__ . "/vendor/autoload.php");
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_URI"] === "/") {
    $title = "Full Service Digital Agency | Cambridgeshire &amp; Norfolk | Netmatters";

    require "views/pages/index.php";
}

if ($_SERVER["REQUEST_URI"] === "/contact") {
    $title = "Contact Us | Netmatters";
    
    require "views/pages/contact.php";
}

