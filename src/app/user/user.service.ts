import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {




  private user$$ = new BehaviorSubject<User | undefined>(undefined)
  public user$ = this.user$$.asObservable()


  user: User | undefined

  get isLogged(): boolean {
    return !!this.user

  }

  subsription: Subscription

  constructor(private http: HttpClient,) {
    this.subsription = this.user$.subscribe((user) => {
      this.user = user
    })

  }


  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', { email, password }).pipe(tap(user => this.user$$.next(user)))
  }

  register(email: string, username: string, password: string, rePassword: string) {
    return this.http.post<User>('/api/users/register', { username, email, password, rePassword }).pipe(tap(user => this.user$$.next(user)))
  }

  logout() {
    return this.http.post<User>('/api/users/logout', {}).pipe(tap(() => this.user$$.next(undefined)))
  }

  getUserInfo() {
    return this.http.get<User>('/api/users/profile').pipe(tap((user) => this.user$$.next(user)))
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe()
  }
}
