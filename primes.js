var num = [];
var circles = document.querySelectorAll(".circle");
var messageDisp = document.querySelector("#header");
var numPrimesDisp = document.querySelector("#numPrimesDisp");
var resetBtn = document.querySelector("#resetBtn");

var nonPrimes = 0;
var score = 0;

setup();
nonPrimeCounter();

// adds reset button function
resetBtn.addEventListener("click", function() {
	nonPrimes = 0;
	score = 0;
	setup();
	nonPrimeCounter();
	messageDisp.textContent = "Prime Finder";
});

function gameOver() {
	for (var i = 0; i < circles.length; i++) {
		circles[i].classList.add("hidden");
	}
	messageDisp.textContent = "You Lose";
}

function primeCheck(value) {
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {
			return false;
		}
	}
	return value > 1;
}

function nonPrimeCounter() {
	nonPrimes = 0;
	for (i = 0; i < num.length; i++) {
		if (primeCheck(num[i]) === false) {
			nonPrimes = nonPrimes + 1;
		}
	}
	numPrimesDisp.textContent = score + "/" + nonPrimes;
}

function winCheck() {
	if (score === nonPrimes) {
		for (var i = 0; i < circles.length; i++) {
			circles[i].classList.add("hidden");
		}
		messageDisp.textContent = "You Win";
	}
}

function setup() {
	var score = 0;
	for (var i = 0; i < circles.length; i++) {
		circles[i].classList.remove("hidden");
		circles[i].classList.add("shown");
		// generates random numbers 1-1000
		num[i] = Math.round(Math.random() * 1000);
		// fills circles with random numbers
		circles[i].innerHTML = "<p>" + num[i] + "</p>";
		// adds click listeners to circles
		circles[i].addEventListener("click", function() {
			// grab number of circle
			var clickedNum = this.textContent;
			if (primeCheck(clickedNum) === false) {
				this.classList.add("hidden");
				score = score + 1;
				winCheck();
				numPrimesDisp.textContent = score + "/" + nonPrimes;
			} else {
				gameOver();
			}
		});
	}
}
