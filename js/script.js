
// dato un array lista della spesa contenente n elementi
// scivere nel DOM gli elementi dell'array utilizzando un ciclo while


const listItems = ["uova", "latte", "pane", "cereali", "cacao", "cioccolato", "acqua","vino"];

let counter = 0;
let UlElement = document.getElementById("list-ul");

do{
    let newLi = document.createElement("li");
    UlElement.append(newLi);
    newLi.innerHTML = listItems[counter];
    counter++;

}while(counter !== listItems.length);