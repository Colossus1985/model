Balises de premier niveau
Ces balises sont indispensables pour pouvoir commencer à coder une page web en HTML. Elles vont permettre d’indiquer aux différents navigateurs Web qu’il s’agit de pages en HTML et de séparer l’en-tête du corps de la page.

<html> – </html> : balise principale de toutes les pages web.
<head> – </head> : en-tête de la page
<body> – </body> : corps de la page

###################################################
Balises d’en-tête
Ces balises sont toutes situées dans l’en-tête de la page Web, c’est-à-dire entre la balise <head> et la balise </head>. Vous remarquerez que quand un contenu se situe entre deux balises html, la deuxième est quasi-identique à la première à ceci près qu’il s’agit d’une balise fermante. Une balise fermante reprend la balise d’ouverture en y ajoutant un slash (/) avant l’intitulé de la balise et après le signe inférieur (<). Comme ici avec le <head> qui est la balise d’ouverture et le </head> qui est la balise de fermeture. Certaines balises sont dites auto-fermantes (comme la balise image (img)) par exemple.

<link /> : liaison avec une feuille de style
<meta />  : métadonnées de la page web (charset, mots-clés, c’est aussi parmi ces balises que l’on retrouve la balise meta description que nous avons déjà abordé sur ce blog pour vous en présenter les intérêts en matière de référencement naturel, même si cette dernière, rappelons-le pour nos fidèles amis lecteurs du SEO, n’est pas directement interprétée par l’algorithme du moteur de recherche de Google…)
<script> – </script>: code JavaScript
<style> – </style> : code CSS
<title> – </title> : titre de la page. La fameuse balise title ! Comme indiqué à de nombreuses reprises, renseignez bien cette balise. Elle est très importante pour le référencement naturel ! Même si actuellement vous en êtes à réfléchir quant à savoir comment vous devez coder un site Web, que ce soit votre futur site personnel ou celui d’une société ou association pour laquelle vous travaillez, vous allez voir, le SEO va en théorie vite devenir un sujet qui va attirer toute votre attention.

###################################################
Balises de structuration du texte
Ces balises permettent de disposer des blocs dans la page contenant du texte, des images ou encore des menus.

<abbr> – </abbr> : abréviation
<blockquote> – </blockquote> : citation longue
<q> – </q> : citation courte
<cite> – </cite> : citation du titre d’une œuvre ou d’un événement
<sub> – </sub>  : mise en indice
<sup> – </sup> : mise en exposant
<h1> – <h6> : titre de différents niveaux
<img /> : image grâce aux attributs src (adresse de l’image) et alt (texte de remplacement)
<mark> – </mark> : mise en valeur visuelle (le texte est surligné)
<strong> – </strong> : mise en valeur forte (le texte est en gras)
<em> – </em> : mise en valeur faible (le texte est en italique)
<figure> – </figure> : figure (image, code…)
<figcaption> – </figcaption> : description de la figure
<audio> – </audio> : son
<video> – </video> : vidéo
<source> – </source> : indique un format possible pour les balises <audio> et <video>
<a>  – </a> : lien hypertexte grâce à l’attribut href.
<br /> : retour à la ligne
<p> – </p>: paragraphe
<hr /> : ligne de séparation horizontale
<address> – </adresss> : adresse de contact
<del> – </del> : texte supprimé
<ins> – </ins> : texte inséré
<dfn> – </dfn> : définition
<kbd> – </kbd> : indiquer un code que doit taper le visiteur
<progress> – </progress> : barre de progression
<time> – </time> : date ou heure
<pre> – </pre> : le texte à l’intérieur de la balise sera sous forme de code

###################################################
Balises de listes
Ces balises permettent de créer des listes (numérotées, à puces…).

<ul> – </ul>: liste à puces, non numérotée
<ol> – </ol> : liste numérotée
<li> – </li>: élément de la liste à puces
<dl> – </dl> : liste de définitions
<dt> –  </dt> : définition du terme

###################################################
Balises de tableau 
Ces balises ont pour but de créer un tableau structuré avec des lignes et des colonnes.

<table> – </table> : tableau
<caption> – </caption> : titre du tableau
<tr> – </tr>: ligne de tableau
<th> – </th> : cellule d’en-tête
<td> – </td> : cellule
<thead> </thead> : section de l’en-tête du tableau
<tbody> – </tbody> : section du corps du tableau
<tfoot> – </tfoot> : section du pied du tableau

###################################################
Balises de formulaire
Ces balises permettent de créer des formulaires de contact par exemple.

<form> – </form> : délimite un formulaire (method : indique la méthode d’envoi du formulaire (get ou post). Si vous ne savez pas quoi utiliser, mettez post / action : la page vers laquelle le visiteur doit être redirigé lorsqu’il a validé votre formulaire. )
<fieldset> – </fieldset> : permet de regrouper plusieurs éléments d’un formulaire
<legend> – </legend> : titre d’un groupe dans un formulaire
<label> – </label> : titre d’un élément de formulaire
<input /> : champ de formulaire grâce à l’attribut type
<textarea> – </textarea> : zone de saisie multiligne grâce aux attributs rows et cols (nombre de lignes et de colonnes)
<select> – </select> : liste déroulante
<option> – </option> : élément d’une liste déroulante
<optgroup> – </optgroup> : groupe d’éléments d’une liste déroulante

###################################################
Balises sectionnantes
Ces balises nous sert à construire les éléments de base d’un site web.

<header> – </header> : en-tête
<nav> – </nav>: liens principaux de navigation
<footer> – </footer> : pied de page
<section> – </section> : section de page
<article> – </article> : article (contenu autonome)
<aside> – </aside> : informations complémentaires

###################################################
Balises génériques
Il y a deux balises génériques : l’une est inline, l’autre est block. Elles n’ont pas de sens sémantique.

<span> – </span> : balise générique de type inline
Autorise les autres éléments à venir s’asseoir à gauche et à droite.

Ne se redimensionne pas avec width et height.

Respecte les marges gauches et droites, mais pas les marges haut et bas.

################################################### 

<div> – </div> : balise générique de type block
Force un passage à la ligne.

Ne tolère pas d’élément à gauche ou à droite.

Se redimensionne avec width et height.

Respecte toutes les marges.