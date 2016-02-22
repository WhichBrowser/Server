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

$parser = new WhichBrowser\Parser();
include('hooks/cache.php');

$parser->analyse($options);
include('hooks/log.php');

$template = file_get_contents(__DIR__ . '/templates/dist/bundle.js');
echo preg_replace('/\_\=[\'"][\'"].*\_\=[\'"][\'"]/s', $parser->toJavaScript(), $template);
