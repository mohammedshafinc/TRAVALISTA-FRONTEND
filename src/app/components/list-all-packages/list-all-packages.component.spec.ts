import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPackagesComponent } from './list-all-packages.component';

describe('ListAllPackagesComponent', () => {
  let component: ListAllPackagesComponent;
  let fixture: ComponentFixture<ListAllPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllPackagesComponent]
    });
    fixture = TestBed.createComponent(ListAllPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
