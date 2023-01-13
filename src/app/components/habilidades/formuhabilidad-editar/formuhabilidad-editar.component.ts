import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadServiceService } from 'src/app/servicio/habilidad-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formuhabilidad-editar',
  templateUrl: './formuhabilidad-editar.component.html',
  styleUrls: ['./formuhabilidad-editar.component.css']
})
export class FormuhabilidadEditarComponent implements OnInit {

  expHab: Habilidad = null;
  isLogged = false;

  constructor(private habilidadService: HabilidadServiceService, private activatedRoute: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.habilidadService.detail(id).subscribe(
      data => {
        this.expHab = data;

      }, err => {
        alert("Error al actualizar habilidad");
        this.router.navigate(['/dashboard']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.update(id, this.expHab).subscribe(
      data => {
        alert("Actualización de habilidad Exitosa");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Error al actualizar habilidad");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
