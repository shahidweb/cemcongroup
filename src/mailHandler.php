<?php
include('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "info@cemcongroup.in";
$header = 'From:' . $email . "\r\n";
$message = "$message \n";
$message .= "This is my mobile number $phone";
$sentmail = mail($to, $subject, $message, $header);
?>