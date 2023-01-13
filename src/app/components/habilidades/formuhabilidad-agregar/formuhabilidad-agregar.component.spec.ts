import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuhabilidadAgregarComponent } from './formuhabilidad-agregar.component';

describe('FormuhabilidadAgregarComponent', () => {
  let component: FormuhabilidadAgregarComponent;
  let fixture: ComponentFixture<FormuhabilidadAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuhabilidadAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuhabilidadAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
