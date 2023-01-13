import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { RedesServiceService } from 'src/app/servicio/redes-service.service';

@Component({
  selector: 'app-formured-agregar',
  templateUrl: './formured-agregar.component.html',
  styleUrls: ['./formured-agregar.component.css']
})
export class FormuredAgregarComponent implements OnInit {

  @Output() onAddNetwork: EventEmitter<Redes> = new EventEmitter();
  
  redForm: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private redesService: RedesServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
   
  ngOnInit(): void {
      this.redForm = this.initForm();   
  }

  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      name:['', [Validators.required]],
      logo:['', [Validators.required]],
    })
  }
  onSubmitNetwork() {
    this.onAddNetwork.emit(this.redForm.value);
    this.onReset();
  }
  onReset(): void {
    this.redForm.reset();
  } 
}
