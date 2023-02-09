import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDatosComponent } from './centro-datos.component';

describe('CentroDatosComponent', () => {
  let component: CentroDatosComponent;
  let fixture: ComponentFixture<CentroDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
