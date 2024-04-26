/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  //Numero del centro
  const randomNumber = document.querySelector("#number");
  let randomCard = () => {
    let results = Math.floor(Math.random() * 12 + 2);
    if (results == 11) results = "J";
    if (results == 12) results = "Q";
    if (results == 13) results = "K";
    if (results == 14) results = "A";

    return results;
  };
  randomNumber.innerHTML = `<h1>${randomCard()}</h1>`;

  //Simbolos de las esquinas
  const figuraSup = document.querySelector("#figura1");
  let randomSimb = () => {
    let result = Math.floor(Math.random() * 4 + 1);
    if (result == 1) result = "♦";
    if (result == 2) result = "♥";
    if (result == 3) result = "♠";
    if (result == 4) result = "♣";

    return result;
  };
  //Repitiendo figura superior con inferior
  const simboloFinal = randomSimb();
  figuraSup.innerHTML = `<h1>${simboloFinal}</h1>`;
  const figuraInf = document.querySelector("#figura2");
  figuraInf.innerHTML = `<h1>${simboloFinal}</h1>`;

  //Agregando color
  if (simboloFinal == "♦" || simboloFinal == "♥") {
    figuraSup.style.color = "red";
    figuraInf.style.color = "red";
  }
};

//Agregando boton
const boton = document.createElement("button");
boton.innerText = "Actualizar carta";
document.body.appendChild(boton);

boton.addEventListener("click", event => {
  location.reload();
});
