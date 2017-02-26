var music = document.getElementById("music");
music.loop = true;
music.volume = .05;

var blank = "";
var image = document.getElementById("image");
var word = document.getElementById("word");
var guessnum = document.getElementById("guessnum");
var wordarray = ["moon", "jupiter"];
var usedletsarray = [];
var usedlets = document.getElementById("usedlets");
var win = document.getElementById("win");
var numwins = document.getElementById("numwins");
var numlose = document.getElementById("numlose");

//creates an array of blank spaces
var moonblank = [];
for (i=0; i < wordarray[0].length-1; i++) {
	moonblank.push("_ ");
}
moonblank.push("_");

var blankarray = [moonblank, "Jupiter"];

for (i=0; i < wordarray[0].length; i++) {
	blank = blank + blankarray[0][i];
}

word.textContent = blank
var key = "";

//actions when key is pressed
document.onkeydown = function(event) {
	key = event.key;
	for (i=0; i < blankarray[0].length; i++) {
		if (key == wordarray[0].charAt(i)) {
			blankarray[0][i] = key;
		}
	}
	blank = "";
	for (i=0; i < wordarray[0].length; i++) {
		blank = blank + blankarray[0][i];
	}
	if (word.textContent == blank) {
		if (usedletsarray.indexOf(key) == -1 && blankarray[0].indexOf(key) == -1) {
				usedletsarray.push(key);
				usedletsarray.sort();
				guessnum.textContent = guessnum.textContent - 1;
				usedlets.textContent = usedletsarray;
		}
	}
	word.textContent = blank;
	if (blank == wordarray[0]) {
		win.textContent = "You win!";
		image.src = "assets/images/moon.jpg";
		numwins.textContent = Number(numwins.textContent) + 1;
	}
}
