import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPackagesComponent } from './booked-packages.component';

describe('BookedPackagesComponent', () => {
  let component: BookedPackagesComponent;
  let fixture: ComponentFixture<BookedPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedPackagesComponent]
    });
    fixture = TestBed.createComponent(BookedPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
