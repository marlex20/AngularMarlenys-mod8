import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-formupersona-agregar',
  templateUrl: './formupersona-agregar.component.html',
  styleUrls: ['./formupersona-agregar.component.css']
})
export class FormupersonaAgregarComponent implements OnInit {
  @Output() onAddInfo: EventEmitter<Persona>  = new EventEmitter(); 
  infoForm: FormGroup;
 
  constructor(private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.infoForm = this.initForm();
   // this.redForm = this.initForm(); 
  }
  private buildForm() {
    this.infoForm = new FormGroup({
      id: new FormControl(''),
      backImage: new FormControl(''),
      name: new FormControl(''),
      title: new FormControl(''),
      about: new FormControl(''),      
      photo: new FormControl(''),
    });
  }
  initForm(): FormGroup  {
    return this.fb.group({
      id:[''],
      backImage:['', [Validators.required]],
      name:['', [Validators.required]],
      title:['', [Validators.required]],
      about:['', [Validators.required]],
      photo:['', [Validators.required]],
         
      
    })
  }
  onReset(): void {
    this.infoForm.reset();
  }
  onSubmitInfo() {
    this.onAddInfo.emit(this.infoForm.value);
    this.onReset();
  }



//   @Output() onAddInfo: EventEmitter<Persona>  = new EventEmitter(); 
  
//   backImage: string = '';
//   name: string = '';
//   title: string = '';
//   photo: string = '';
//   about: string = '';
  

// infoForm!: Persona;

//    constructor(private personaService: PersonaService,
//      private activatedRoute: ActivatedRoute, private readonly fb:FormBuilder,
//      private router: Router) { }
 
     
//   ngOnInit(): void {
//    // this.infoForm = this.initForm(); 
//   }

//   // initForm(): FormGroup  {
//   //   return this.fb.group({
      
//   //     id:[''],
//   //     backImage:[''],
//   //     name:['' ],
//   //     title:['' ],
//   //     about:['' ],
//   //     photo:[''],
//   //   })
//   // }
//   onSubmitInfo() {
//     const persona = new Persona (this.backImage, this.name, this.title, this.photo, this.about);
//     this.onAddInfo.emit(persona);
//    // this.onAddInfo.emit(this.infoForm.value);
//     this.onReset();
//   }
//   onReset(): void {
//     this.backImage = '',
//     this.name = '';
//     this.title = '';
//     this.about= '';
//     this.photo= '';
   
//   } 
}
