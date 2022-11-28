import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationAdminComponent } from './presentation-admin.component';

describe('PresentationAdminComponent', () => {
  let component: PresentationAdminComponent;
  let fixture: ComponentFixture<PresentationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
