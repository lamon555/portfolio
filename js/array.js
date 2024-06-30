const num1 =[ 2, 4, 6, 8, 10 ]
const num2 = num1.map( justfunction)

document.getElementById("yo").innerHTML = num2 
 
function justfunction (value){
    return value*5
}
