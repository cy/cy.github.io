<?php 
$toemail = 'cy@christine-yu.com';
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$comments = filter_var($_POST['comments'], FILTER_SANITIZE_STRING);

if($name == "")
	$errors .= '<li>Name is blank</li>';
if($email == "")
	$errors .= '<li>Email is blank</li>';
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL))
	$errors .= '<li>Invalid email</li>';

$message .= 'From: ' . $name . "\r\n";
$message .= 'Email: ' . $email . "\r\n";
$message .=  $comments;

$message .= "\r\n\r\n";
$message .= 'IP: '.$_SERVER['REMOTE_ADDR']."\r\n";
$message .= 'Browser: '.$_SERVER['HTTP_USER_AGENT']."\r\n";

if(!$errors) {
	if(mail($toemail, 'christine-yu.com contact form', $message, 'From: ' . $email)) {
		echo 'Your email was sent successfully.';
	} else {
		echo 'There was a problem sending your email.';
	}
}
else 
	echo 'Sorry! Message could not be sent because:<ul>' . $errors . '</ul>';
?>
