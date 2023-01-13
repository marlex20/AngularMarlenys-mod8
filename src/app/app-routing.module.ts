import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './acceso/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormupersonaEditarComponent } from './components/persona/formupersona-editar/formupersona-editar.component';
import { FormuexperienciaEditarComponent } from './components/experiencia/formuexperiencia-editar/formuexperiencia-editar.component';
import { FormueducacionEditarComponent } from './components/educacion/formueducacion-editar/formueducacion-editar.component';
import { FormuproyectoEditarComponent } from './components/proyectos/formuproyecto-editar/formuproyecto-editar.component';
import { FormuredEditarComponent } from './components/redes/formured-editar/formured-editar.component';
import { FormuhabilidadEditarComponent } from './components/habilidades/formuhabilidad-editar/formuhabilidad-editar.component';
import { AuthGuard } from './servicio/auth.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[ AuthGuard]},
  { path: 'formuexperiencia-editar/:id', component: FormuexperienciaEditarComponent, canActivate:[ AuthGuard] },
  { path: 'formueducacion-editar/:id', component: FormueducacionEditarComponent, canActivate:[ AuthGuard] },
  { path: 'formuproyecto-editar/:id', component: FormuproyectoEditarComponent, canActivate:[ AuthGuard] },
  { path: 'formuhabilidad-editar/:id', component: FormuhabilidadEditarComponent, canActivate:[ AuthGuard] },
  { path: 'formupersona-editar/:id', component: FormupersonaEditarComponent, canActivate:[ AuthGuard] },
  { path: 'formured-editar/:id', component: FormuredEditarComponent, canActivate:[ AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
