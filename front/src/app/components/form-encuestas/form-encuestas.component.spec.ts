import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEncuestasComponent } from './form-encuestas.component';

describe('FormEncuestasComponent', () => {
  let component: FormEncuestasComponent;
  let fixture: ComponentFixture<FormEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEncuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
