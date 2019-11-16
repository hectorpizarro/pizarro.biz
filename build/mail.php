<?php
$to = "hpizarro@gmail.com";
$subject = "Mail from Hector site - " . $_REQUEST["name"];
$message = $_REQUEST["message"];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'To: ' . $to;
$headers[] = 'From: ' . $_REQUEST["email"];
mail($to, $subject, $message, implode("\r\n", $headers));
