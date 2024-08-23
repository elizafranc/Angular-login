import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeedetailComponent } from './single-employeedetail.component';

describe('SingleEmployeedetailComponent', () => {
  let component: SingleEmployeedetailComponent;
  let fixture: ComponentFixture<SingleEmployeedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEmployeedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEmployeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
