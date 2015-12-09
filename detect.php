<?php

	header("Content-Type: text/javascript");
	header("Cache-Control: no-cache, no-store, must-revalidate, max-age=0"); 
	header("Pragma: no-cache");
	header("Expires: 0"); 

	include_once 'bootstrap.php';


	$options = array('headers' => getallheaders());
	if (isset($_REQUEST['ua'])) $options['useragent'] = $_REQUEST['ua'];
	if (isset($_REQUEST['e'])) $options['engine'] = intval($_REQUEST['e']);
	if (isset($_REQUEST['f'])) $options['features'] = intval($_REQUEST['f']);
	if (isset($_REQUEST['w'])) $options['width'] = intval($_REQUEST['w']);
	if (isset($_REQUEST['h'])) $options['height'] = intval($_REQUEST['h']);
	$detected = new WhichBrowser\Parser($options);


	$template = file_get_contents(__DIR__ . '/templates/detect.js');
	echo str_replace('/* $detected->toJavaScript() */', $detected->toJavaScript(), $template);
	
