import { Component, OnInit } from '@angular/core';
import { CardCarComponent } from './card-car/card-car.component';
import { Car } from '../../interfaces/car.model';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CardCarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{
  carList: Car[] = [];
  constructor(
    public carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.carList = this.carsService.carsL();
    console.log(this.carList);
  }
}
