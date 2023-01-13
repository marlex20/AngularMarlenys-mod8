import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuexperienciaAgregarComponent } from './formuexperiencia-agregar.component';

describe('FormuexperienciaAgregarComponent', () => {
  let component: FormuexperienciaAgregarComponent;
  let fixture: ComponentFixture<FormuexperienciaAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuexperienciaAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuexperienciaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
