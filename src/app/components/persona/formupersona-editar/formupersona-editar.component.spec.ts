import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormupersonaEditarComponent } from './formupersona-editar.component';

describe('FormupersonaEditarComponent', () => {
  let component: FormupersonaEditarComponent;
  let fixture: ComponentFixture<FormupersonaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormupersonaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormupersonaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
