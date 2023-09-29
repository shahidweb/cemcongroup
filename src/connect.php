<?php
// used to connect to the database
$host = "localhost";
$db_name = "u576313900_cemcon";
$username = "u576313900_cmcnTest";
$password = "Cemconsk@23";

try {
  $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}

// show error
catch (PDOException $exception) {
  echo "Connection error: " . $exception->getMessage();
}
?>