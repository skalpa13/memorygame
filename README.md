# memorygame 
Vous pouvez tester l'application en ligne sur: https://acosparla.alwaysdata.net/memoryGame/ <br>
Sinon pour un déploiement en local ou sur votre propre serveur: <br>
- Ranger les fichiers .js dans un dossier js <br>
- Créer une base de données
  nom de la base : memorygame <br>
- Créer une table score avec un seul champ  nommé time de type int: 
   CREATE TABLE IF NOT EXISTS score (
    time int NOT NULL
  ) <br>
Cela permettra à l'application d'insérer les temps et des lire de facon asynchrone <br>
La communication avec la base de données est possible grace au langage php qui fonctionne coté serveur. <br> 
Outils: 
En local il vous faut installer un serveur apache comme Wamp et  le démarrer http://localhost:8080/ <br>
Wamp fournit <br>
- phpmyadmin pour créer la base et la table    <br>
- ajouter un virtual host permet de lier l'emplacement de votre projet avec le www de Wamp (côté serveur)
- conseil tester les requêtes S.Q.L select, insert directement dans la console S.Q.L de Wamp avant de les insérer dans votre programme  

