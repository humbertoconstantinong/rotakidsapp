import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookstudentsComponent } from './lookstudents.component';

describe('LookstudentsComponent', () => {
  let component: LookstudentsComponent;
  let fixture: ComponentFixture<LookstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
