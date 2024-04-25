import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[] = [
    new Car('Toyota', 'Camry', 2019),
    new Car('Honda', 'Accord', 2020),
    new Car('Ford', 'Fusion', 2018),
  ];

  newCar: Car = new Car('', '', 0);

  onSubmit(form: any) {
    this.cars.push(
      new Car(this.newCar.make, this.newCar.model, this.newCar.year)
    );
    this.newCar = new Car('', '', 0);
    form.reset();
  }

  onDeleteCar(index: number) {
    this.cars.splice(index, 1);
  }
}
