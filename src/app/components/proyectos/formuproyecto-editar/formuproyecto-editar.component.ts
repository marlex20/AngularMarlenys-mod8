import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/servicio/proyecto-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formuproyecto-editar',
  templateUrl: './formuproyecto-editar.component.html',
  styleUrls: ['./formuproyecto-editar.component.css']
})
export class FormuproyectoEditarComponent implements OnInit {
  expProyecto: Proyecto = null; 
  isLogged= false;

  constructor(private proyectoService: ProyectoServiceService, private activatedRoute: ActivatedRoute, 
    private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.proyectoService.detail(id).subscribe(
      data => {
        this.expProyecto = data;
        
      }, err => {
        alert("Error al actualizar proyecto");
        this.router.navigate(['/dashboard']);
      }
    )
  }
  
  onUpdate():void {
    const  id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id, this.expProyecto).subscribe(
      data => {
        alert("Actualización de proyecto Exitosa");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Error al actualizar proyecto");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
