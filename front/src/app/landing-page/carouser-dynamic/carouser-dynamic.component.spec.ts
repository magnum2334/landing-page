import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouserDynamicComponent } from './carouser-dynamic.component';

describe('CarouserDynamicComponent', () => {
  let component: CarouserDynamicComponent;
  let fixture: ComponentFixture<CarouserDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouserDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouserDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
