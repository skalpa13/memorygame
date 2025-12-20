
<?php

function bdd_connect() {
/*	
  
	$dsn = 'mysql:dbname=memorygame;host=localhost';
	$user = 'root';
*/	
    $dsn = 'mysql:dbname=acosparla_memorygame;host=mysql-acosparla.alwaysdata.net';
    $user = 'acosparla';
    $password = 'Skalpa@66';

	try {
    	$bdd = new PDO($dsn, $user);
    	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} 
	catch (PDOException $e) {
    	echo 'echec lors de la connexion : ' . $e->getMessage();
	}
	
	return $bdd;
	
	
	
}

?>

 

