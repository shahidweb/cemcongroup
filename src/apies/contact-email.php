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
$ip_address = $_SERVER['REMOTE_ADDR'];
date_default_timezone_set('Asia/Kolkata');
$date_time = date("Y-m-d H:i:s");

//store in databse 
$query = "INSERT INTO contact SET name=:name, email=:email, subject=:subject, phone=:phone, message=:message, date_time=:date_time, ip_address=:ip_address";
$stmt = $con->prepare($query);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':subject', $subject);
$stmt->bindParam(':phone', $phone);
$stmt->bindParam(':message', $message);
$stmt->bindParam(':date_time', $date_time);
$stmt->bindParam(':ip_address', $ip_address);

if ($stmt->execute()) {
    echo json_encode(array('result' => 'success'));
} else {
    echo json_encode(array('result' => 'fail'));
}

//email send 
$to = "info@cemcongroup.in";
$header = 'From:' . $email . "\r\n";
$message = "$message \n";
$message .= "My name is $name, This is my mobile number $phone";
$sentmail = mail($to, $subject, $message, $header);


?>