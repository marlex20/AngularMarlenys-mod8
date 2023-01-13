import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralServiceService } from 'src/app/servicio/experiencia-laboral-service.service';

@Component({
  selector: 'app-formuexperiencia-agregar',
  templateUrl: './formuexperiencia-agregar.component.html',
  styleUrls: ['./formuexperiencia-agregar.component.css']
})
export class FormuexperienciaAgregarComponent implements OnInit {
  @Output() onAddExperiencia: EventEmitter<ExperienciaLaboral> = new EventEmitter();

  experienciaForm!: FormGroup;

  constructor(private readonly fb:FormBuilder, private experienciaLaboralService: ExperienciaLaboralServiceService, private activatedRoute: ActivatedRoute, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.experienciaForm = this.initForm();
  }

  onSubmitExperiencia() {
    this.onAddExperiencia.emit(this.experienciaForm.value);
    this.onReset();
  }

  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      image:[''],
      name:['', [Validators.required]],
      title:['', [Validators.required]],
      description:['', [Validators.required]],
      date:['', [Validators.required]],
    })
  }
  onReset(): void {
    this.experienciaForm.reset();
  } 
}
