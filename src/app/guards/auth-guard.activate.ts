import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, filter, map, reduce } from 'rxjs';
import { UserService } from '../user/user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean> {  ///working with stream of data
    return this.userService.user$.pipe(
      filter((user) => user !== undefined),
      map((user) => {
        if (!user) {
          this.router.navigateByUrl('/')
          return false
        }
        return true
      })
    )


  }

}