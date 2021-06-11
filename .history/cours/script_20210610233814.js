//selecteurs........
// document.querySelector("h4").style.letterSpacing = "5px";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "salmon";
// const balise2 = (document.getElementById("btn-1").style.background = "yellow");

//click events......

const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("mousemove", () => {
  console.log("click!");
});
