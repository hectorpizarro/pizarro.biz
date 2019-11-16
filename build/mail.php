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

use Nette\Mail\Message;
use Nette\Mail\SendmailMailer;

// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$to = "hpizarro@gmail.com";
$name = htmlentities(trim($_REQUEST["name"]));
$subject = "Mail from Hector site - " . $name;
$from = <<<EOT
{$_REQUEST["name"]} <{$_REQUEST["email"]}>
EOT;
$message = htmlentities(trim($_REQUEST["message"]));

$mail = new Message;
$mail->setFrom($from)
    ->addTo($to)
    ->setSubject($subject)
    ->setBody($message);
$mailer = new SendmailMailer;
$mailer->send($mail);
