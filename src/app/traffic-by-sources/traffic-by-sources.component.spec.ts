import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficBySourcesComponent } from './traffic-by-sources.component';

describe('TrafficBySourcesComponent', () => {
  let component: TrafficBySourcesComponent;
  let fixture: ComponentFixture<TrafficBySourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficBySourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficBySourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
