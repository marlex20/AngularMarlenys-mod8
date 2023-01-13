import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './components/experiencia/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './acceso/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navegacion/navbar/navbar.component';
import { LogoComponent } from './components/navegacion/logo/logo.component';
import { BotonloginComponent } from './components/navegacion/botonlogin/botonlogin.component';
import { HomeComponent } from './components/home/home.component';
import { IniciosesionComponent } from './acceso/iniciosesion/iniciosesion.component';
import { RegistrarseComponent } from './acceso/registrarse/registrarse.component';
import { ListaComponent } from './components/navegacion/lista/lista.component';
import { BotonlogoutComponent } from './components/navegacion/botonlogout/botonlogout.component';
import { FormulistaComponent } from './acceso/formulista/formulista.component';
import { BotonreturnComponent } from './components/navegacion/botonreturn/botonreturn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { interceptorProvider } from './servicio/interceptor-service';
import { PersonaComponent } from './components/persona/persona/persona.component';
import { FormupersonaAgregarComponent } from './components/persona/formupersona-agregar/formupersona-agregar.component';
import { FormupersonaEditarComponent } from './components/persona/formupersona-editar/formupersona-editar.component';
import { FormuhabilidadAgregarComponent } from './components/habilidades/formuhabilidad-agregar/formuhabilidad-agregar.component';
import { EducacionComponent } from './components/educacion/educacion/educacion.component';
import { FormueducacionAgregarComponent } from './components/educacion/formueducacion-agregar/formueducacion-agregar.component';
import { FormueducacionEditarComponent } from './components/educacion/formueducacion-editar/formueducacion-editar.component';
import { FormuexperienciaAgregarComponent } from './components/experiencia/formuexperiencia-agregar/formuexperiencia-agregar.component';
import { FormuexperienciaEditarComponent } from './components/experiencia/formuexperiencia-editar/formuexperiencia-editar.component';
import { FormuproyectoAgregarComponent } from './components/proyectos/formuproyecto-agregar/formuproyecto-agregar.component';
import { FormuproyectoEditarComponent } from './components/proyectos/formuproyecto-editar/formuproyecto-editar.component';
import { FormuredAgregarComponent } from './components/redes/formured-agregar/formured-agregar.component';
import { FormuredEditarComponent } from './components/redes/formured-editar/formured-editar.component';
import { RedComponent } from './components/redes/red/red.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { HabilidadComponent } from './components/habilidades/habilidad/habilidad.component';
import { FormuhabilidadEditarComponent } from './components/habilidades/formuhabilidad-editar/formuhabilidad-editar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    DashboardComponent,
    FooterComponent,
    ErrorComponent,
    ListaComponent,
    FormulistaComponent,
    NavbarComponent,
    LoginComponent,
    IniciosesionComponent,
    RegistrarseComponent, 
    LogoComponent,
    BotonloginComponent,
    BotonreturnComponent,
    BotonlogoutComponent, 
    ProyectoComponent,
    FormuproyectoAgregarComponent,
    FormuproyectoEditarComponent,   
    ExperienciaComponent,
    FormuexperienciaAgregarComponent,
    FormuexperienciaEditarComponent,
    PersonaComponent,
    FormupersonaAgregarComponent,
    FormupersonaEditarComponent,    
    EducacionComponent,
    FormueducacionAgregarComponent,
    FormueducacionEditarComponent,
    RedComponent,
    FormuredAgregarComponent,
    FormuredEditarComponent,
    HabilidadComponent,
    FormuhabilidadAgregarComponent,
    FormuhabilidadEditarComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  
  providers: [ interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
