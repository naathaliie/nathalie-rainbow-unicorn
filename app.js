//Skapa en array med strängarna: apa, orangutang, gorilla, geta och giraff
var myArray = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(myArray);
//Skapa ett objekt med tre egenskaper. En sträng, en siffra och en boolean.
var myObj = {
    name: "Nathalie",
    age: 33,
    member: true
};
console.log(myObj);
/* Skriv en funktion som tar emot en sträng och returnerar en sträng.
Om funktionen tar emot strängen “X” ska den returnera strängen “hej X”.
Funktionen ska kunna ta emot vilken sträng som helst och skicka tillbaka en sträng med hej först. */
function myFunction(myString) {
    var greeting = "Hej";
    return (greeting + " " + myString);
}
;
var aString = "X";
var anotherString = "N";
console.log(myFunction(anotherString));
/* Loopa igenom arrayen av strängar och kör funktionen
på varje sträng och skriv ut till konsollen det du får
från arrayen.*/
//Test med en for-loop
for (var i = 0; i < myArray.length; i++) {
    var element = myArray[i];
    var result = myFunction(element);
    console.log(result);
}
//Test med en foreach-loop
myArray.forEach(function (animal) {
    var newGreeting = "Roligt att se dig";
    var result = newGreeting + " " + myFunction(animal);
    console.log(result);
});
