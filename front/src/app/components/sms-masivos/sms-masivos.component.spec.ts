import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsMasivosComponent } from './sms-masivos.component';

describe('SmsMasivosComponent', () => {
  let component: SmsMasivosComponent;
  let fixture: ComponentFixture<SmsMasivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsMasivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsMasivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
