<?php
require ('connexion.php');
$pdo = bdd_connect();
$pdo->beginTransaction();
$time = $_REQUEST["q"];

if($time !="")
try
{
    $sql = "INSERT INTO score (time) VALUES (:time)";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(':time',$time);
    $statement->execute();
}
catch (Exception $e)
{
   $pdo->rollBack();
    echo "Error: ".$e->getMessage();
}

$sql = "SELECT time FROM score order by time limit 5";
$sth = $pdo->query($sql);

while($row = $sth->fetch(PDO::FETCH_ASSOC)) {
    echo $row['time']. '<br/>';
}
$sth->closeCursor();



?>
