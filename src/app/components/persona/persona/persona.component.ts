import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona = new Persona("","","","","");

  isLogged = false;
   constructor(private personaService:PersonaService, private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }   

  ngOnInit(): void {
      this.cargarInfo();
      if(this.tokenService.getToken()){
        this.isLogged = true;
        } else {
          this.isLogged = false;
      }
  }

  cargarInfo(): void {
    this.personaService.detail(1).subscribe(data => {
      this.personas = data;
    });

  }

  addInfo(persona: Persona): void {
     this.personaService.save(persona).subscribe(
      persona => {
        alert('Información añadida');
        this.cargarInfo();
      }, err => {
        alert('Error al cargar la información');
        this.cargarInfo();
      }
    );     
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

}
