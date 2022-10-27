var callBackSuccess = function(data){
    console.log("donnees api" ,data)
    //alert("Meteo temp : " +data.main.temp)
    var element=document.getElementById("zone_reponse");
    element.innerHTML="votre activite prefere est "+data.main.temp;
    //innerHtml va a l interieur du HTML recuperer un element
}

async function buttonClickGET(){
    $.ajax({
      url: "https://www.boredapi.com/api/activity",
    }).done(function( data ) {
        document.getElementById("zone_reponse").innerHTML=data.activity 
      });
}