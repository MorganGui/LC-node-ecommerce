# node ecommerce api
```
Réaliser un mini site e-commerce :
Affichage des produits sur la page d'accueil
Possibilité d'ajouter des produits à un panier
Affichage d'une page de détail article
Affichage du Panier
Possibilité de valider un panier si utilisateur connecté
Possibilité de s'inscrire ou de se connecter
Possibilité de modifier ou supprimer son compte utilisateur (adresse, mot de passe)
Possibilité pour un utilisateur de voir son historique de commandes
Si connecté en admin possibilité d'afficher une dashboard
Sur la dashboard possibilité d'ajouter/modifier/supprimer un produit
Sur la dashboard possibilité d'afficher l'ensemble des commandes passées et de les trier/filtrer par statut
Possibilité sur la dashboard de modifier le statut d'une commande

Rappel des rôles :
Visiteur simple : affichage des articles et des catégories
Utilisateur connecté : ajout de commande et suivi des commandes passées
Administrateur : ajout, modification, suppression de produits, ajout, modification, suppression de catégories, modification du statut des commandes (validé, payé, livré, annulé)

Rappel des statuts :
Validé (lorsqu'un utilisateur valide sa commande)
Payé (modifié à la main par l'admin)
Livré (modifié à la main par l'admin)
Annulé (modifié à la main par l'admin)
Grille de notation :
2 projets séparés 1 back et un front 1pt
Structure du projet back (dossier model, routeur, etc...) 2pts
Structure du dossier front (dossier component, pages, api, etc...) 2pts
gestion des routes back sécurisées : 5pts
Affichage des produits sur la page d'accueil : 1pt
Possibilité d'ajouter des produits à un panier : 1pt
Affichage d'une page de détail article : 1pt
Affichage du Panier : 1pt
Possibilité de valider un panier si utilisateur connecté : 1pt
Possibilité de s'inscrire ou de se connecter : 2pts
Possibilité de modifier ou supprimer son compte utilisateur (adresse, mot de passe) : 2pts
Possibilité pour un utilisateur de voir son historique de commandes : 1pt
Si connecté en admin possibilité d'afficher une dashboard : 1pt
Sur la dashboard possibilité d'ajouter/modifier/supprimer un produit : 1pt
Sur la dashboard possibilité d'afficher l'ensemble des commandes passées et de les trier/filtrer par statut : 2pts
Possibilité sur la dashboard de modifier le statut d'une commande : 1pt
esthétique globale de l'interface : 5pts

total sur 30pts * 4 pour note sur 100 (tout ce qui dépasse les 100 sera ramené à 100)

Modalité de rendu : lien vers repo github, gitlab ou bitbucket le dimanche 18 à 23h59 maximum
Bon courage !
```

### completed CRUD task ✓
- [x] user CRUD
  - [x] check unique mail on CU
  - [x] check user values on CU

- [x] product CRUD
  - [x] check product values on CU

- [x] order CRUD
  - [x] check order values on CU
  - [x] check if user exist

- [x] orderRow CRUD
  - [x] check orderRow values on CU
  - [x] check if order exist
  - [x] check if product exist
