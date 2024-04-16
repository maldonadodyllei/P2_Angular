import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../interfaces/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carListSubject = new BehaviorSubject<Car[]>([]);
  carList$ = this.carListSubject.asObservable();
  constructor() { 

    const carList: Car[] = [
      {
        brand: 'AstonMartin',
        model: 'DBS 770 Ultimate',
        category: 'Coupe',
        image:'https://www.astonmartinwashingtondc.com/wp-content/uploads/aston-martin-dbs-770-ultimate-coupe-1024x728.png',
        cv: 770,
        maxSpeed: 340,
        accelerationTime: 3.4,
        price: 314000,
        available: true
      },
      {
        brand: 'AstonMartin',
        model: 'DBS Volante',
        category: 'Cabriolet',
        image:'https://www.astonmartinwashingtondc.com/wp-content/uploads/aston-martin-dbs-volante-1536x1091.png',
        cv: 715,
        maxSpeed: 339,
        accelerationTime: 3.4,
        price: 337871,
        available: false
      },
      {
        brand: 'AstonMartin',
        model: 'DB11',
        category: 'Coupe',
        image:'https://www.astonmartinboston.com/wp-content/uploads/rXq4Oh0U.png',
        cv: 600,
        maxSpeed: 335,
        accelerationTime: 3.9,
        price: 204000,
        available: true
      },
      {
        brand: 'AstonMartin',
        model: 'DBS Coupe',
        category: 'Coupe',
        image:'https://www.astonmartinboston.com/wp-content/uploads/aUHnsBmw.png',
        cv: 715,
        maxSpeed: 339,
        accelerationTime: 3.4,
        price: 285826,
        available: true
      },
    ];

    this.carListSubject.next(carList);
  }
}
