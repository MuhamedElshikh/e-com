import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScndcarouselComponent } from './scndcarousel.component';

describe('ScndcarouselComponent', () => {
  let component: ScndcarouselComponent;
  let fixture: ComponentFixture<ScndcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScndcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScndcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
