import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralServiceService } from 'src/app/servicio/experiencia-laboral-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Input() experiencia: ExperienciaLaboral[] = [];

  experienciaList: ExperienciaLaboral[] = [];

  constructor(
    private experienciaLaboralService: ExperienciaLaboralServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarExperiencia();
  }
  cargarExperiencia(): void {
    this.experienciaLaboralService.lista().subscribe((data) => {
      this.experienciaList = data;
    });
  }

  addExperiencia(experiencia: ExperienciaLaboral): void {
    this.experienciaLaboralService.save(experiencia).subscribe(
      (experiencia) => {
        alert('Experiencia Laboral añadida');
        this.cargarExperiencia();
      },
      (err) => {
        alert('Error al cargar la experiencia');
        this.cargarExperiencia();
      }
    );
  }
  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  deleteExperiencia(id?: number) {
    if (confirm('¿Esta seguro?') && id != undefined) {
      this.experienciaLaboralService.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
          alert('Experiencia eliminada');
        },
        (err) => {
          this.cargarExperiencia();
          alert('No se pudo eliminar');
        }
      );
    }
  }
  
}


