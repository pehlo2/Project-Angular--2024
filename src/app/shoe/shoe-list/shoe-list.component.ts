import { Component, Input, OnDestroy, OnInit, numberAttribute } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { Shoe, ShoePaginated } from 'src/interfaces/shoe';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  // shoeList: Shoe[] = []
  response: ShoePaginated | undefined

  @Input({ transform: numberAttribute })
  pageSize: number | undefined
  @Input({ transform: numberAttribute })
  length: number | undefined
  searchData: string = ""

  constructor(private shoeService: ShoesService, private activeRoute: ActivatedRoute) {

  }

  

  ngOnInit(): void {

    //this.searchData = this.activeRoute.snapshot.queryParams['search']
    this.activeRoute.queryParams.subscribe(params => {
      this.searchData = params['search'] ?? ""
      this.getAllShoe()
    })


  }




  getAllShoe() {

    this.shoeService.getAllShoes(1, this.searchData).subscribe({

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

    this.shoeService.getAllShoes(event.pageIndex + 1, this.searchData).subscribe({
      next: (response) => {
        this.response = response
      },
      error: (err) => {
        console.log(`Error: ${err}`)
      }

    })

  }

}
