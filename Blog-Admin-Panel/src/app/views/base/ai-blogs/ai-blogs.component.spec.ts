import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBlogsComponent } from './ai-blogs.component';

describe('AiBlogsComponent', () => {
  let component: AiBlogsComponent;
  let fixture: ComponentFixture<AiBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiBlogsComponent]
    });
    fixture = TestBed.createComponent(AiBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
