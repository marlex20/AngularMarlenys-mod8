import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormueducacionEditarComponent } from './formueducacion-editar.component';

describe('FormueducacionEditarComponent', () => {
  let component: FormueducacionEditarComponent;
  let fixture: ComponentFixture<FormueducacionEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormueducacionEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormueducacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
