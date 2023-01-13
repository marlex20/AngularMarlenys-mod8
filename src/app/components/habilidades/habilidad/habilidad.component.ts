import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadServiceService } from 'src/app/servicio/habilidad-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  @Input() habilidad: Habilidad[] = [];

  habilidades: Habilidad[] = [];
  isLogged = false;

  constructor(private habilidadService: HabilidadServiceService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    this.cargarHabilidad();
  }
  cargarHabilidad(): void {
    this.habilidadService.lista().subscribe((data) => {
      this.habilidades = data;
    });
  }

  addSkill(habilidad: Habilidad): void {
    this.habilidadService.save(habilidad).subscribe(
      (habilidad) => {
        alert('habilidad añadida');
        this.cargarHabilidad();
      },
      (err) => {
        alert('Error al cargar la habilidad');
        this.cargarHabilidad();
      }
    );
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  deleteHabilidad(id?: number) {
    if (confirm('¿Esta seguro?') && id != undefined) {
      this.habilidadService.delete(id).subscribe(
        (data) => {
          this.cargarHabilidad();
          alert('Habilidad eliminada');
        },
        (err) => {
          this.cargarHabilidad();
          alert('No se pudo eliminar');
        }
      );
    }
  }


}
