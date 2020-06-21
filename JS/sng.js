var initialsInput, ageInput, generateButton, resultSection, 
    resultImg, resultText, namePrefixes, nameSuffixes;

window.onload = init;

function init() {
	initialsInput = document.getElementById('initials');
	ageInput = document.getElementById('age');
	generateButton = document.getElementById('generateButton');
	resultSection = document.getElementById('resultSection');
	resultImg = document.getElementById('resultImg');
	resultText = document.getElementById('resultText');
  
	namePrefixes = ["Jade", "Dark", "Light", "Power", "Great", 
                    "Crimson", "Super", "Flying", "Moon", "Wonder"];
	nameSuffixes = ["Knight", "Mage", "Pheonix", "Bat", "Jester", 
                    "Robo", "Hornet", "Chief", "Guardian", "Goddess"];
  
	generateButton.setAttribute("onClick", "generateSuperheroName()");
}

function generateSuperheroName() {
	if (initialsInput.checkValidity() && ageInput.checkValidity()) {
		let initialsSeed = getAsciiSumOfString(initialsInput.value);
		let ageSeed = parseInt(ageInput.value);
    
		let randVal1 = Math.round(initialsSeed + Math.random() * 100) % 10;
		let randVal2 = Math.round(ageSeed + Math.random() * 100) % 10;
    
		resultText.innerHTML = namePrefixes[randVal1] + " " + nameSuffixes[randVal2];
    
		resultSection.style.display = "inline-block";
	}
}

function getAsciiSumOfString(str) {
	let asciiSum = 0;
	for (var i = 0; i < str.length; i++) {
		asciiSum += str.charCodeAt(i);
	}
  
	return asciiSum;
}