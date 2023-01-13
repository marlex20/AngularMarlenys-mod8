import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuexperienciaEditarComponent } from './formuexperiencia-editar.component';

describe('FormuexperienciaEditarComponent', () => {
  let component: FormuexperienciaEditarComponent;
  let fixture: ComponentFixture<FormuexperienciaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuexperienciaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuexperienciaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
