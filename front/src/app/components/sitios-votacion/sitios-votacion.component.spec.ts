import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosVotacionComponent } from './sitios-votacion.component';

describe('SitiosVotacionComponent', () => {
  let component: SitiosVotacionComponent;
  let fixture: ComponentFixture<SitiosVotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitiosVotacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitiosVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
