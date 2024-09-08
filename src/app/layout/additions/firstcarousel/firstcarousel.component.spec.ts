import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcarouselComponent } from './firstcarousel.component';

describe('FirstcarouselComponent', () => {
  let component: FirstcarouselComponent;
  let fixture: ComponentFixture<FirstcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
