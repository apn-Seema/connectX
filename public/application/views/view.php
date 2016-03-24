<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0">
	<title>ConnectX</title>
</head>
<body>
	<div id="app"></div>
	<script>
		<?php

			$base_url;
			if(in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'))) {
				$base_url = "http://" . $_SERVER['SERVER_NAME'] . "/connectX/public"; 
			} else {
				$base_url = "";
			}
			echo "var base_url = '" . $base_url . "'";
			
		?>
	</script>
	<script src="<?=$base_url?>/src/app.js"></script>

	<?php 
		if(!empty($_GET)) {
			$lookFor = key($_GET);

			if($base_url != '')
				$lookFor = substr($lookFor, 7);

			//echo $lookFor;
		}

	?>
</body>
</html>