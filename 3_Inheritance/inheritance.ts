// Base class Vehicle
class Vehicle {
  constructor(public make: string, public model: string, public year: number) {}

  // Method to start the vehicle
  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  // Method to stop the vehicle
  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }
}

// Derived class Car inheriting from Vehicle
class Car extends Vehicle {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
  }
}

// Derived class ElectricCar inheriting from Car
class ElectricCar extends Car {
  constructor(
    make: string,
    model: string,
    year: number,
    public batteryCapacity: number
  ) {
    super(make, model, year);
  }

  // Method to charge the electric car
  charge() {
    console.log(`${this.make} ${this.model} is charging.`);
  }
}

// Derived class GasolineCar inheriting from Car
class GasolineCar extends Car {
  constructor(
    make: string,
    model: string,
    year: number,
    public fuelCapacity: number
  ) {
    super(make, model, year);
  }

  // Method to refuel the gasoline car
  refuel() {
    console.log(`${this.make} ${this.model} is refueling.`);
  }
}

// Creating instances of each type of car
const generalCar = new Car("Hyundai", "Grand", 2015);
const electricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
const gasolineCar = new GasolineCar("Toyota", "Camry", 2023, 60);

// Using methods of each type of car
electricCar.start();
electricCar.charge();

gasolineCar.start();
gasolineCar.refuel();

generalCar.start();
generalCar.stop();
