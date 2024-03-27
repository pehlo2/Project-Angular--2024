import { Component } from '@angular/core';
import { ErrorService } from './core/error/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-Softuni-2024';
  constructor(private errorService: ErrorService) { }


  get ifError() {
    return   this.errorService.ifError
}
}