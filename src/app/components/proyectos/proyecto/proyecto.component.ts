import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/servicio/proyecto-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto: Proyecto[] = [];

  proyectosList: Proyecto[] = [];

  constructor(private proyectoService: ProyectoServiceService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }
  cargarProyecto(): void {
    this.proyectoService.lista().subscribe((data) => {
      this.proyectosList = data;
    });
  }

  addProject(proyecto: Proyecto): void {
    this.proyectoService.save(proyecto).subscribe(
      (proyecto) => {
        alert('Proyecto añadido');
        this.cargarProyecto();
      },
      (err) => {
        alert('Error al cargar proyecto');
        this.cargarProyecto();
      }
    );
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  deleteProyecto(id?: number) {
    if (confirm('¿Esta seguro?') && id != undefined) {
      this.proyectoService.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
          alert('Proyecto eliminado');
        },
        (err) => {
          this.cargarProyecto();
          alert('No se pudo eliminar');
        }
      );
    }
  }
}


