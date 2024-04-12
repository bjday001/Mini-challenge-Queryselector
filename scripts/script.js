/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let zoneScore = document.querySelector(".zoneScore ")
    let div = `
    <div>
        <p>"Votre score est de   ${score}  sur  ${nbMotsProposes} "</p>
    </div>
    `;
    zoneScore.innerHTML = div
    //console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}




/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    let messageGameOver = `
        <p> La partie est terminée !</p>
    `;

    zoneProposition.innerText = proposition
    if (proposition===undefined) { 
         zoneProposition.innerHTML = messageGameOver
         btnValiderMot.disabled=true
    }
}
function lancerJeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 0
    let i = 0

let btnValiderMot = document.getElementById("btnValiderMot")
let inputEcriture = document.getElementById("inputEcriture") 

afficherProposition(listeMots[i])

    btnValiderMot.addEventListener("click", () => {
if (inputEcriture.value===listeMots[i]) {
    i++
    inputEcriture.value=""
    score++
    nbMotsProposes++
}
 else {
    i++
    inputEcriture.value=""
    nbMotsProposes++
}

    afficherProposition(listeMots[i])

    afficherResultat(score, nbMotsProposes)

   
    });

}