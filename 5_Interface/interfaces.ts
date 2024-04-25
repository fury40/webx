// Interface for a vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
  stop(): void;
}

// Interface for a car
interface Car extends Vehicle {
  fuelType: string;
  refuel(): void;
}

// Class implementing the Vehicle interface
class BasicCar implements Vehicle {
  constructor(public make: string, public model: string, public year: number) {}

  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }
}

// Class implementing the Car interface
class GasolineCar implements Car {
  constructor(
    public make: string,
    public model: string,
    public year: number,
    public fuelType: string
  ) {}

  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }

  refuel() {
    console.log(
      `${this.make} ${this.model} is refueling with ${this.fuelType}.`
    );
  }
}

// Create instances of classes implementing interfaces
const basicCar = new BasicCar("Toyota", "Corolla", 2023);
const gasolineCar = new GasolineCar("Toyota", "Camry", 2022, "Gasoline");

// Use methods defined in interfaces
basicCar.start(); // Output: Toyota Corolla started.
basicCar.stop(); // Output: Toyota Corolla stopped.

gasolineCar.start(); // Output: Toyota Camry started.
gasolineCar.stop(); // Output: Toyota Camry stopped.
gasolineCar.refuel(); // Output: Toyota Camry is refueling with Gasoline.
