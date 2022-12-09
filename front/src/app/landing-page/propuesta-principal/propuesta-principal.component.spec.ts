import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaPrincipalComponent } from './propuesta-principal.component';

describe('PropuestaPrincipalComponent', () => {
  let component: PropuestaPrincipalComponent;
  let fixture: ComponentFixture<PropuestaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropuestaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
