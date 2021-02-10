 <?php
$userName = $_POST['name'];
$userEmail = $_POST['email'];
$userPhone = $_POST['phone'];
$message = $_POST['message'];

$to = "jrosaleswebdev@gmail.com";
$body = "";

$body .= "Form: ". $userName. "\r\n";
$body .= "Form: ". $userEmail. "\r\n";
$body .= "Form: ". $userPhone. "\r\n";
$body .= "Form: ". $message. "\r\n";

$email_subject = "New Form Submission";


mail($to, $email_subject,$body);

?> 
