const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
console.log(buttons);
console.log(result);

buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    console.log(e);
  });
});
