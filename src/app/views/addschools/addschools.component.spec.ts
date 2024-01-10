import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschoolsComponent } from './addschools.component';

describe('AddschoolsComponent', () => {
  let component: AddschoolsComponent;
  let fixture: ComponentFixture<AddschoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddschoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
