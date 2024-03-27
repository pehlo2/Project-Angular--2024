import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Shoe, ShoePaginated } from 'src/interfaces/shoe';



@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  constructor(private http: HttpClient) { }
  shoe: Shoe | undefined
  shoeOwnerId: string | undefined
  searchQuery: string = ""



  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  getSearchQuery() {
    return this.searchQuery;
  }
  ///////////////

  updateShoe(shoeId: string, data: {}) {
    return this.http.put<Shoe>(`/api/data/shoes/${shoeId}`, data);

  }
  getAllShoes(pageIndex: number, searchData: string) {
    return this.http.get<ShoePaginated>(`/api/data/shoes?page=${pageIndex}&search=${searchData}`);
  }
  getOneShoe(shoeId: string) {
    return this.http.get<Shoe>(`/api/data/shoes/${shoeId}`).pipe(tap(shoe => {
      this.shoeOwnerId = shoe.ownerId
    }))
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
    description: string,
    ownerId: string
  ) {
    return this.http.post<Shoe>(`/api/data/shoes/create`, {
      brand,
      model,
      size,
      gender,
      price,
      image,
      description,
      ownerId
    });

  }
}


