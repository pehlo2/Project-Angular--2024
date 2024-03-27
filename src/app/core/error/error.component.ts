import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMessage: string = '';
  constructor(private errorService: ErrorService) { }


  ngOnInit(): void {
    this.errorService.apiError$.subscribe(errorMessage => {
      this.errorMessage = errorMessage
    })
  }
  clearErrorMessage() {
    this.errorService.errorMessage= ''
  }

}