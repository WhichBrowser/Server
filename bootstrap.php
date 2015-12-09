<?php
	
	// Installed by Composer as a project
	if (file_exists('vendor/autoload.php')) {
		include_once 'vendor/autoload.php';
	}

	// Installed by Composer in the vendor directory
	elseif (strpos(__FILE__, DIRECTORY_SEPARATOR . "vendor" . DIRECTORY_SEPARATOR) !== false) {
		include_once __DIR__ . '/../../autoload.php';
	}

    // Local development directory
    elseif (file_exists(__DIR__ . '/../Parser/bootstrap.php')) {
        include_once __DIR__ . '/../Parser/bootstrap.php';
    }
