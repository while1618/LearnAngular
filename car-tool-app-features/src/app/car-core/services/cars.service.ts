import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Car } from "../models/car";

@Injectable({
  providedIn: "root",
})
export class CarsService {
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Car[]>("http://localhost:3000/cars");
  }

  one(carId: number) {
    return this.httpClient.get<Car>(
      `http://localhost:3000/cars/${encodeURIComponent(String(carId))}`
    );
  }
}
