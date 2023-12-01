//Obtener nombre del jugador
player_name = localStorage.getItem("player_name");
// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);
// contar el número de intentos
var guess = 1;
// función para el número adivinado por el usuario     
function submit(){
    //numero adivinado por el usuario
    var x = document.getElementById("guessField").value;
    // condicional para el intento correcto
    if(x == y){
        alert("Felicitaciones " +player_name+ " lo adivinaste bien!! " +guess+ " intento!!");
        guess = 1;
    } //si el número adivinado es mayor que el número actual
    else if(x > y){
        guess++;
        alert("Ups lo siento intenta con un número mas pequeño!!");
    } //si el número adivinado es menor que el número actual
    else{
        guess++;
        alert("Ups lo siento intenta con un número mas grande!!");
    }
}
function playAgain(){
    y =  Math.floor(Math.random() * 10 + 1);
}

