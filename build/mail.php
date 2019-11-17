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

// use Nette\Mail\Message;
// use Nette\Mail\SendmailMailer;

// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$name = trim($_REQUEST["name"]);
$subject = "Mail from Hector site - " . $name;
$from = new SendGrid\Email($name, $_REQUEST["email"]);
$to = new SendGrid\Email(null, "hpizarro@gmail.com");
$content = new SendGrid\Content("text/plain", trim($_REQUEST["message"]));
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();
