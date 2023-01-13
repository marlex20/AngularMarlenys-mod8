import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadServiceService } from 'src/app/servicio/habilidad-service.service';

@Component({
  selector: 'app-formuhabilidad-agregar',
  templateUrl: './formuhabilidad-agregar.component.html',
  styleUrls: ['./formuhabilidad-agregar.component.css']
})
export class FormuhabilidadAgregarComponent implements OnInit {
  @Output() onAddSkill: EventEmitter<Habilidad>  = new EventEmitter(); 

  habilidadForm!: FormGroup;

  constructor(private habilidadService: HabilidadServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.habilidadForm = this.initForm(); 
  }

  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      name:['', [Validators.required]],
      val:['', [Validators.required]],
    })
  }
  onSubmitSkill() {
    this.onAddSkill.emit(this.habilidadForm.value);
    this.onReset();
  }
  onReset(): void {
    this.habilidadForm.reset();
  } 
}
