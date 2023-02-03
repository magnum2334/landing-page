import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDesarrolloSocialComponent } from './modal-desarrollo-social.component';

describe('ModalDesarrolloSocialComponent', () => {
  let component: ModalDesarrolloSocialComponent;
  let fixture: ComponentFixture<ModalDesarrolloSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDesarrolloSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDesarrolloSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
