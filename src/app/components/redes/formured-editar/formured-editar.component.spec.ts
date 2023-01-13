import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuredEditarComponent } from './formured-editar.component';

describe('FormuredEditarComponent', () => {
  let component: FormuredEditarComponent;
  let fixture: ComponentFixture<FormuredEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuredEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuredEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
