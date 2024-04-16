import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Car } from '../../interfaces/car.model';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private carsService: CarsService) {}

  CarForm = new FormGroup({
    seriesNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    model: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    cv: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    maxSpeed: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    accelerationTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    available: new FormControl('', Validators.required),

  });
}
