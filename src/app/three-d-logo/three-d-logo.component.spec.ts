import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDLogoComponent } from './three-d-logo.component';

describe('ThreeDLogoComponent', () => {
  let component: ThreeDLogoComponent;
  let fixture: ComponentFixture<ThreeDLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
