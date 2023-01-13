import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  nuevoUsuario: NuevoUsuario = null;

  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';

  registerForm: NuevoUsuario;

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onEnviar(nuevoUsuario: NuevoUsuario): void {
    const nuevo = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);

    this.authService.register(nuevo).subscribe(
      persona => {
        alert('Usuario creado con exito');
        window.location.reload();
      }, err => {
        alert('Error crear usuario');
        window.location.reload();
      }
    );
  }
}



