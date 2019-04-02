var num = [];
var circles = document.querySelectorAll(".circle");
var messageDisp = document.querySelector("#header");
var numPrimesDisp = document.querySelector("#numPrimesDisp");
var resetBtn = document.querySelector("#resetBtn");
var numShown = document.querySelectorAll(".shown");

// main problem is that primes need to be removed from the num array after being clicked

setup();
nonPrimeCounter();

// adds reset button function
resetBtn.addEventListener("click", function() {
	setup();
	nonPrimeCounter();
});

function gameOver() {
	for (var i = 0; i < circles.length; i++) {
		circles[i].classList.add("hidden");
	}
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
	numPrimes = 0;
	for (i = 0; i < num.length; i++) {
		if (primeCheck(num[i]) === false) {
			numPrimes = numPrimes + 1;
		}
	}
	numPrimesDisp.textContent = numPrimes;
}

function setup() {
	for (var i = 0; i < circles.length; i++) {
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
				this.classList.remove("shown");
				this.classList.add("hidden");
				// this.textContent = "";
			} else {
				gameOver();
				messageDisp.textContent = "You Lose";
			}
			nonPrimeCounter();
		});
	}
}
