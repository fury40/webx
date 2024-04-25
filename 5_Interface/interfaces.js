// Class implementing the Vehicle interface
var BasicCar = /** @class */ (function () {
    function BasicCar(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BasicCar.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " started."));
    };
    BasicCar.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " stopped."));
    };
    return BasicCar;
}());
// Class implementing the Car interface
var GasolineCar = /** @class */ (function () {
    function GasolineCar(make, model, year, fuelType) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
    }
    GasolineCar.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " started."));
    };
    GasolineCar.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " stopped."));
    };
    GasolineCar.prototype.refuel = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is refueling with ").concat(this.fuelType, "."));
    };
    return GasolineCar;
}());
// Create instances of classes implementing interfaces
var basicCar = new BasicCar("Toyota", "Corolla", 2023);
var gasolineCar = new GasolineCar("Toyota", "Camry", 2022, "Gasoline");
// Use methods defined in interfaces
basicCar.start(); // Output: Toyota Corolla started.
basicCar.stop(); // Output: Toyota Corolla stopped.
gasolineCar.start(); // Output: Toyota Camry started.
gasolineCar.stop(); // Output: Toyota Camry stopped.
gasolineCar.refuel(); // Output: Toyota Camry is refueling with Gasoline.
