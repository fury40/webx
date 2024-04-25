// class Car {
//   public start() {
//     console.log("Car Started!");
//   }
//   protected cold_start() {
//     console.log("Engine is drinking oil :)");
//   }
//   private documents = "secret";

//   protected read_docs() {
//     console.log(this.documents);
//   }
// }

// class Ready extends Car {
//   public license() {
//     this.read_docs();
//   }
//   public go() {
//     this.cold_start();
//   }
// }

// const BMW = new Car();
// const lesgo = new Ready();

// // For Public, start() from Car
// BMW.start();

// // For Protected, execute cold_start() directly from Car because it is protected.
// lesgo.go();

// // Cannot access documents directly from Car because it is protected.
// // console.log(BMW.documents);

// console.log(lesgo.license());
