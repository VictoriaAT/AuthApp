import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile:any;

  constructor(private servicio:AuthService) { }

  ngOnInit() {
    if (this.servicio.userProfile) {
      this.profile = this.servicio.userProfile;
    } else {
      this.servicio.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
