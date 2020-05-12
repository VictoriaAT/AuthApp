import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(public servicio:AuthService) { 
    servicio.handleAuthentication();
  }


  login(){
    this.servicio.login();
  }


salir(){
  this.servicio.logout();
}
  

}
