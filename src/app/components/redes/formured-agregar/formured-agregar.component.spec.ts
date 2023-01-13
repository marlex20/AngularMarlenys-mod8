import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuredAgregarComponent } from './formured-agregar.component';

describe('FormuredAgregarComponent', () => {
  let component: FormuredAgregarComponent;
  let fixture: ComponentFixture<FormuredAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuredAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuredAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
