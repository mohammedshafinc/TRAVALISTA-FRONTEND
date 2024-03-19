import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBlockedGuidesComponent } from './show-blocked-guides.component';

describe('ShowBlockedGuidesComponent', () => {
  let component: ShowBlockedGuidesComponent;
  let fixture: ComponentFixture<ShowBlockedGuidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBlockedGuidesComponent]
    });
    fixture = TestBed.createComponent(ShowBlockedGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
