var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Public method accessible from anywhere
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " started."));
    };
    // Protected method accessible within the class and its subclasses
    Vehicle.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " stopped."));
    };
    // Private method accessible only within the class
    Vehicle.prototype.honk = function () {
        console.log("".concat(this.make, " ").concat(this.model, " honked."));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, fuelType) {
        var _this = _super.call(this, make, model, year) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    // Public method accessible from anywhere
    Car.prototype.refuel = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is refueling with ").concat(this.fuelType, "."));
    };
    // Example of using protected method from the parent class
    Car.prototype.stopCar = function () {
        // Can access the protected method stop() from the parent class
        this.stop();
    };
    // Example of using private method from the parent class (won't work)
    Car.prototype.honkCar = function () {
        // Can't access the private method honk() from the parent class
        // this.honk();
        console.log("Sorry, can't honk the car.");
    };
    return Car;
}(Vehicle));
// Creating an instance of Car
var car = new Car("Toyota", "Camry", 2023, "Gasoline");
// Accessing public properties
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2023
console.log(car.fuelType); // Output: Gasoline
// Accessing public methods
car.start(); // Output: Toyota Camry started.
car.refuel(); // Output: Toyota Camry is refueling with Gasoline.
// Accessing protected method from the subclass
car.stopCar(); // Output: Toyota Camry stopped.
// Accessing private method from the subclass (will not work)
car.honkCar(); // Output: Sorry, can't honk the car.
