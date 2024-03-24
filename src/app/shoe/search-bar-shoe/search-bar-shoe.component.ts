import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ShoesService } from '../shoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-shoe',
  templateUrl: './search-bar-shoe.component.html',
  styleUrls: ['./search-bar-shoe.component.css']
})
export class SearchBarShoeComponent {

  constructor(private fb: FormBuilder,private router: Router) {

  }
  form = this.fb.group({
    search:[""]
  })

  getSearch() { 
    const searchData = this.form.value.search;
    if(this.form.value.search){
      this.router.navigate(['/catalog'], { queryParams: { search: searchData } })
    }
    
  }
}