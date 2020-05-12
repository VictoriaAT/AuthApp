import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

 canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{

  if(this.auth.isAuthenticated()){
    console.log("Pasó el guard");
    return true;
  }else{
    console.log("Bloqueado por el guard");
    return false;
  }
  
}
}
