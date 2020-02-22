<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$linkedin = $_POST['Linkedin'];
	$message = $_POST['user_message'];

	$email_from	= 'shaunybrady@gmail.com';
	$email_subject = "RECRUITER SUBMISSION - FROM ROSHUN WEBSITE!_!";
	$email_body = "Recruiter: $name \n"."User Email: $visitor_email \n""Linkedin: $linkedin \n.""Message: $message \n";

	$to = "shaunybrady@gmail.com";
	$headers = "From: $email_from \r\n";
	$headers .= "Repl-To: $visitor_email \r\n":

	mail($to, $email_subject, $email_body, $headers);

	header("Location: Full_Site.html");

?>