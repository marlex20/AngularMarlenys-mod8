import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuproyectoEditarComponent } from './formuproyecto-editar.component';

describe('FormuproyectoEditarComponent', () => {
  let component: FormuproyectoEditarComponent;
  let fixture: ComponentFixture<FormuproyectoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuproyectoEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuproyectoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
