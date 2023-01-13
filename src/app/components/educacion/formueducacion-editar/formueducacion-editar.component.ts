import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicio/educacion-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formueducacion-editar',
  templateUrl: './formueducacion-editar.component.html',
  styleUrls: ['./formueducacion-editar.component.css']
})
export class FormueducacionEditarComponent implements OnInit {
  expEducacion: Educacion = null;
  isLogged = false;

  constructor(private educacionService: EducacionServiceService, private activatedRoute: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.educacionService.detail(id).subscribe(
      data => {
        this.expEducacion = data;

      }, err => {
        alert("Error al actualizar educación");
        this.router.navigate(['/dashboard']);
      }
    )
  }
  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(id, this.expEducacion).subscribe(
      data => {
        alert("Actualización de educación Exitosa");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Error al actualizar educacion");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
