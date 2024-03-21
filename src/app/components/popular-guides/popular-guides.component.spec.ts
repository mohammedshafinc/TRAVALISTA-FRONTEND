import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGuidesComponent } from './popular-guides.component';

describe('PopularGuidesComponent', () => {
  let component: PopularGuidesComponent;
  let fixture: ComponentFixture<PopularGuidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularGuidesComponent]
    });
    fixture = TestBed.createComponent(PopularGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
