
alert("Welcome to Gary's Animated Racetrack. You are able pick the road speed of a car, how long it waits at intersections, and its speed through intersections. Click ok to continue."); 

let car = document.querySelector('.carImage1');

// let car2 = document.querySelector('.carImage2');
   	
// let car3 = document.querySelector('.carImage3');

// let roadSpeed = 10;   	
let roadSpeed = prompt("Pick road speed; note: 1 is fastest and 100 medium. Must be a number with no commas.");
// let intersectionWait = 1000;
let intersectionWait = prompt("Pick intersection wait time; note: 1000 is equal to 1 second. Must be a number with no commas.");
//let intersectionSpeed = 200;
let intersectionSpeed = prompt("Pick intersection speed; note 50 is fast and 200 medium. Must be a number with no commas.");

var IntervalId;

function carSkid(e) {
        var audio = document.querySelector('audio[data-key="carSkid"]');
        audio.currentTime = 0;
        audio.play();
    }

function carRunning(e) {
        var audio = document.querySelector('audio[data-key="carRunning"]');
        audio.currentTime = 0;
        audio.play();
    }  

function resetCars() {
	car.style.top = "80px";
	car.style.left = "60px";
	car2.style.top = "120px";
	car2.style.left = "100px";
	car3.style.top = "160px";
	car3.style.left = "140px";
	
}

//pivot car

// var totalDegreesRotated = 0;
// 	var rotateCar = function(direction) {
// 		carSkid();
// 		var degreesToIncrement;
// 		if (direction == 0) {
// 			degreesToIncrement = 90;
// 		} else {
// 			degreesToIncrement = -90;
// 		}
// 		totalDegreesRotated = totalDegreesRotated + degreesToIncrement;
// 		document.querySelector(".carImage1").style.transform = `rotate(${totalDegreesRotated}deg)`;
// 	}

resetCars();

function moveCarEast() {
	let carLeft = getComputedStyle(car).left.replace('px', '');
	let carTop = getComputedStyle(car).top.replace('px', '');

	if(carLeft >= 640) {
		carSkid();
		stopCars();
	setTimeout(startCarIntersectionEast, intersectionWait);
	}

	car.style.left = `${parseInt(car.style.left.replace("px", "")) + 10}px`;
}

// function carMoveIntersectionEast() {
// 	let carLeft = getComputedStyle(car).left.replace('px', '');
// 	let carTop = getComputedStyle(car).top.replace('px', '');
// 	car.style.left = `${parseInt(car.style.left.replace("px", "")) + 10}px`;

// 	if(carLeft >= 780) {
// 		stopCars();
// 		rotateCar(0)
// 		setTimeout(startCarSouth, 1000);
// 	}
// }

// function startCarSouth () {
// 	stopCars();
// 	intervalId = setInterval(moveCarSouth, roadSpeed);
// }

function moveCarSouth () {
	let carLeft = getComputedStyle(car).left.replace('px', '');
	let carTop = getComputedStyle(car).top.replace('px', '');

	if(carTop >= 670) {
		carSkid();
		stopCars();
	setTimeout(startCarIntersectionSouth, intersectionWait);
	}

	car.style.top = `${parseInt(car.style.top.replace("px", "")) + 10}px`;
}

// function carMoveIntersectionSouth() {
// 	let carLeft = getComputedStyle(car).left.replace('px', '');
// 	let carTop = getComputedStyle(car).top.replace('px', '');
// 	car.style.top = `${parseInt(car.style.top.replace("px", "")) + 10}px`;

// 	if(carTop >= 810) {
// 		stopCars();
// 		rotateCar(0)
// 		setTimeout(startCarWest, 1000);
// 	}
// }


// function startCarWest () {
// 	stopCars();
// 	intervalId = setInterval(moveCarWest, roadSpeed);
// }

function moveCarWest () {
	// carRunning();
	let carLeft = getComputedStyle(car).left.replace('px', '');
	let carTop = getComputedStyle(car).top.replace('px', '');

	if(carLeft <= 190) {
		carSkid();
		stopCars();
	setTimeout(startCarIntersectionWest, intersectionWait);
	}
	
	car.style.left = `${parseInt(car.style.left.replace("px", "")) - 10}px`;
}


// function carMoveIntersectionWest() {
// 	let carLeft = getComputedStyle(car).left.replace('px', '');
// 	let carTop = getComputedStyle(car).top.replace('px', '');
// 	car.style.left = `${parseInt(car.style.left.replace("px", "")) - 10}px`;

// 	if(carLeft <= 50) {
// 		stopCars();
// 		rotateCar(0)
// 		setTimeout(startCarNorth, 1000);
// 	}
// }


// function startCarWest () {
// 	stopCars();
// 	intervalId = setInterval(moveCarWest, roadSpeed);
// }

function moveCarNorth () {
	car.style.top = `${parseInt(car.style.top.replace("px", "")) - 10}px`;
	let carLeft = getComputedStyle(car).left.replace('px', '');
	let carTop = getComputedStyle(car).top.replace('px', '');

	if(carTop <= 230) {
		carSkid();
		stopCars();
	setTimeout(startCarIntersectionNorth, intersectionWait);
	}
}


// function carMoveIntersectionNorth() {
// 	let carLeft = getComputedStyle(car).left.replace('px', '');
// 	let carTop = getComputedStyle(car).top.replace('px', '');
// 	car.style.top = `${parseInt(car.style.top.replace("px", "")) - 10}px`;

// 	if(carTop <= 90) {
// 		stopCars();
// 		rotateCar(0)
// 		setTimeout(startCar, 1000);
// 	}
// }


// function startCarNorth () {
// 	stopCars();
// 	intervalId = setInterval(moveCarNorth, roadSpeed);
// }


function startCarIntersectionEast () {
	intervalId = setInterval(carMoveIntersectionEast, intersectionSpeed)
}

function startCarIntersectionSouth () {
	intervalId = setInterval(carMoveIntersectionSouth, intersectionSpeed)
}

function startCarIntersectionWest () {
	intervalId = setInterval(carMoveIntersectionWest, intersectionSpeed)
}

function startCarIntersectionNorth () {
	intervalId = setInterval(carMoveIntersectionNorth, intersectionSpeed)
}


function startCar() {
	intervalId = setInterval(moveCarEast, roadSpeed);
}

function stopCars() {
	clearInterval(intervalId);

}





    // function createCarImage(car) {
    //     var carImage = document.createElement('img');
    //     carImage.setAttribute('class', 'car');
    //     carImage.setAttribute('src', 'carimg');
    //     document.Body.appendChild(carImage);
    //     setCarInitialPosition(carImage);
    //     return;
    // }
