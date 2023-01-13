import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesServiceService } from 'src/app/servicio/redes-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  @Input() red: Redes[] = [];

  redList: Redes[] = [];

  constructor(private redesService: RedesServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarRedes();
  }
  cargarRedes(): void {
    this.redesService.lista().subscribe((data) => {
      this.redList = data;
    });
  }

  addNetwork(red: Redes): void {
    this.redesService.save(red).subscribe(
      (redes) => {
        alert('Red añadida');
        this.cargarRedes();
      },
      (err) => {
        alert('Error al cargar la Red');
        this.cargarRedes();
      }
    );
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  deleteRedes(id?: number) {
    if (confirm('¿Esta seguro?') && id != undefined) {
      this.redesService.delete(id).subscribe(
        (data) => {
          this.cargarRedes();
          alert('Red eliminada');
        },
        (err) => {
          this.cargarRedes();
          alert('No se pudo eliminar');
        }
      );
    }
  }
}
