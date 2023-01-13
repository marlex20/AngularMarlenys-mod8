import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoServiceService } from 'src/app/servicio/proyecto-service.service';

@Component({
  selector: 'app-formuproyecto-agregar',
  templateUrl: './formuproyecto-agregar.component.html',
  styleUrls: ['./formuproyecto-agregar.component.css']
})
export class FormuproyectoAgregarComponent implements OnInit {
  @Output() onAddProject: EventEmitter<Proyecto> = new EventEmitter();

  proyectoForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private proyectoService: ProyectoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
  }
  onSubmitProject() {
    this.onAddProject.emit(this.proyectoForm.value);
    this.onReset();
  }
  initForm(): FormGroup {
    return this.fb.group({
      id: [''],
      image: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }
  onReset(): void {
    this.proyectoForm.reset();
  }
}

