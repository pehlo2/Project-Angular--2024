import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Shoe } from 'src/interfaces/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http: HttpClient) { }
 

  getShoeS(){
    const { appUrl } = environment;
    return this.http.get<Shoe[]>(`${appUrl}/data/shoes`);
  }

  // getShoe(id:string) {
  //   const { appUrl } = environment;
  //   return this.http.get<Shoe>(`${appUrl}/shoes/${id}`);

  // }
}
