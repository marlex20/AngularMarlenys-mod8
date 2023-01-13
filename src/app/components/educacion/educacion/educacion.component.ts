import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicio/educacion-service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() educacion: Educacion[] = [];
  educacionList: Educacion[] = [];

  constructor(private educacionService: EducacionServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }
  cargarEducacion(): void {
    this.educacionService.lista().subscribe((data) => {
      this.educacionList = data;
    });
  }

  addEducation(educacion: Educacion): void {
    this.educacionService.save(educacion).subscribe(
      (educacion) => {
        alert('Educacion añadida');
        this.cargarEducacion();
      },
      (err) => {
        alert('Error al cargar la educacion');
        this.cargarEducacion();
      }
    );
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  deleteEducacion(id?: number) {
    if (confirm('¿Esta seguro?') && id != undefined) {
      this.educacionService.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
          alert('Educacion eliminada');
        },
        (err) => {
          this.cargarEducacion();
          alert('No se pudo eliminar');
        }
      );
    }
  }

}
