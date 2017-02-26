var music = document.getElementById("music");
music.loop = true;
music.volume = .05;

var blank = "";
var image = document.getElementById("image");
var word = document.getElementById("word");
var guessnum = document.getElementById("guessnum");
var wordarray = ["moon", "jupiter", "usagi", "mamoru", "chibiusa", "cat", "transform", "saturn", "hotaru", "brooch"];
var blankarray = new Array(10);
var usedletsarray = [];
var usedlets = document.getElementById("usedlets");
var win = document.getElementById("win");
var numwins = document.getElementById("numwins");
var numlose = document.getElementById("numlose");
var nextround = document.getElementById("nextround");
var randomizer = null;
var wordforround = null;
var pressany = document.getElementById("pressany");
var imagearray = ["assets/images/moon.jpg", "assets/images/jupiter.jpg", "assets/images/usagi.jpg", "assets/images/mamoru.jpg", "assets/images/chibiusa.jpg", "assets/images/cat.jpg", "assets/images/transform.jpg", "assets/images/saturn.jpg", "assets/images/hotaru.png", "assets/images/brooch.png"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var randocounter = [];
var losesound = document.getElementById("losesound");
var winsound = document.getElementById("winsound");
var megawin = document.getElementById("megawin");

//creates array of blank spaces for each word in the game
for (j=0; j<blankarray.length; j++) {
	blankarray[j] = [];
	for (i=0; i<wordarray[j].length-1; i++) {
		blankarray[j].push("_ ");
	}
	blankarray[j].push("_");
}

var randomizer = Math.floor(Math.random() * 10);

randocounter.push(randomizer);

var wordforround = blankarray[randomizer];

for (i=0; i < wordarray[randomizer].length; i++) {
	blank = blank + wordforround[i];
}

word.textContent = blank
var key = "";

//defining restart
function gamerestart() {

blank = "";

usedletsarray = [];

guessnum.textContent = 10;

usedlets.textContent = "";

win.textContent = "";

nextround.textContent = "";

randomizer = Math.floor(Math.random() * 10);

if (randocounter.indexOf(randomizer) > -1) {
	if (randocounter.length == 10) {
		win.textContent = "YOU BEAT ALL THE CLUES";
		megawin.volume = .2;
		megawin.play();
	}
	else {
		gamerestart();
	}
}
else {
	randocounter.push(randomizer);

	wordforround = blankarray[randomizer];

	for (i=0; i < wordarray[randomizer].length; i++) {
		blank = blank + wordforround[i];
	}

	word.textContent = blank
	var key = "";
}
}

//actions when key is pressed
document.onkeydown = function(event) {
	if (win.textContent == "") {
		pressany.textContent = "";
		key = event.key;
		if (alphabet.indexOf(key) > -1) {
			for (i=0; i < wordforround.length; i++) {
				if (key == wordarray[randomizer].charAt(i)) {
					wordforround[i] = key;
			}
		}
		blank = "";
		for (i=0; i < wordarray[randomizer].length; i++) {
			blank = blank + wordforround[i];
		}
		if (word.textContent == blank) {
				if (usedletsarray.indexOf(key) == -1 && wordforround.indexOf(key) == -1) {
					usedletsarray.push(key);
					usedletsarray.sort();
					guessnum.textContent = guessnum.textContent - 1;
					usedlets.textContent = usedletsarray;
				}
		}
		word.textContent = blank;
		if (blank == wordarray[randomizer]) {
			win.textContent = "You win!";
			winsound.volume = .2;
			winsound.play();
			nextround.textContent = "Click here for next round";
			image.src = imagearray[randomizer];
			numwins.textContent = Number(numwins.textContent) + 1;
		}
		if (guessnum.textContent == 0) {
			win.textContent = "You lose!";
			losesound.volume = .2;
			losesound.play();
			word.textContent = wordarray[randomizer];
			nextround.textContent = "Click here for next round";
			image.src = imagearray[randomizer];
			numlose.textContent = Number(numlose.textContent) + 1;
		}
	}
	}
}