var music = document.getElementById("music");
music.loop = true;
music.volume = .05;

var blank = "";
var image = document.getElementById("image");
var word = document.getElementById("word");
var guessnum = document.getElementById("guessnum");
var wordarray = ["moon", "jupiter", "usagi", "mamoru", "chibiusa", "cat", "transform", "saturn", "hotaru", "brooch"];
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

//creates an array of blank spaces for each word
var moonblank = [];
for (i=0; i < wordarray[0].length-1; i++) {
	moonblank.push("_ ");
}
moonblank.push("_");

var jupiterblank = [];
for (i=0; i < wordarray[1].length-1; i++) {
	jupiterblank.push("_ ");
}
jupiterblank.push("_");

var usagiblank = [];
for (i=0; i < wordarray[2].length-1; i++) {
	usagiblank.push("_ ");
}
usagiblank.push("_");

var mamorublank = [];
for (i=0; i < wordarray[3].length-1; i++) {
	mamorublank.push("_ ");
}
mamorublank.push("_");

var chibiusablank = [];
for (i=0; i < wordarray[4].length-1; i++) {
	chibiusablank.push("_ ");
}
chibiusablank.push("_");

var catblank = [];
for (i=0; i < wordarray[5].length-1; i++) {
	catblank.push("_ ");
}
catblank.push("_");

var transformblank = [];
for (i=0; i < wordarray[6].length-1; i++) {
	transformblank.push("_ ");
}
transformblank.push("_");

var saturnblank = [];
for (i=0; i < wordarray[7].length-1; i++) {
	saturnblank.push("_ ");
}
saturnblank.push("_");

var hotarublank = [];
for (i=0; i < wordarray[8].length-1; i++) {
	hotarublank.push("_ ");
}
hotarublank.push("_");

var broochblank = [];
for (i=0; i < wordarray[9].length-1; i++) {
	broochblank.push("_ ");
}
broochblank.push("_");

var blankarray = [moonblank, jupiterblank, usagiblank, mamorublank, chibiusablank, catblank, transformblank, saturnblank, hotarublank, broochblank];

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