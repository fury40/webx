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
// Base class Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to start the vehicle
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " started."));
    };
    // Method to stop the vehicle
    Vehicle.prototype.stop = function () {
        console.log("".concat(this.make, " ").concat(this.model, " stopped."));
    };
    return Vehicle;
}());
// Derived class Car inheriting from Vehicle
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year) {
        return _super.call(this, make, model, year) || this;
    }
    return Car;
}(Vehicle));
// Derived class ElectricCar inheriting from Car
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(make, model, year, batteryCapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    // Method to charge the electric car
    ElectricCar.prototype.charge = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is charging."));
    };
    return ElectricCar;
}(Car));
// Derived class GasolineCar inheriting from Car
var GasolineCar = /** @class */ (function (_super) {
    __extends(GasolineCar, _super);
    function GasolineCar(make, model, year, fuelCapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.fuelCapacity = fuelCapacity;
        return _this;
    }
    // Method to refuel the gasoline car
    GasolineCar.prototype.refuel = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is refueling."));
    };
    return GasolineCar;
}(Car));
// Creating instances of each type of car
var generalCar = new Car("Hyundai", "Grand", 2015);
var electricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
var gasolineCar = new GasolineCar("Toyota", "Camry", 2023, 60);
// Using methods of each type of car
electricCar.start();
electricCar.charge();
gasolineCar.start();
gasolineCar.refuel();
generalCar.start();
generalCar.stop();
