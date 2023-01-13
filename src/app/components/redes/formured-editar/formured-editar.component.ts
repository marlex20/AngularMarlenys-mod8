import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesServiceService } from 'src/app/servicio/redes-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formured-editar',
  templateUrl: './formured-editar.component.html',
  styleUrls: ['./formured-editar.component.css']
})
export class FormuredEditarComponent implements OnInit {
  expRedes: Redes = null;
  isLogged = false;

  constructor(private redesService: RedesServiceService, private activatedRoute: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.redesService.detail(id).subscribe(
      data => {
        this.expRedes = data;

      }, err => {
        alert("Error al actualizar red");
        this.router.navigate(['/dashboard']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.redesService.update(id, this.expRedes).subscribe(
      data => {
        alert("Actualización de red exitosa");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Error al actualizar redo");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
