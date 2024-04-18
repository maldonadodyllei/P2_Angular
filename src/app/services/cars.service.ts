import { Injectable, signal } from '@angular/core';
import { Car } from '../interfaces/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsL = signal<Car[]>([]);
  private carList: Car[] = [];
  constructor() { }

  addCar(car: Car): void {
    this.carList.push(car);
  }

  checkCarByModel(model: string): boolean {
     if (this.carList.find(car => car.model === model)) {
       return true;
     }
      return false;
  }

  updateCar(coche: Car): void {
    if (!this.carList.find(car => car.seriesNumber === coche.seriesNumber)) {
      this.addCar(coche);
      return;
    }else{
      this.updateCarList(coche);
    }
  }

  updateCarList(car: Car): void {
    this.carList = this.carList.map(coche => {
      if (coche.seriesNumber === car.seriesNumber) {
        return car;
      }
      return coche;
    });
  }
}
