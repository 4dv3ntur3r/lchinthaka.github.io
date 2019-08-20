<?php 
	//Get form fields and remove all the html tags 
	$name = strip_tags(trim($_POST["hire-name"]));
	$name = str_replace(array("\r", "\n"), array(" ", " "), $name);
	$email = filter_var(trim($_POST["hire-email"]), FILTER_SANITIZE_EMAIL);
	$message = trim($_POST["hire-specify"]);
	$hireitems = trim($_POST["hire-items[]"]);

	//Check data
	if(empty($name) || !filter_var($email, FILTER_SANITIZE_EMAIL)) {
		header("Location: http://localhost/Bio/Bio/index.php?hirecode=0");
		exit;
	}

	//Set the receipient email addres
	$recipient = "bsheep567@gmail.com";

	//set the email subject
	$subject = "Message from $name";

	$hireItems = "";

	foreach ($hireitems as $item) {
		$hireItems .= $item;
	}

	//Build the email content
	$email_content = "Name : $name\n";
	$email_content .= "Email: $email\n";
	$email_content .= "Hire Selected Elements : $hireItems\n";
	$email_content .= "Message: $message\n";


	//Build the email header
	$email_header = "From : $name <$email>";

	//Send the email
	mail($recipient, $subject, $email_content, $email_header);

	//Redirect to our web page
	header("Location: http://localhost/Bio/Bio/index.php?hirecode=1");

?>