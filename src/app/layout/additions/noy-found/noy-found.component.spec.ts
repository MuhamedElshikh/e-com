import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoyFoundComponent } from './noy-found.component';

describe('NoyFoundComponent', () => {
  let component: NoyFoundComponent;
  let fixture: ComponentFixture<NoyFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoyFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoyFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
