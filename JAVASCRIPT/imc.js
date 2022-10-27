function calcul_metric_imc(){

    let taille = document.querySelector("#taille").value
    let poids = document.querySelector("#poids").value
    let imc = (poids / (taille **2))

    /*document.getElementById("resultat").innerHTML = taille*/
    document.querySelector("#resultat").innerHTML = imc

   
}