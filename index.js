//skapar en array med olika objekt varje objekt har 2 key med en fråga och ett svar
let Quiz = [
  {
    Fråga: "Vilken Film har inte Leonardo Dicaprio deltagit i?",
    Svar: "Law Abiding Citizen",
  },
  {
    Fråga: "När föddes World wide web fram?",
    Svar: "År 1983",
  },
  {
    Fråga: "Vad är de för medel man sätter på GPU:et?",
    Svar: "Kylpasta",
  },
  {
    Fråga: "Vem är grundaren till spotify?",
    Svar: "Daniel Ek",
  },
  {
    Fråga: "Hur många registrerade invånare har sverige idags läget?",
    Svar: "10,42 Miljonär",
  },
  {
    Fråga: "Vad användes Nackademin byggnaden till när den byggdes?",
    Svar: "SJ Kontor",
  },
  {
    Fråga: "Vilket år grundades Nackademin?",
    Svar: "År 1994",
  },
  {
    Fråga:
      "Om du har två sandhögar och sedan slår ihop dom hur många sandhögar har du nu?",
    Svar: "1",
  },
  {
    Fråga: "Hur lång är Angelo?",
    Svar: "210cm",
  },
  {
    Fråga: "Vem vann mr olympia 2023?",
    Svar: "Derek Lunsford",
  },
];

//hittar alla html element som behövs
let StartBtn = document.querySelector("button");
let ContentDiv = document.querySelector("#Content");
let MoneyDiv = document.querySelector("#MoneyDiv");
let FrågaOne = document.querySelector("#Fråga1");
let FrågaTwo = document.querySelector("#Fråga2");
let FrågaTre = document.querySelector("#Fråga3");
let FrågaFour = document.querySelector("#Fråga4");
let h2 = document.querySelector("h2");
let NuvarandeIndex = 0;
//skapar variabels som kan besvara data för hur många rätt och fel svar man haft under quizens gång
let RättSvar = 0;
let FelSvar = 0;
//skapar en variabel för prispotten och en function som gångrar den med 10 när de anropas som den kommer göra vid rätt svar
let PrizePot = 1;
//gångra och tilldela prizepot talet
function multiplyByTen() {
  PrizePot *= 10;
  return PrizePot;
}

function showNextQuestion() {
  if (currentQuestionIndex < Quiz.length) {
    let Nuvarande = Quiz[NuvarandeIndex];
    let h1 = document.querySelector("h1");
    // Visa frågan på skärmen (t.ex. FrågaOne.innerText = currentQuestion.Fråga;)
    NuvarandeIndex++;
  } else {
    // Visa resultatet när alla frågor har besvarats
    // T.ex. h2.innerHTML = `Rätt svar: ${correctAnswers}, Fel svar: ${wrongAnswers}`;
  }
}

//start knappen som sätter igång quizet och skapar layouten
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
    CloseBtn.remove();
    h2.innerHTML = ``;
  });
  //sätter h2 till prizepot som just nu är 1 men gångrar med 10 för varje rätt svar
  h2.innerHTML = `--$${PrizePot}--`;
});
