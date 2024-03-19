import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { Shoe } from 'src/interfaces/shoe';
@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoeList: Shoe[] = []
  constructor(private shoeService: ShoesService) {

  }
  ngOnInit(): void {
    this.shoeService.getAllShoes().subscribe({

      next: (shoes) => {
        console.log(shoes);
        
        this.shoeList = shoes
      },
      error: (err)=>{
        console.log(`Error: ${err}`)
      }

    }
    )
    
  }

  
}
