<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


print_r("this file stores react js portfolio website form data ");

$connection = mysqli_connect("localhost", "root", "", "react_js_portfolio_website_db") or die("Connection Failed");


$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

// if(isset($_POST['name']))
// {

//     echo ("data received in php <br>");
//     echo ($name);
// }

$query = "INSERT INTO react_js_form_data(name,email,message) VALUES ('{$name}','{$email}','{$message}')";

$result = mysqli_query($connection, $query) or die("Query Failed");

mysqli_close($connection);


?>