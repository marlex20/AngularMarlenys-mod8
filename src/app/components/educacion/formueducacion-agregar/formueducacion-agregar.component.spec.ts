import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormueducacionAgregarComponent } from './formueducacion-agregar.component';

describe('FormueducacionAgregarComponent', () => {
  let component: FormueducacionAgregarComponent;
  let fixture: ComponentFixture<FormueducacionAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormueducacionAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormueducacionAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
