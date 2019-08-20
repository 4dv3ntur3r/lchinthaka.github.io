<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Portfolio Site Food Delivery " />
    <meta name="keywords" content="Portfolio, Lasantha Chinthaka, Lasantha, Chinthaka, Work, Hotel Site, HTML5, CSS3, Responsive" />

	<title>Good Food Eat</title>
	<link rel="stylesheet" type="text/css" href="./vendors/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="./vendors/css/grid.css">
	<link rel="stylesheet" type="text/css" href="./vendors/css/ionicons.min.css">
	<link rel="stylesheet" type="text/css" href="./vendors/css/animate.css">
	<link rel="stylesheet" type="text/css" href="./resourses/css/style.css">
	<link rel="stylesheet" type="text/css" href="./resourses/css/queries.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

</head>
<body>

	<?php include './components/header.php' ?>
	<?php include './components/features.php' ?>
	<?php include './components/meals.php' ?>
	<?php include './components/steps.php' ?>
	<?php include './components/cities.php' ?>
	<?php include './components/plans.php' ?>
	<?php include './components/testamonials.php' ?>
	<?php include './components/contact.php' ?>
	<?php include './components/footer.php' ?>

	<!--<div class="triangle btn-top" onclick="topFunction()"></div>-->

	<a href="#header-main" id="btn-top" class="triangle" title="Go to top"></a>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="./vendors/js/jquery.waypoints.min.js"></script>
	<script src="./resourses/js/script.js"></script>

	<script>
		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		    document.getElementById("btn-top").style.display = "block";
		  } else {
		    document.getElementById("btn-top").style.display = "none";
		  }
		}
	</script>

	
</body>
</html>

