class Vehicle {
  // Public properties accessible from anywhere
  public make: string;
  public model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Public method accessible from anywhere
  public start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  // Protected method accessible within the class and its subclasses
  protected stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }

  // Private method accessible only within the class
  private honk() {
    console.log(`${this.make} ${this.model} honked.`);
  }
}

class Car extends Vehicle {
  // Public property accessible from anywhere
  public fuelType: string;

  constructor(make: string, model: string, year: number, fuelType: string) {
    super(make, model, year);
    this.fuelType = fuelType;
  }

  // Public method accessible from anywhere
  public refuel() {
    console.log(
      `${this.make} ${this.model} is refueling with ${this.fuelType}.`
    );
  }

  // Example of using protected method from the parent class
  public stopCar() {
    // Can access the protected method stop() from the parent class
    this.stop();
  }

  // Example of using private method from the parent class (won't work)
  public honkCar() {
    // Can't access the private method honk() from the parent class
    // this.honk();
    console.log("Sorry, can't honk the car.");
  }
}

// Creating an instance of Car
const car = new Car("Toyota", "Camry", 2023, "Gasoline");

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
