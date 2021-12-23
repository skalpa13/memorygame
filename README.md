# memorygame 
ranger les fichiers js dans un dossier js 

connexion à la base de donnée : <br> 
nom de la base : memorygame <br>
créer une table score avec un seul champ  nommé time de type int: <br>
CREATE TABLE IF NOT EXISTS score (
  time int NOT NULL
) 
l'application permettra d'insérer les temps
la communication avec la base de données est possible grace au langage php qui fonctionne coté serveur , 
en local host il vous faut installer ce serveur type wamp 
et  le démarrer http://localhost:8080/ 
au niveau des outils: <br>
- phpmyadmin permet de créer la base et la table <br>
- ajouter un virtual host vus permet de lier votre projet sur c: avec le www de wamp

