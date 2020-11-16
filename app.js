let audio;
let audioLeg;
let audioFirm;
let audioReady;
let audioGo;
let audioChocolate;
let audioWumbo;
let audioNumber;
let audioStinks;
let audioPeople;
let audioClaws;
let audioSlasher;
let audioFuture;
let audioArray = []
window.onload = () => {
  audioLeg = new Audio("./sounds/leg.wav");
  audioFirm = new Audio("./sounds/firm.wav");
  audioReady = new Audio("./sounds/areYouReady.wav");
  audioGo = new Audio("./sounds/imReady.wav");
  audioChocolate = new Audio("./sounds/chocolate.wav");
  audioWumbo = new Audio("./sounds/wumbo.wav");
  audioNumber = new Audio("./sounds/numberOne.wav");
  audioStinks = new Audio("./sounds/stinks.wav");
  audioPeople = new Audio("./sounds/people.wav");
  audioClaws = new Audio("./sounds/claws.wav");
  audioSlasher = new Audio("./sounds/slasher.wav");
  audioFuture = new Audio("./sounds/future.wav");
  audioArray.push(audioFirm)
  audioArray.push(audioReady)
  audioArray.push(audioGo)
  audioArray.push(audioChocolate)
  audioArray.push(audioWumbo)
  audioArray.push(audioNumber)
  audioArray.push(audioStinks)
  audioArray.push(audioPeople)
  audioArray.push(audioLeg)
  audioArray.push(audioClaws)
  audioArray.push(audioSlasher)
  audioArray.push(audioFuture)
}


function playRandom() {
  var queenUrls = [
    "blairStClair",
    "detox",
    "jinkx",
    "karmeronMicheals",
    "kennedyDavenport",
    "mayhem",
    "missel",
    "sashaVelour",
    "sharon",
    "theTuck",
    "valentina",
    "vangie",
  ];
  var randomIndex = Math.floor(Math.random() * queenUrls.length);
  var randomQueenUrl = queenUrls[randomIndex];
  play(randomQueenUrl);
}
function play(url) {
  if (audio) {
    audio.pause();
  }
  // audio = new Audio("./sounds/" + url + ".wav");
  audio = audioArray[url]
  audio.play();
}

