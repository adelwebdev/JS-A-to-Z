let chaine = "des lettres oui encore une fois";
let number = 34;
let boolean = true;
console.log(chaine, number, boolean);

let array = ["je", "suis", 24, false];
console.log(array);

let objet = {
  prénom: "audrey",
  age: 34,
  ville: "Bordeaux",
};

console.log(objet);
console.log(typeof number);

let arbre = null;
console.log(typeof arbre);

let total = 2;
let x = 4;

total = ++x;
console.log(total);

let x = 2;
let y = 5;
if (x < y) {
  console.log("x est inférieur à y");
} else {
  console.log("x est supérieur à y");
}
