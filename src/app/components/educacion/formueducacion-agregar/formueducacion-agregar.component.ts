import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/servicio/educacion-service.service';

@Component({
  selector: 'app-formueducacion-agregar',
  templateUrl: './formueducacion-agregar.component.html',
  styleUrls: ['./formueducacion-agregar.component.css']
})
export class FormueducacionAgregarComponent implements OnInit {
  
  @Output() onAddEducation: EventEmitter<Educacion> = new EventEmitter();

  educacionForm!: FormGroup;

  constructor(private readonly fb:FormBuilder, private educacionService: EducacionServiceService, private activatedRoute: ActivatedRoute, 
    private router: Router) { }
  
  ngOnInit(): void {
    this.educacionForm = this.initForm();
  }

  onSubmitEducation() {
    this.onAddEducation.emit(this.educacionForm.value);
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
    this.educacionForm.reset();
  } 
}
