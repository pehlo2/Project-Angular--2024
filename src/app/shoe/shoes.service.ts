import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shoe } from 'src/interfaces/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {



  constructor(private http: HttpClient) { }

  updateShoe(shoeId: string, data: {}) {
    return this.http.put<Shoe>(`/api/data/shoes/${shoeId}`, data);

  }
  getAllShoes() {
    return this.http.get<Shoe[]>(`/api/data/shoes`);
  }
  getOneShoe(shoeId: string) {
    return this.http.get<Shoe>(`/api/data/shoes/${shoeId}`);
  }

  removeShoe(shoeId: string) {
    return this.http.delete<Shoe>(`/api/data/shoes/${shoeId}`);
  }

  addShoe(
    brand: string,
    model: string,
    size: string,
    gender: string,
    price: string,
    image: string,
    description: string) {
    return this.http.post<Shoe>(`/api/data/shoes/create`, {
      brand,
      model,
      size,
      gender,
      price,
      image,
      description,
    });

  }
}


