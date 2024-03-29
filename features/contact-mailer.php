<?php 
	//Get form fields and remove all the html tags
	$name = strip_tags(trim($_POST["contact-form-name"]));
	$name = str_replace(array("\r", "\n"), array(" ", " "), $name);
	$email = filter_var(trim($_POST["contact-form-email"]), FILTER_SANITIZE_EMAIL);
	$message = trim($_POST["contact-form-textarea"]);

	//Check data
	if(empty($name) || empty($message) || !filter_var($email, FILTER_SANITIZE_EMAIL)) {
		header("Location: http://localhost/Bio/Bio/index.php?contactcode=0");
		exit;
	}

	//Set the receipient email addres
	$recipient = "bsheep567@gmail.com";

	//set the email subject
	$subject = "Message from $name";

	//Build the email content
	$email_content = "Name : $name\n";
	$email_content .= "Email: $email\n";
	$email_content .= "Message: $message\n";

	//Build the email header
	$email_header = "From : $name <$email>";

	//Send the email
	mail($recipient, $subject, $email_content, $email_header);

	//Redirect to our web page
	header("Location: http://localhost/Bio/Bio/index.php?contactcode=1");

?>