import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpackagedetailsComponent } from './showpackagedetails.component';

describe('ShowpackagedetailsComponent', () => {
  let component: ShowpackagedetailsComponent;
  let fixture: ComponentFixture<ShowpackagedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowpackagedetailsComponent]
    });
    fixture = TestBed.createComponent(ShowpackagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
