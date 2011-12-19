<?php

$payload = json_decode(stripslashes($_POST['payload']));

$password = "a difficult password which you have to enter on the get variable ?pass on github pull hook";

if($_GET['pass'] == sha1($password)) {
	if($payload->ref === 'refs/heads/master') {

		fwrite(fopen('./logs/github.txt', 'a'), "(".date("d/m/Y")." - ".date("h:m:s").") NEW COMMIT => ".$payload->commits[0]->message."\n");
		echo shell_exec('git pull');
	} else {
		fwrite(fopen('./logs/github.txt', 'a'), "(".date("d/m/Y")." - ".date("h:m:s").") UNKNOWN BRAND => ".$payload->ref."\n");


	}

} else {
	fwrite(fopen('./logs/github.txt', 'a'), "(".date("d/m/Y")." - ".date("h:m:s").") WRONG GET KEY\n");


}
?>