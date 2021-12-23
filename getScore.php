<?php
require ('connexion.php');
$pdo = bdd_connect();

$sql = "SELECT time FROM score order by time limit 5";

$sth = $pdo->query($sql);

while($row = $sth->fetch(PDO::FETCH_ASSOC)) {
    echo $row['time']. '<br/>';
}
$sth->closeCursor();



?>