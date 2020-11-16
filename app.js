let audio;
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
  audio = new Audio("./sounds/" + url + ".wav");
  audio.play();
}

