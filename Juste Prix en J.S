import * as random from 'random';
import * as time from 'time';
var nbErreur, nbHasard, rep, repTest, t1, t2, valeurMax, valeurMaxNb, valeurMin;
console.log("*" * 100);
console.log(" " * 30, "BIENVENUE SUR LE JEU DU JUSTE PRIX !");
console.log("*" * 100);
console.log("Pour jouer c'est tr\u00e8s simple , il vous suffit de donner la valeur maximal et ensuite de trouver le nombre qui se trouve entre 1 et votre valeur maximal .");
console.log("A la fin s'affiche la quantit\u00e9 de nombre que vous avez tap\u00e9 ET le temp que vous avez mis . Bon courage et amusez vous bien !!!");
valeurMin = 1;

while (true) {
  console.log();
  valeurMax = input("Quelle sera la valeur maximal ? : ");
  valeurMaxNb = valeurMax.isdigit();

  if (valeurMaxNb === false) {
    console.log("vous devez entrer un nombre !");
  } else {
    if (valeurMaxNb === true) {
      break;
    }
  }
}

valeurMax = Number.parseInt(valeurMax);
nbHasard = random.randint(valeurMin, valeurMax);
rep = 0;
nbErreur = [];
t1 = time.time();

while (rep !== nbHasard) {
  console.log("");
  rep = input("quelle est votre choix ?: ");
  repTest = rep.isdigit();

  if (repTest === false) {
    console.log("vous devez entrer un nombre !");
  } else {
    if (repTest === true) {
      rep = Number.parseInt(rep);
      nbErreur.append(rep);
      console.log("");

      if (rep < nbHasard) {
        console.log(" " * 25, "+");
        console.log();
      }

      if (rep > nbHasard) {
        console.log(" " * 25, "-");
        console.log();
      }
    }
  }
}

t2 = time.time() - t1;
t2 = Number.parseInt(t2);
console.log("bravo vous avez trouver la bonne r\u00e9ponse !");
console.log("vous avez trouv\u00e9 la r\u00e9ponse au bout de {0} essais et au bout de {1} secondes.".format(nbErreur.length, t2));
