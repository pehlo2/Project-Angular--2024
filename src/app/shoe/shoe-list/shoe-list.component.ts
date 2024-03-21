import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { Shoe, ShoePaginated } from 'src/interfaces/shoe';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoeList: Shoe[] = []
  response: ShoePaginated | undefined

  @Input({ transform: numberAttribute })
  pageSize: number | undefined
  @Input({ transform: numberAttribute })
  length: number | undefined




  constructor(private shoeService: ShoesService) {

  }
  ngOnInit(): void {
    this.shoeService.getAllShoes(1).subscribe({

      next: (response) => {
        this.response = response
      },
      error: (err) => {
        console.log(`Error: ${err}`)
      }

    }
    )

  }

  onPageChange(event: PageEvent) {
    console.log(event);
    
    this.shoeService.getAllShoes(event.pageIndex+1).subscribe({
      next: (response) => {
        this.response = response
      },
      error: (err) => {
        console.log(`Error: ${err}`)
      }

    })

  }

}
