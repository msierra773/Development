
var body = document.getElementById("body");




const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()


xhr.onreadystatechange = function(){
    let rawData = xhr.responseText;
  
    const data1 = JSON.parse(rawData)
   let pokemonArray = data1.objects["0"].pokemon
    loopPokes(pokemonArray);
}


function loopPokes(param){
    for( let i = 0 ; i < param.length; i++){
        let pokemonName = param[i].name;
        let span = document.createElement("span")
        span.textContent = pokemonName + " /"
        body.appendChild(span);




    }

}