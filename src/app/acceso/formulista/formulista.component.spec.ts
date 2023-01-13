import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulistaComponent } from './formulista.component';

describe('FormulistaComponent', () => {
  let component: FormulistaComponent;
  let fixture: ComponentFixture<FormulistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
