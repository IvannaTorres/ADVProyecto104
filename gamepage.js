// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);
// contar el número de intentos
var guess = 0;
// crear para el intento correcto

// función para el número adivinado por el usuario     
function submit(){
    var x = document.getElementById("guessField").value;
    if(x == y){
        alert("Felicitaciones!!" + playername + "lo adivinaste bien" + guess + "intento");
        guess = 1;
    }
    else if(x > y){
        guess++;
        alert("Ups lo siento intenta con un número mas pequeño!!");
    }
    else{
        guess++;
        alert("Ups lo siento intenta con un número mas grande!!");
    }
}
function playAgain(){
    y =  Math.floor(Math.random() * 10 + 1);
}

