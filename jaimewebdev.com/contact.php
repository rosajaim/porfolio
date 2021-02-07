<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitors_phone = $_POST['phone'];
$message = $_POST['message'];

$email_form = 'jrosaleswebdev@gmail.com';
$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n".
              "User Email: $visitor_email.\n".
              "User Phone: $visitors_phone.\n".
              "User Message: $message.\n";

$to = "jrosaleswebdev@gmail.com";

$headers = "From: $email_form \r\n";
$headers .= "Replay-To: $visitor_email \r\n";

mail($to, $email_subject,$email_body, $headers);

header("Location: index.html");

?>
