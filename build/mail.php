<?php
/**
 * Sends mail
 *
 * @category Script
 * @package  Default
 * @author   Hector <hpizarro@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @link     http://hpizarro.biz
 */
require dirname(__DIR__) . '/vendor/autoload.php';

header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$name = trim($_REQUEST["name"]);
$subject = "Mail from Hector site - " . $name;
$to = "hpizarro@gmail.com";

$email = new \SendGrid\Mail\Mail();
$email->setFrom($_REQUEST["email"], $name);
$email->setSubject($subject);
$email->addTo($to, "Hector Pizarro");
$email->addContent("text/plain", $_REQUEST["message"]);
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}
