import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-formupersona-editar',
  templateUrl: './formupersona-editar.component.html',
  styleUrls: ['./formupersona-editar.component.css']
})
export class FormupersonaEditarComponent implements OnInit {
  isLogged = false;
  persona: Persona = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaService.detail(id).subscribe(data => {
      this.persona = data;
    });
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert("Actualización de informacion Exitosa");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Error al actualizar Informacion");
        this.router.navigate(['/dashboard']);
      }
    )
  }
}
