//skapar en array med olika objekt varje objekt har 2 key med en fråga och ett svar
let Quiz = [
  {
    Fråga: "Vilka Filmer har Leonardo Dicaprio deltagit i?",
    Svar: "Inception",
    svar: "The Revenant",
    alternativ1: "Inception",
    alternativ2: "21 jump street",
    alternativ3: "Law Abiding Citizen",
    alternativ4: "The Revenant",
  },
  {
    Fråga: "Vilka alternativ är en fungerande loop",
    Svar: "foreach()",
    svar: "for(let i = 0; i < array.length; i++)",
    alternativ1: "foreach()",
    alternativ2: "array.from()",
    alternativ3: "for(let i = 0; i < array.length; i++)",
    alternativ4: "for(let i = 0; i < array.lenght; i++)",
  },
  {
    Fråga: "Vilka Är grundarna till spotify?",
    Svar: "Daniel Ek",
    svar: "Martin Lorentzon",
    alternativ1: "Steve Hackett",
    alternativ2: "Carl Hubertus",
    alternativ3: "Daniel Ek",
    alternativ4: "Martin Lorentzon",
  },
  {
    Fråga:
      "Om du har två sandhögar och sedan slår ihop dom hur många sandhögar har du nu?",
    Svar: "1",
  },
  {
    Fråga: "Vad är de för medel man sätter på GPU:et?",
    Svar: ["Kylspray", "Lim", "Spolarvätska", "Kylpasta"],
  },
  {
    Fråga: "Hur många registrerade invånare har sverige idags läget?",
    Svar: ["10,42 Miljonär", "9,86 Miljonär", "11,21 Miljonär", "1,2 Miljonär"],
  },
  {
    Fråga: "Vad användes Nackademin byggnaden till när den byggdes?",
    Svar: [
      "Karlsbergs barnhem",
      "SJ Kontor",
      "Karlsbergs Internat",
      "Karlsbergs Häkte",
    ],
  },
  {
    Fråga: "Vilket år grundades Nackademin?",
    Svar: ["1994", "2006", "2004", "1992"],
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
let StartBtn = document.querySelector("#start");
let LightMode = document.querySelector("#Light");
let ContentDiv = document.querySelector("#Content");
let MoneyDiv = document.querySelector("#MoneyDiv");
let FrågaOne = document.querySelector("#Fråga1");
let FrågaTwo = document.querySelector("#Fråga2");
let FrågaTre = document.querySelector("#Fråga3");
let FrågaFour = document.querySelector("#Fråga4");
let SvarDiv = document.querySelector("#SvarDiv");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
//skapar en variabel som håller räkningen på vilken fråga man är på
let NuvarandeIndex = 0;

//skapar variabels som kan besvara data för hur många rätt och fel svar man haft under quizens gång
let RättSvar = 0;
let FelSvar = 0;
//skapar en variabel för prispotten och en function som gångrar den med 10 när de anropas som den kommer göra vid rätt svar
let PrizePot = 1;
//knapp som byter klasser så att hemsidan kan switcha mellan dark och light mode
LightMode.addEventListener("click", () => {
  document.body.classList.toggle("Light-Mode");
  StartBtn.classList.toggle("Light-Mode-Btn");
  h1.classList.toggle("Light-Mode");
  ContentDiv.classList.toggle("Light-Mode");
  FrågaOne.classList.toggle("Light-Mode");
  FrågaTwo.classList.toggle("Light-Mode");
  FrågaTre.classList.toggle("Light-Mode");
  FrågaFour.classList.toggle("Light-Mode");
  LightMode.classList.toggle("Mode");
});
//gångra och tilldela prizepot talet
function multiplyByTen() {
  PrizePot *= 10;
  return PrizePot;
}
//skapar en function
function showNextQuestion() {
  //om quiz längden är större än nuvarandeindex
  NuvarandeIndex++;
  if (NuvarandeIndex < 10) {
    //visar nuvarande frågan och går uppåt varje gång functionen kallas på lägger frågan i h1 som är osynlig på skärmen tills värdet tilldelas till den
    let Nuvarande = Quiz[NuvarandeIndex];
    h1.innerText = Nuvarande.Fråga;
    //om de inte finns några frågor kvar
  } else {
    //sätt h2 innertext till hur många rätt och fel svar man haft under spelets gång
    h1.innerHTML = `Rätt svar: ${RättSvar}, Fel svar: ${FelSvar}`;
  }
}
//skapar en function för att visa första frågan när start knappen klickas
function ShowQuestion() {
  //lägg nodelistan in i en variabel
  let Nuvarande = Quiz[NuvarandeIndex];
  //tilldela h1 innertext index 0 .fråga
  h1.innerText = Nuvarande.Fråga;
}
function closenow() {
  ContentDiv.classList.remove("Content");
  MoneyDiv.classList.remove("MoneyDiv");
  FrågaOne.classList.remove("Fråga");
  FrågaTwo.classList.remove("Fråga");
  FrågaTre.classList.remove("Fråga");
  FrågaFour.classList.remove("Fråga");
  CloseBtn.remove();
  h2.innerHTML = ``;
  h1.innerText = "";
  NuvarandeIndex = 0;
  FelSvar = 0;
  RättSvar = 0;
  PrizePot = 1;
  let SvarBtn = document.querySelector("#SvarDiv button");
  SvarBtn.remove();
  FrågaOne.innerHTML = "";
  FrågaTwo.innerHTML = "";
  FrågaTre.innerHTML = "";
  FrågaFour.innerHTML = "";
}
//skapar en function för close knappen
function close() {
  let CloseBtn = document.createElement("button");
  CloseBtn.innerText = "X";
  CloseBtn.setAttribute("id", "CloseBtn");
  ContentDiv.append(CloseBtn);
  //skapar en close knapp så man kan stänga ned allt removar alla klasser och nollställer allt som ska börja om på nytt
  CloseBtn.addEventListener("click", () => {
    ContentDiv.classList.remove("Content");
    MoneyDiv.classList.remove("MoneyDiv");
    FrågaOne.classList.remove("Fråga");
    FrågaTwo.classList.remove("Fråga");
    FrågaTre.classList.remove("Fråga");
    FrågaFour.classList.remove("Fråga");
    CloseBtn.remove();
    h2.innerHTML = ``;
    h1.innerText = "";
    NuvarandeIndex = 0;
    FelSvar = 0;
    RättSvar = 0;
    PrizePot = 1;
    let SvarBtn = document.querySelector("#SvarDiv button");
    SvarBtn.remove();
    FrågaOne.innerHTML = "";
    FrågaTwo.innerHTML = "";
    FrågaTre.innerHTML = "";
    FrågaFour.innerHTML = "";
  });
}
function nollställ() {
  FrågaOne.innerHTML = "";
  FrågaTwo.innerHTML = "";
  FrågaTre.innerHTML = "";
  FrågaFour.innerHTML = "";
}
//skapar en function för att alla divar ska bli tilldelade klasser när knappen startar
function layout() {
  //tilldelar alla divar classer för styling
  ContentDiv.classList.add("Content");
  MoneyDiv.classList.add("MoneyDiv");
  FrågaOne.classList.add("Fråga");
  FrågaTwo.classList.add("Fråga");
  FrågaTre.classList.add("Fråga");
  FrågaFour.classList.add("Fråga");
}
function Checkbox() {
  if (NuvarandeIndex < 10) {
    let obj = Quiz[NuvarandeIndex];
    let alt1 = obj.alternativ1;
    let alt2 = obj.alternativ2;
    let alt3 = obj.alternativ3;
    let alt4 = obj.alternativ4;
    let altall = [alt1, alt2, alt3, alt4];
    let Divs = [FrågaOne, FrågaTwo, FrågaTre, FrågaFour];

    altall.forEach((alt, index) => {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.value = alt;

      let label = document.createElement("label");
      label.innerHTML = `${alt}`;
      label.prepend(input);

      Divs[index].append(label);
    });
  }
}

//kortat ned själva koden med functioner utifrån man kallar på
//start knappen som sätter igång quizet och skapar layouten
StartBtn.addEventListener("click", () => {
  //layout tilldelar classer till divar
  layout();
  //close tar bort klasser från divar
  close();
  //sätter h2 till prizepot som just nu är 1 men gångrar med 10 för varje rätt svar
  h2.innerHTML = `$${PrizePot}`;
  //skapar en layout med inputs och labels utifrån min array
  Checkbox();
  //showqustion visar frågan med index platsen 0
  Svar();
  ShowQuestion();
  //är min svar knapp den som kollar om nåt stämmer sätt ett poäng i rättasvar annars i felsvar och sedan gå vidare till nästa fråga
});

//skapar en function för svarabtn
function Svar() {
  let SvarBtn = document.createElement("button");
  SvarBtn.innerText = "Lås in Svaret";
  SvarDiv.append(SvarBtn);

  SvarBtn.addEventListener("click", () => {
    if (NuvarandeIndex < 10) {
      console.log(NuvarandeIndex);
      let AllInputs = document.querySelectorAll("input:checked");
      let obj = Quiz[NuvarandeIndex];
      let rätt1 = obj.Svar;
      let rätt2 = obj.svar;
      if (AllInputs.length > 1) {
        if (AllInputs[0].value === rätt1 && AllInputs[1].value === rätt2) {
          RättSvar++;
        } else {
          FelSvar++;
        }
      } else {
        FelSvar++;
      }
      nollställ();
      showNextQuestion();
      Checkbox();
      multiplyByTen();
      h2.innerHTML = `$${PrizePot}`;
    } else {
      closenow();
      console.log("hej");
    }
  });
}
