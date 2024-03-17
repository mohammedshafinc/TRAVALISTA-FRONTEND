import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageslistComponent } from './packageslist.component';

describe('PackageslistComponent', () => {
  let component: PackageslistComponent;
  let fixture: ComponentFixture<PackageslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageslistComponent]
    });
    fixture = TestBed.createComponent(PackageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
