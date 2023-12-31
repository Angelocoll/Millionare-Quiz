//skapar en array med olika objekt varje objekt har 2 key med en fråga och ett svar
let Quiz = [
  {
    //checkboxar måste ha 2 rätta svar
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
    alternativ3: "for(let i = 0; i < array.lenght; i++)",
    alternativ4: "for(let i = 0; i < array.length; i++)",
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
    //radiobtn ska ha ett rätt svar
    Fråga:
      "Om du har två sandhögar och sedan slår ihop dom hur många sandhögar har du nu?",
    Svar: "1",
    alternativ1: "2",
    alternativ2: "1",
    alternativ3: "3",
    alternativ4: "4",
  },
  {
    Fråga: "Vad är de för medel man sätter på GPU:et?",
    Svar: "Kylpasta",
    alternativ1: "Lim",
    alternativ2: "Kylspray",
    alternativ3: "Kylpasta",
    alternativ4: "Spolarvätska",
  },
  {
    Fråga: "Vad användes Nackademin byggnaden till när den byggdes?",
    Svar: "SJ Kontor",
    alternativ1: "Karlsbergs barnhem",
    alternativ2: "SJ Kontor",
    alternativ3: "Karlsbergs Internat",
    alternativ4: "Karlsbergs Häkte",
  },
  {
    Fråga: "Hur många registrerade invånare har sverige idags läget?",
    Svar: "10,42 Miljonär",
    alternativ1: "10,42 Miljonär",
    alternativ2: "9,86 Miljonär",
    alternativ3: "11,21 Miljonär",
    alternativ4: "1,2 Miljonär",
  },
  {
    Fråga: "Vilket år grundades Nackademin?",
    Svar: "1994",
    alternativ1: "1994",
    alternativ2: "2006",
    alternativ3: "2004",
    alternativ4: "1992",
  },
  //boolean fråga ska ha 2 alt true eller false samt ett rätt svar
  {
    Fråga: "Är Angelo 210cm lång?",
    Svar: true,
  },
  {
    Fråga: "vann Drake mr olympia 2023?",
    Svar: false,
  },
];
//skapar en array där man pushar in allt man sedan vill dra ut till resultatet samt nuvarande indexet
let ValdaAlternativ = [];
//hittar alla html element som behövs
//let ul = document.querySelector("ul");
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
let h3 = document.querySelector("h3");
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
//skapar en timer funktion stackoverflow
let timeLeft = 10;
let timerId;
function startTimer() {
  timeLeft = 10; // Återställ tiden till 10 sekunder
  clearInterval(timerId); // Rensa tidigare intervall
  //1000 milisekunder är en riktig sekund men de ser otroligt långsamt ut så vi kör 900 som ger en bättre känsla
  timerId = setInterval(räknaNed, 900); // Starta ny räkning
  function räknaNed() {
    if (timeLeft === 0) {
      clearInterval(timerId);
      PushSvar();
      nollställ();
      showNextQuestion();
      if (NuvarandeIndex < 10) {
        altLayout();
        startTimer();
      } else {
      }
    } else {
      h3.innerHTML = timeLeft;
      timeLeft--;
    }
  }
}
//skapar en function
function showNextQuestion() {
  //om quiz längden är större än nuvarandeindex
  //varje gång functionen kallas på blur nuvarandeindex variabeln +1
  NuvarandeIndex++;
  //om nuvarande index är mindre än 10 kör = de finns frågor kvar
  if (NuvarandeIndex < 10) {
    //visar nuvarande frågan och går uppåt varje gång functionen kallas på lägger frågan i h1 som är osynlig på skärmen tills värdet tilldelas till den
    let Nuvarande = Quiz[NuvarandeIndex];
    h1.innerText = Nuvarande.Fråga;
    //om de inte finns några frågor kvar
    //annars skriv ut resultatet
  } else {
    clearInterval(timerId);
    h3.innerHTML = "";
    //sätt h2 innertext till hur många rätt och fel svar man haft under spelets gång
    //om rätt svar är mindre än 5 gör den röd
    if (RättSvar < 5) {
      h1.innerHTML = `Resultat: <span id="röd">${RättSvar}0% -Underkänd</span>`;
      //om rätt svar är mindre än 8 gör den gul
    } else if (RättSvar < 8) {
      h1.innerHTML = `Resultat: <span id="gul">${RättSvar}0% -Bra</span>`;
      //annars gör den grön
    } else {
      h1.innerHTML = `Resultat: <span id="grön">${RättSvar}0% -Riktigt bra jobbat</span>`;
    }
  }
}
//skapar en function för att visa första frågan när start knappen klickas
function ShowQuestion() {
  //lägg nodelistan in i en variabel
  let Nuvarande = Quiz[NuvarandeIndex];
  //tilldela h1 innertext index 0 .fråga
  h1.innerText = Nuvarande.Fråga;
}
//sapar en pushsvar funktion den pushar objekt till min array valdaalternativ så att man enkelt sedan kan dra ut allt till resultatet
function PushSvar() {
  let AllInputs = document.querySelectorAll("input:checked");
  let Nuvarande = Quiz[NuvarandeIndex];
  let rätt1 = Nuvarande.Svar;
  let rätt2 = Nuvarande.svar;
  if (NuvarandeIndex < 3) {
    if (AllInputs.length > 1) {
      ValdaAlternativ.push({
        DittSvar: AllInputs[0].value + ", " + AllInputs[1].value,
        Indexet: NuvarandeIndex + 1,
        Frågan: Nuvarande.Fråga,
        rättsvar: rätt1 + ", " + rätt2,
      });
    } else {
      if (AllInputs.length > 0) {
        ValdaAlternativ.push({
          DittSvar: AllInputs[0].value,
          Indexet: NuvarandeIndex + 1,
          Frågan: Nuvarande.Fråga,
          rättsvar: rätt2 + ", " + rätt1,
        });
      } else {
        ValdaAlternativ.push({
          Indexet: NuvarandeIndex + 1,
          Frågan: Nuvarande.Fråga,
          rättsvar: rätt2 + ", " + rätt1,
        });
      }
    }
  } else if (AllInputs.length > 0) {
    ValdaAlternativ.push({
      DittSvar: AllInputs[0].value,
      Indexet: NuvarandeIndex + 1,
      Frågan: Nuvarande.Fråga,
      rättsvar: rätt1,
    });
  } else {
    ValdaAlternativ.push({
      Indexet: NuvarandeIndex + 1,
      Frågan: Nuvarande.Fråga,
      rättsvar: rätt1,
    });
  }
}
//skapar en funtion som skriver ut resultate med hjälp av en knapp jag skapar i funtionen också
function Score() {
  let ScoreBtn = document.createElement("button");
  ScoreBtn.innerText = "Se Resultatet";
  SvarDiv.append(ScoreBtn);
  ScoreBtn.addEventListener("click", () => {
    ul.innerHTML = "";
    MoneyDiv.classList.remove("MoneyDiv");
    FrågaOne.classList.remove("Fråga");
    FrågaTwo.classList.remove("Fråga");
    FrågaTre.classList.remove("Fråga");
    FrågaFour.classList.remove("Fråga");
    h2.innerHTML = ``;
    h1.innerText = "";
    //stanna timern och sedan nollställ h3 så får man bort timern om du bara nollställer h3 tar du endast bort nuvarande värdet av variabeln men efetr 1 sekun har den ett nytt värde
    clearInterval(timerId);
    h3.innerHTML = "";
    SvarDiv.innerHTML = "";
    nollställ();
    ValdaAlternativ.forEach((obj) => {
      //omvandlar en boolean till string
      let booleanValue = obj.DittSvar === "true";
      // Kolla om användaren har svarat på frågan, om inte, behandla som fel svar
      if (obj.DittSvar === undefined && typeof obj.rättsvar === "boolean") {
        let li = document.createElement("li");
        li.innerHTML = `<span id="felSvar">Fråga:${obj.Indexet} ${obj.Frågan}. Du svarade inte. Rätt svar är: ${obj.rättsvar}</span>`;
        ul.append(li);
        //kollar om användaren har svarat rätt isåfall fall är de rätt svar
      } else if (obj.DittSvar === obj.rättsvar) {
        let li = document.createElement("li");
        li.innerHTML = `<span id="rättSvar">Fråga:${obj.Indexet} ${obj.Frågan}. Du svarade: ${obj.DittSvar}, Rätt svar är: ${obj.rättsvar}</span>`;
        ul.append(li);
        //kollar om användaren har svarat rätt med boolean tidigare kod stycke fångar inte boolean värde för då är dittsvar en boolean och rättsvar är en string
      } else if (booleanValue === obj.rättsvar) {
        let li = document.createElement("li");
        li.innerHTML = `<span id="rättSvar">Fråga:${obj.Indexet} ${obj.Frågan}. Du svarade: ${obj.DittSvar}, Rätt svar är: ${obj.rättsvar}</span>`;
        ul.append(li);
      } else {
        let li = document.createElement("li");
        li.innerHTML = `<span id="felSvar">Fråga:${obj.Indexet} ${obj.Frågan}. Du svarade: ${obj.DittSvar}, Rätt svar är: ${obj.rättsvar}</span>`;
        ul.append(li);
      }
    });
    if (RättSvar < 5) {
      h1.innerHTML = `Resultat: <span id="röd">${RättSvar}0% -Underkänd</span>`;
      //om rätt svar är mindre än 8 gör den gul
    } else if (RättSvar < 8) {
      h1.innerHTML = `Resultat: <span id="gul">${RättSvar}0% -Bra</span>`;
      //annars gör den grön
    } else {
      h1.innerHTML = `Resultat: <span id="grön">${RättSvar}0% -Riktigt bra jobbat</span>`;
    }
  });
}
//closenow är en funktion som är lite upprepade till close knappen förutom att med denna funktion kan jag kalla på den för att stänga ned allt utan att behöva klicka på knappen
function closenow() {
  ContentDiv.classList.remove("Content");
  MoneyDiv.classList.remove("MoneyDiv");
  FrågaOne.classList.remove("Fråga");
  FrågaTwo.classList.remove("Fråga");
  FrågaTre.classList.remove("Fråga");
  FrågaFour.classList.remove("Fråga");
  CloseBtn.remove();
  ul.innerHTML = "";
  ul.remove();
  h2.innerHTML = ``;
  h1.innerText = "";
  clearInterval(timerId);
  h3.innerHTML = "";
  NuvarandeIndex = 0;
  FelSvar = 0;
  RättSvar = 0;
  PrizePot = 1;
  SvarDiv.innerHTML = "";
  nollställ();
  ValdaAlternativ = [];
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
    clearInterval(timerId);
    h3.innerHTML = "";
    NuvarandeIndex = 0;
    FelSvar = 0;
    RättSvar = 0;
    PrizePot = 1;
    FrågaOne.innerHTML = "";
    FrågaTwo.innerHTML = "";
    FrågaTre.innerHTML = "";
    FrågaFour.innerHTML = "";
    SvarDiv.innerHTML = "";
    ul.innerHTML = "";
    ul.remove();
    ValdaAlternativ = [];
  });
}
let ul = document.createElement("ul");
//funktionen nollställer endast frågedivsen
function nollställ() {
  FrågaOne.innerHTML = "";
  FrågaTwo.innerHTML = "";
  FrågaTre.innerHTML = "";
  FrågaFour.innerHTML = "";
}
//skapar en function för att alla divar ska bli tilldelade klasser när knappen startar
function layout() {
  ContentDiv.prepend(ul);
  //tilldelar alla divar classer för styling
  ContentDiv.classList.add("Content");
  MoneyDiv.classList.add("MoneyDiv");
  FrågaOne.classList.add("Fråga");
  FrågaTwo.classList.add("Fråga");
  FrågaTre.classList.add("Fråga");
  FrågaFour.classList.add("Fråga");
}
function altLayout() {
  // Definiera altall, divs
  let altall;
  let Divs;
  if (NuvarandeIndex < 10) {
    if (NuvarandeIndex > 7 && NuvarandeIndex < 10) {
      altall = [false, true];
      Divs = [FrågaOne, FrågaTwo];
    } else if (NuvarandeIndex < 10) {
      let obj = Quiz[NuvarandeIndex];
      let alt1 = obj.alternativ1;
      let alt2 = obj.alternativ2;
      let alt3 = obj.alternativ3;
      let alt4 = obj.alternativ4;
      altall = [alt1, alt2, alt3, alt4];
      Divs = [FrågaOne, FrågaTwo, FrågaTre, FrågaFour];
    }
    altall.forEach((alt, index) => {
      let input = document.createElement("input");
      if (NuvarandeIndex < 3) {
        input.type = "checkbox";
      } else if (NuvarandeIndex < 10) {
        input.type = "radio";
        input.name = "Qustions";
      }
      input.value = alt;
      let label = document.createElement("label");
      label.innerHTML = `${alt}`;
      label.prepend(input);
      Divs[index].append(label);
    });
  }
}
//start knappen som sätter igång quizet och skapar layouten
StartBtn.addEventListener("click", () => {
  startTimer();
  layout();
  close();
  h2.innerHTML = `$${PrizePot}`;
  altLayout();
  Svar();
  Score();
  ShowQuestion();
});
//skapar en function för svarabtn
function Svar() {
  let SvarBtn = document.createElement("button");
  SvarBtn.innerText = "Lås in Svaret";
  SvarDiv.append(SvarBtn);
  SvarBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startTimer();
    //om nuvarande index är mindre än 10 kör denna
    if (NuvarandeIndex < 10) {
      let AllInputs = document.querySelectorAll("input:checked");
      let obj = Quiz[NuvarandeIndex];
      let rätt1 = obj.Svar;
      let rätt2 = obj.svar;
      //om nuvarand eindex är mindre än 3 leta efter 2 matchade svar och 2 checkboxar som matchar
      if (NuvarandeIndex < 3) {
        if (AllInputs.length > 1) {
          if (AllInputs[0].value === rätt1 && AllInputs[1].value === rätt2) {
            RättSvar++;
            //om rätt svar kalla functionen gånger 10 och gångra pris summan
            multiplyByTen();
            //om du har checkat i 2 men en utav dom stämmer inte
          } else {
            FelSvar++;
          }
          //om du inte har checkat i 2 gå direkt hit
        } else {
          FelSvar++;
        }
        PushSvar();
        nollställ();
        showNextQuestion();
        altLayout();
        //om nuvarande index är mindre än 8 leta efter 1 checkbox som är i checkad samt 1 rätt svar som matchar
      } else if (NuvarandeIndex < 7) {
        if (AllInputs.length > 0) {
          if (AllInputs[0].value === rätt1) {
            RättSvar++;
            multiplyByTen();
          } else {
            FelSvar++;
          }
        } else {
          FelSvar++;
        }
        PushSvar();
        nollställ();
        showNextQuestion();
        altLayout();
      } else {
        if (AllInputs.length > 0) {
          if (AllInputs.length > 0) {
            if (AllInputs[0].value === rätt1) {
              RättSvar++;
              multiplyByTen();
            } else {
              FelSvar++;
            }
          } else {
            FelSvar++;
          }
          let selectedValue = document.querySelector(
            'input[name="Qustions"]:checked'
          ).value;
          let booleanValue = selectedValue === "true";
          if (booleanValue === rätt1) {
            RättSvar++;
            multiplyByTen();
          } else {
            FelSvar++;
          }
        } else {
          FelSvar++;
        }
        PushSvar();
        nollställ();
        showNextQuestion();
        altLayout();
      }
      h2.innerHTML = `$${PrizePot}`;
    } else {
      closenow();
    }
  });
}
