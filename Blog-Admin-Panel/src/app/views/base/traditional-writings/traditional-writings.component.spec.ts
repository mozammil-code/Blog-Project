import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalWritingsComponent } from './traditional-writings.component';

describe('TraditionalWritingsComponent', () => {
  let component: TraditionalWritingsComponent;
  let fixture: ComponentFixture<TraditionalWritingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraditionalWritingsComponent]
    });
    fixture = TestBed.createComponent(TraditionalWritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
