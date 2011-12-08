<?php
require("./blog/xml2array.php");
require("./blog/md.php");

$contents = file_get_contents('./blog/posts.xml');
$result = xml2array($contents);

$posts = $result['posts']['post'];
?>