import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private apiError$$ = new BehaviorSubject<string>("");
  public apiError$ = this.apiError$$.asObservable();
  errorMessage = ""
  constructor() { }
  get ifError() {
    return this.errorMessage !== ''
  }

  setErrorMessage(errorMessage: string): void {
    this.errorMessage = errorMessage
    setTimeout(() => {
      this.errorMessage = ''
    }, 5000);
    this.apiError$$.next(errorMessage);
  }
  
}
