<?php
include('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = "Job:Profile";
$town = $_POST['town'];
$state = $_POST['state'];
$address = $_POST['address'];
$zipcode = $_POST['zipcode'];
$message = $_POST['message'];
$ip_address = $_SERVER['REMOTE_ADDR'];
date_default_timezone_set('Asia/Kolkata');
$date_time = date("Y-m-d H:i:s");

//store in databse 
$query = "INSERT INTO career SET name=:name, surname=:surname, email=:email, phone=:phone, town=:town, state=:state, address=:address, zipcode=:zipcode, message=:message, date_time=:date_time, ip_address=:ip_address";
$stmt = $con->prepare($query);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':surname', $surname);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':phone', $phone);
$stmt->bindParam(':town', $town);
$stmt->bindParam(':state', $state);
$stmt->bindParam(':address', $address);
$stmt->bindParam(':zipcode', $zipcode);
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
$message .= " My name is $name $surname. This is my mobile number $phone. I live in $address $state $town $zipcode";
$sentmail = mail($to, $subject, $message, $header);


?>