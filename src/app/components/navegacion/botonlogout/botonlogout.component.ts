import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-botonlogout',
  templateUrl: './botonlogout.component.html',
  styleUrls: ['./botonlogout.component.css']
})
export class BotonlogoutComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogout(): void {
    this.tokenService.logOut();      
    window.location.reload();
    this.router.navigate(['/home']);
  }

}
