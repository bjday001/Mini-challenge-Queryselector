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
    let zoneScore = document.querySelector(".zoneScore span")
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
function lancerJeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 0
    
    afficherResultat(score, nbMotsProposes)
}
let btnValiderMot = document.getElementById("btnValiderMot")
    btnValiderMot.addEventListener("click", () => {
        let inputEcriture = document.getElementById("inputEcriture") 

        console.log(inputEcriture.value)

        
    });

