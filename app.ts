//Skapa en array med strängarna: apa, orangutang, gorilla, geta och giraff

const myArray: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];

console.log(myArray);



//Skapa ett objekt med tre egenskaper. En sträng, en siffra och en boolean.

const myObj: {name: string, age: number, member: boolean} ={
    name: "Nathalie",
    age: 33,
    member: true
};

console.log(myObj);


/* Skriv en funktion som tar emot en sträng och returnerar en sträng. 
Om funktionen tar emot strängen “X” ska den returnera strängen “hej X”. 
Funktionen ska kunna ta emot vilken sträng som helst och skicka tillbaka en sträng med hej först. */

function myFunction(myString:string): string{
    const greeting :string = "Hej";

    return (greeting + " " + myString);
};

const aString :string = "X";
const anotherString :string ="N";

console.log(myFunction(anotherString));



/* Loopa igenom arrayen av strängar och kör funktionen 
på varje sträng och skriv ut till konsollen det du får 
från arrayen.*/

//Test med en for-loop
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];

    const result = myFunction(element);
    console.log(result); 
}

//Test med en foreach-loop
myArray.forEach(animal => {
    const newGreeting :string = "Roligt att se dig";
    const result = newGreeting + " " + myFunction(animal);
    console.log(result);
});