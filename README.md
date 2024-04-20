# Documentation du Projet d'Exécution de Code

### Serveur : Express.js

- Bibliothèque Utilisée : Express.js
- Rôle : Créer un serveur web simple pour héberger l'interface utilisateur du projet.
- Configuration :
    - Port : 3001, choisi pour éviter les conflits avec d'autres services couramment utilisés.
    - Dossier Statique : Les fichiers statiques sont servis depuis `client/public`, ce qui permet d'accéder aux ressources frontales comme HTML, CSS, et JavaScript.
- Commande de Démarrage : Le serveur démarre et écoute sur le port configuré, affichant un message dans la console pour indiquer qu'il fonctionne correctement.

### Client et Worker : CodeMirror

- Bibliothèque Utilisée : CodeMirror
- Rôle : Fournir un éditeur de texte enrichi intégré dans le navigateur pour écrire et tester du code JavaScript.
- Fonctionnalités :
    - Numérotation des lignes : Activée pour faciliter la lecture et le débogage du code.
    - Mode : JavaScript, pour la coloration syntaxique adaptée au langage.
    - Thème : Thème par défaut de CodeMirror pour une présentation claire.
- Interactivité : Le bouton 'Exécuter le code' permet d'évaluer le code écrit dans l'éditeur et d'afficher les résultats ou erreurs dans un élément dédié.

### Dépendances et Environnement de Développement

- Parcel : Utilisé comme empaqueteur/bundler pour les applications client, simplifiant la compilation et la préparation des fichiers pour la production.
- TypeScript : Adopté pour le développement, offrant des avantages en termes de typage statique pour réduire les erreurs à la compilation.


### Configuration Typescript client et serveur

1. Ciblage d'Environnements Différents :
    - Client : Le code du client s'exécute dans un navigateur. Il nécessite donc une configuration qui prend en compte la compatibilité avec différents navigateurs et la gestion des modules ECMAScript.
    - Serveur : Le code du serveur s'exécute dans un environnement Node.js. Il utilise des modules CommonJS et peut exploiter les fonctionnalités ES plus récentes que celles généralement supportées par les navigateurs sans transpilation.

### Configuration du `package.json`

- Scripts :
    - `build:client` et `build:server` pour la compilation TypeScript des parties client et serveur.
    - `start` et `build` pour démarrer le serveur de développement et préparer l'application pour la production via Parcel.
- Dépendances :
    - Express et CodeMirror : Comme serveur web et éditeur de code.
    - Dépendances de développement : Parcel pour l'empaquetage, TypeScript pour le développement, et les définitions de types pour assurer une intégration typée.

### Justification des Choix

- Express.js : Rapidité de mise en place et large adoption, facilitant le déploiement et la maintenance.
- CodeMirror : Offre une solution robuste et largement utilisée pour l'édition de code dans le navigateur, avec support étendu pour divers langages et options de personnalisation.
- Parcel : C’est est un outil utilisé pour assembler les différentes parties d'un site web, en un format prêt à être publié sur Internet, il fonctionne bien sans avoir besoin de le configurer beaucoup. Pendant que vous modifiez votre code, Parcel peut automatiquement mettre à jour ce que vous voyez dans le navigateur sans avoir à rafraîchir la page.
