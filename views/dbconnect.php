<?php 

require_once realpath(__DIR__ . "/../vendor/autoload.php");
use Dotenv\Dotenv;

// Load .env
$dotenv = Dotenv::createImmutable(__DIR__ . "/../");
$dotenv->load();

// DB credentials from .env
$username = $_ENV["DB_USER"];
$password = $_ENV["DB_PASSWORD"];
$host = $_ENV["DB_HOST"];
$database = $_ENV["DB_NAME"];
$charset = "utf8mb4";

$dsn = "mysql:host=$host;dbname=$database;charset=$charset";


// Connection to db for contact form
try {
    $db = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (Exception $e) {
    echo "Database connection failed<br>  dbvalidate.php:26 - dbconnect.php:27";
    echo $e->getMessage();
    exit;
}

// Connection to db for news section
try {
    $news = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (Exception $e) {
    echo "Database connection failed<br>  dbvalidate.php:26 - dbconnect.php:39";
    echo $e->getMessage();
    exit;
}

//validate form before storing in db
function validateForm($data) {
    $errors = [];

    // Collect and sanitize
    $name     = trim($data['name'] ?? '');
    $company  = trim($data['company'] ?? '');
    $email    = trim($data['email'] ?? '');
    $phone    = trim($data['phone'] ?? '');
    $message  = trim($data['message'] ?? '');
    $marketing = isset($data['marketing']) ? 1 : 0;

    // Validation rules
    if ($name === '') {
        $errors['name'] = "Your name is required.";
    }

    if ($email === '') {
        $errors['email'] = "Your email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Please enter a valid email address.";
    }

    if ($phone === '') {
        $errors['phone'] = "Your telephone number is required.";
    } elseif (!preg_match('/^\+?\d(?:\d|\s){6,15}$/', $phone)) {
        $errors['phone'] = "Please enter a valid telephone number.";
    }

    if ($message === '') {
        $errors['message'] = "Message is required.";
    }

    // Return everything together
    return [
        'valid'     => empty($errors),
        'errors'    => $errors,
        'sanitized' => [
            'name'     => $name,
            'company'  => $company,
            'email'    => $email,
            'phone'    => $phone,
            'message'  => $message,
            'marketing'=> $marketing,
        ]
    ];
}

// Store contact form response in db
function storeContactForm($name, $company, $email, $phone, $message, $marketing) {
    global $db;

    try {
        $sql = $db->prepare("
            INSERT INTO contactform (name, companyname, email, phone, message, marketing) 
            VALUES (:name, :company, :email, :phone, :message, :marketing)
        ");

        $sql->execute([
            ':name'      => $name,
            ':company'   => $company,
            ':email'     => $email,
            ':phone'     => $phone,
            ':message'   => $message,
            ':marketing' => $marketing
        ]);

        return true; // success
    } catch (PDOException $e) {
        error_log("DB insert failed: " . $e->getMessage()); // Log error for debugging
        return false; // failure
    }
}

function getNews() {
    global $news;
    $result = $news->query("SELECT * FROM news ORDER BY date DESC LIMIT 3");
    $news_array = $result->fetchAll(PDO::FETCH_ASSOC);
    return $news_array;
}