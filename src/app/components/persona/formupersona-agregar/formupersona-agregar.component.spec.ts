import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormupersonaAgregarComponent } from './formupersona-agregar.component';

describe('FormupersonaAgregarComponent', () => {
  let component: FormupersonaAgregarComponent;
  let fixture: ComponentFixture<FormupersonaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormupersonaAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormupersonaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
