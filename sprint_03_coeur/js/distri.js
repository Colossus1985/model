var list_user = [];

function add_personne() {
  //#####---Création de l'objet---#########################

  //recupération de l'input du dom
  // variable nom qui contient:
  // la valeur de l'élément, avec l'ID "input_name" qui se trouve dans le DOM (document)
  var nom = document.getElementById("input_name").value;
  //faire appel à la fonction date_time pour avoir la date
  var date = date_time();
  //création de l'objet user avec "new"
  //(valeur1 nom, valeur2 date, plus si nécesaire...)
  var user = new Person(nom, date);

  //function "CONSTRUCTEUR" pour declarer les clèfs associées à leur valeur
  //this.clèf = valeur
  function Person(nom, date) {
    //déclaration des cléfs avec leur valeurs qu'elles vont prendre
    this.nom = nom;
    this.date = date;
  }

  //#####---ajouter l'objet dans une liste---################

  //ajouter l'user dans la en fin de liste
  //prendre la liste déclaré en haut +
  //'.push' pour ajouter l'objet user +
  //(user (l'objet en question))
  list_user.push(user);

  //#####---Création des elements html---#########################

  //récupération de la table dans laquelle les éléments crées se trouveront
  var table_user = document.getElementById("table_personnes");

  //création des balises nécessaire pour agrendir le tableau de l'html.
  // la variable tr_user porte la création de la balise "tr"
  var tr_user = document.createElement("tr");
  // la variable td_user_nom porte la création de la balise "td"
  var td_user_nom = document.createElement("td");
  // la variable td_user_time porte la création d'une autre balise "td"
  var td_user_time = document.createElement("td");
  // la variable td_user_btn_passer porte la création d'une autre balise "td"
  var td_user_btn_passer = document.createElement("td");

  // la variable btn_passer porte la création d'une balise "button"
  var btn_passer = document.createElement("button");

  //#####---Création de classe pour les elements html crées---#######

  //prendre la variable et ajouter ".className" pour dire qu'on souhaite d'ajouter une class
  //de même on peut ajouter un ".id" pour un id ou ".name"
  //puis donner le nom de la class, que l'on souhaite, à la balise ciblée
  tr_user.className = "tr_demandant_base";
  td_user_nom.className = "td_nom_demandant_base";
  td_user_time.className = "td_date_demandant_base";
  td_user_btn_passer.className = "td_btn_passer_base";

  //de même pour mettre un text dans un élément on cible l'élément en question
  //"btn_passer" + ".textContent" pour dire qu'on veut ajouter un text
  // le text en question doit etre entre guillements.
  btn_passer.textContent = "Je passer mon tour";

  //#####---affichage des objets dans dans le html(browser)---##############

  //on prend la liste pour la parcourir à l'aide de la boucle for
  for (var i = 0; i < list_user.length; i++) {
    //on met le nom dans la cellule td_user_nom à l'aide de ".textContent"
    td_user_nom.textContent = list_user[i].nom;
    //on met le nom dans la cellule td_user_time à l'aide de ".textContent"
    td_user_time.textContent = list_user[i].date;

    //ajouter le "btn_passer" dans la cellule "td_user_btn_passer" à l'aide de "appendChild"
    td_user_btn_passer.appendChild(btn_passer);

    //ajouter dans la table "table_user" la ligne "tr_user" à l'aide de ".appendChild"
    table_user.appendChild(tr_user);
    //ajouter dans la table "table_user" la cellule "td_user_nom" à l'aide de ".appendChild"
    table_user.appendChild(td_user_nom);
    //ajouter dans la table "table_user" la cellule "td_user_time" à l'aide de ".appendChild"
    table_user.appendChild(td_user_time);
    //ajouter dans la table "table_user" la cellule "td_user_btn_passer" à l'aide de ".appendChild"
    table_user.appendChild(td_user_btn_passer);
  }
  //à la fin de la fonction on recupère le champs input avec l'ID "input_name"
  //et on mets une nouvelle valeur à l'aide ".value" qui est un string vide
  //pour vider le champs input
  document.getElementById("input_name").value = "";
}

function date_time() {
  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();

  var date_formate = day + " " + month + " " + year;
  return date_formate;
}
