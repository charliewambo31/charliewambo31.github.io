let cartes

function generationCartes() {
    let valeurs = ["A","2", "3", "4", "5","6", "7", "8", "9","10","J","Q","K"];
    let couleurs = ["D", "C", "H","S"];
    cartes = [];


    for (let i = 0; i < couleurs.length; i++) {
        for (let j = 0; j < valeurs.length; j++) {
            cartes.push("laboratoire_2_web/"+valeurs[j]+couleurs[i]+".png");  
       }
   }

    let corps = document.querySelector('body')
    for (let i=0 ;i<cartes.length;i++){
       let img_carte = document.createElement('img');
        img_carte.src = cartes[i];
        corps.append(img_carte);
        if (i%13==12){
            let br = document.createElement('br');
            corps.append(br);
    }
    console.log(cartes);
    }
}

generationCartes()
let imgs = document.querySelectorAll('img');

function  brassageCartes(){
    console.log('click');
    let moitieDeck = cartes.length/2;
    nouveauPaquet = [];
    cartes[0]
    for (let i = 0; i < moitieDeck; i++) {
        
        console.log(cartes[i]);
        nouveauPaquet.push(cartes[i]);
        nouveauPaquet.push(cartes[i+moitieDeck]); 
        
}
console.log(nouveauPaquet);
    for (let i = 0; i < nouveauPaquet.length; i++){
        imgs[i].src = nouveauPaquet[i]


}
cartes = nouveauPaquet;
}
document.querySelector("#Brassage").addEventListener("click", brassageCartes);

