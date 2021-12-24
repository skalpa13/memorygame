# memorygame 
vous pouvez tester l'application en ligne sur: https://acosparla.alwaysdata.net/memorygame/ <br>
sinon pour un deploiemen en local ou sur votre propre serveur <br>
ranger les fichiers js dans un dossier js <br>

nom de la base : memorygame <br>
créer une table score avec un seul champ  nommé time de type int: <br>
CREATE TABLE IF NOT EXISTS score (
  time int NOT NULL
) <br>
l'application permettra d'insérer les temps et des lire de facon asynchrone <br>
la communication avec la base de données est possible grace au langage php qui fonctionne coté serveur <br> 
en local il vous faut installer ce serveur (exemple  wamp) 
et  le démarrer http://localhost:8080/ <br>
au niveau des outils fournis par wamp: <br>
- phpmyadmin permet de créer la base et la table conseil tester votre table dans la console sql select, insert  <br>
- ajouter un virtual host permet de lier l'emplacement de votre projet avec le www de wamp (côté serveur)

