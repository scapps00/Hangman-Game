var music = document.getElementById("music");
music.loop = true;
music.volume = .05;

var blank = ""
var word = document.getElementById("word")
var moonblank = new Array("moon".length);
for (i=0; i < moonblank.length-1; i++) {
	moonblank[i] = "_ ";
}

moonblank[moonblank.length-1] = "_"

var blankarray = [moonblank, "Jupiter"];
var wordarray = ["moon", "jupiter"];

for (i=0; i < wordarray[0].length; i++) {
	blank = blank + blankarray[0][i];
}

word.textContent = blank
var key = "";

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
	word.textContent = blank;
}