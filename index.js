//hittar alla html element som behövs
let StartBtn = document.querySelector("button");
let ContentDiv = document.querySelector("#Content");
let MoneyDiv = document.querySelector("#MoneyDiv");
let FrågaOne = document.querySelector("#Fråga1");
let FrågaTwo = document.querySelector("#Fråga2");
let FrågaTre = document.querySelector("#Fråga3");
let FrågaFour = document.querySelector("#Fråga4");
let h2 = document.querySelector("h2");
//skapar variabels som kan besvara data för hur många rätt och fel svar man haft under quizens gång
let RättSvar;
let FelSvar;
//skapar en variabel för prispotten och en function som gångrar den med 10 när de anropas som den kommer göra vid rätt svar
let PrizePot = 1;
//gångra och tilldela prizepot talet
function multiplyByTen() {
  PrizePot *= 10;
  return PrizePot;
}

StartBtn.addEventListener("click", () => {
  //tilldelar alla divar classer för styling
  ContentDiv.classList.add("Content");
  MoneyDiv.classList.add("MoneyDiv");
  FrågaOne.classList.add("Fråga");
  FrågaTwo.classList.add("Fråga");
  FrågaTre.classList.add("Fråga");
  FrågaFour.classList.add("Fråga");
  //skapar en close knapp så man kan stänga ned allt removar alla klasser och nollställer h2
  let CloseBtn = document.createElement("button");
  CloseBtn.innerText = "X";
  ContentDiv.append(CloseBtn);
  CloseBtn.addEventListener("click", () => {
    ContentDiv.classList.remove("Content");
    MoneyDiv.classList.remove("MoneyDiv");
    FrågaOne.classList.remove("Fråga");
    FrågaTwo.classList.remove("Fråga");
    FrågaTre.classList.remove("Fråga");
    FrågaFour.classList.remove("Fråga");
    h2.innerHTML = ``;
  });
  //sätter h2 till prizepot som just nu är 1 men gångrar med 10 för varje rätt svar
  h2.innerHTML = `--$${PrizePot}--`;
});
