<?php
	$string = file_get_contents('projects.json');

	$json = json_decode($string, true);

	var_dump($json);

	//get user input

	$projName = $_GET['projName'];
	$projPage = $_GET['projPage'];
	$summary = $_GET['summary'];


	//append JSON file.
	$json.Projects.title = $projName;
	$json.Projects.pages.pageStyle = 1;
	$json.Projects.pages.Title = 'Insert Title';
	$json.Projects.pages.Caption = $summary;
	$json.Projects.pages.Img = 'media/img.jpg';


	//return final value
	json_encode($json);
?>