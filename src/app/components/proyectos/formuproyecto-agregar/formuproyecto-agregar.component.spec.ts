import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuproyectoAgregarComponent } from './formuproyecto-agregar.component';

describe('FormuproyectoAgregarComponent', () => {
  let component: FormuproyectoAgregarComponent;
  let fixture: ComponentFixture<FormuproyectoAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuproyectoAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuproyectoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
