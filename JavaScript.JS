    var car = document.querySelector(".car");
    var intervalId;
    var cars = 20;
    var i = 0;
    reset();



    function unparkedCars(color, make, plate, year, carImage) {
        this.color = color;
        this.make = make;
        this.plate = plate;
        this.year = year;
        this.carImage = carImage;
        this.parked = false;
        this.space = null;

    }


    // var car = new unparkedCars("Red", "toyota", i, 1937);
    // console.dir(car);

    console.log(new unparkedCars("Red", "toyota", i, 1937));

    function buildCar(count) {
        var result = [];
        //increments the plate number by 1
        for (var i = 0; i < count; i++) {
            var car = new unparkedCars("Red", "toyata", i, 1937);
            var parked = false;
            result.push(car);
        }
        return result;
    }
    var unparkedCars = buildCar(20);

    var carInTransit = null;

    var carInStart = null;

    var carAtStart = null;

    var carAtEntryway = null;

    var carOnRoad = null;

    console.dir(unparkedCars);
    console.dir(buildCar);

    function Intersection(top, left, width, height) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    var intersection = [
        new Intersection(150, 314, 129, 133, ['top', 'right']),
        new Intersection(150, 826, 132, 133, ['top', 'right', 'bottom']),
        new Intersection(418, 315, 138, 133, ['top', 'bottom', 'left']),
        new Intersection(418, 826, 132, 133, ['top', 'bottom', 'left']),
    ];

    function Space(top, left, width, height, openSide) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.openSide = openSide;
        this.shadowbox = new shadowbox(top, left, width, height);
    }

    function shadowbox(width, height, top, left, openSide) {

        this.width = width;
        this.height = height;

        if (openSide === 'right') {
            this.top = top;
            this.left = left + width;
            this.width = width;
            this.height = height;
        } else if (openSide === 'left') {
            this.top = top;
            this.left = left - width;
            this.width = width;
            this.height = height;
        } else if (openSide === 'top') {
            this.top = top - height;
            this.left = left;
            this.width = width;
            this.height = height;
        } else if (openSide === 'bottom') {
            this.top = top + height;
            this.left = left;
            this.width = width;
            this.height = height;
        }

        this.top = top;
        this.left = left;

    }

    var spaces = [
        //Space 1 through 9 
        new Space(12, 179, 136, 72),
        new Space(88, 179, 136, 72),
        new Space(163, 179, 136, 72),
        new Space(238, 179, 136, 72),
        new Space(313, 179, 136, 72),
        new Space(389, 179, 136, 72),
        new Space(464, 179, 136, 72),
        new Space(539, 179, 136, 72),
        new Space(613, 179, 136, 72),

        //Space 10 through 14
        new Space(55, 493, 136, 72),
        new Space(55, 569, 136, 72),
        new Space(55, 645, 136, 72),
        new Space(55, 719, 136, 72),

        //Space 14 through 18
        new Space(310, 419, 136, 72),
        new Space(310, 493, 136, 72),
        new Space(310, 567, 136, 72),
        new Space(310, 642, 136, 72),
        new Space(310, 717, 136, 72),

        //Space 19 through 23 
        new Space(576, 419, 136, 72),
        new Space(576, 493, 136, 72),
        new Space(576, 567, 136, 72),
        new Space(576, 642, 136, 72),
        new Space(576, 717, 136, 72),

        //Space 24 through 31
        new Space(17, 958, 136, 72),
        new Space(91, 958, 136, 72),
        new Space(166, 958, 136, 72),
        new Space(241, 958, 136, 72),
        new Space(315, 958, 136, 72),
        new Space(390, 958, 136, 72),
        new Space(465, 958, 136, 72),
        new Space(540, 958, 136, 72),
    ]
    console.dir(spaces);


    function East() {
        car.style.left = `${parseInt(car.style.left.replace("px", "")) + 10}px`;

        if (carLeft >= 640) {
            stopCar();
            setTimeout(startCarIntersectionEast, intersectionWait);
        }
    }

    function South() {
        car.style.top = `${parseInt(car.style.top.replace("px", "")) + 10}px`;

        if (carTop >= 670) {
            stopCar();
            setTimeout(startCarIntersectionSouth, intersectionWait);
        }

    }

    function West() {
        car.style.left = `${parseInt(car.style.left.replace("px", "")) - 10}px`;

        if (carLeft <= 190) {
            stopCar();
            setTimeout(startCarIntersectionWest, intersectionWait);
        }
    }

    function North() {
        car.style.top = `${parseInt(car.style.top.replace("px", "")) - 10}px`;

        if (carTop <= 230) {
            stopCar();
            setTimeout(startCarIntersectionNorth, intersectionWait);
        }
    }

    //game loop
    // var gameLoop = setInterval(Tick, 50);

    function Tick() {
        var car = getACarToPark();
        if (car !== null) {
            var space = getAvailableSpace();
            if (space !== null) {
                driveCarToSpace(car, space);
            }
        }
    }



    function driveCarToSpace(car, space) {
        console.log('driving car to space');
        //if the car is the car in transit then continue driveing 
        //to space.
        if (carInTransit === car) {
            keepDrivingCarToSpace(car);
            return;
        }
        //if it is the car at the start then drive into parking lot.
        if (carInStart === car) {
            driveCarForword(car);
            carInStart = null;
            carInTransit = car;
            return;
        }
        //if it is neather it is a new car so draw car at entrince.
    }
    drawCarAtStartingLine(car);
    carInStart = car;

    function drawCarAtStartingLine(car) {
        console.log("draw the car at the starting line")
    }

    function keepDrivingCarToSpace(car) {
        console.log("keep diving");
    }

    function driveCarForword(car) {
        console.log("drive car forword");
    }

    function getACarToPark() {
        //is the car allready in transit?,
        if (carOnRoad !== null) {
            return carOnRoad;
        }
        //is the car allready in transit?,
        else if (carAtStart !== null) {
            return carAtStart;
        }
        //is the car wating outside the lot?
        else if (unparkedCars.length > 0) {
            return unparkedCars.shift();
        }
        //figure out the next movement.
        else {
            return null;
        }
    }

    function carOnRoad(car) {
        console.log("were is my car");
    }

    function carAtStart(car) {
        console.log("car is at start");
    }



    function getAvailableSpace(id, vacant) {
        if (carInTransit !== null) {
            return carInTransit.spaces;
        }
        if (spaces.length > 0) {
            return spaces.shift();
        }
        return null;
    }

    function setCarInitialPosition(car) {
        car.style.transform = "rotate(-90deg)";
        car.style.top = "616px";
        car.style.left = "310px";
    }

    function creatCarImage(car) {
        var carImage = document.createElement('img');
        carImage.setAttribute('class', 'car');
        carImage.setAttribute('src', 'carimg');
        document.appendChild(carImage);
        setCarInitialPosition(carImage);
    }

    //     car.space = space;

    // function moveCarImageToStartingLine(carImage) {
    //   console.log('moving a car to start');
    // }

    function reset() {
        car.style.top = "736px";
        car.style.left = "310px";
    }

    function stop() {
        clearInterval(intervalId);
    }

    function start() {
        intervalId = setInterval(Tick, 100);
    }