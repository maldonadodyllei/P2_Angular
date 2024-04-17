import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  CarForm!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.CarForm = this.fb.group({
      seriesNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      category: new FormControl('', Validators.required),
      image: new FormControl(
        'https://www.astonmartinwashingtondc.com/wp-content/uploads/aston-martin-dbs-770-ultimate-coupe-1024x728.png',
        Validators.required
      ),
      cv: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      maxSpeed: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      accelerationTime: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]+)?$'),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[0-9]*$'),
      ]),
      available: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.CarForm.valid) {
      this.carsService.carsL.set([this.CarForm.value]);
      this.CarForm.reset();
    }
  }
}
