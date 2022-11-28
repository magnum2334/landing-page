import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdminPresentationComponent } from './modal-admin-presentation.component';

describe('ModalAdminPresentationComponent', () => {
  let component: ModalAdminPresentationComponent;
  let fixture: ComponentFixture<ModalAdminPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdminPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdminPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
