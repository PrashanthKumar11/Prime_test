import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplyComponent } from './disply.component';

describe('DisplyComponent', () => {
  let component: DisplyComponent;
  let fixture: ComponentFixture<DisplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
