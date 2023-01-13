import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuhabilidadEditarComponent } from './formuhabilidad-editar.component';

describe('FormuhabilidadEditarComponent', () => {
  let component: FormuhabilidadEditarComponent;
  let fixture: ComponentFixture<FormuhabilidadEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuhabilidadEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuhabilidadEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
