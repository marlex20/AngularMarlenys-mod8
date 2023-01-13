import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralServiceService } from 'src/app/servicio/experiencia-laboral-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formuexperiencia-editar',
  templateUrl: './formuexperiencia-editar.component.html',
  styleUrls: ['./formuexperiencia-editar.component.css']
})
export class FormuexperienciaEditarComponent implements OnInit {
  expExperiencia: ExperienciaLaboral = null;
  isLogged = false;

  constructor(private experienciaLaboralService: ExperienciaLaboralServiceService, private activatedRoute: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.experienciaLaboralService.detail(id).subscribe(
      data => {
        this.expExperiencia = data;

      }, err => {
        alert("Error al actualizar experiencia laboral");
        this.router.navigate(['/dashboard']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaLaboralService.update(id, this.expExperiencia).subscribe(
      data => {
        alert("Actualización de experiencia laboral exitosa");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Error al actualizar experiencia laboral");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
