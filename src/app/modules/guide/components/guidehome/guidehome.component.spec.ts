import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidehomeComponent } from './guidehome.component';

describe('GuidehomeComponent', () => {
  let component: GuidehomeComponent;
  let fixture: ComponentFixture<GuidehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidehomeComponent]
    });
    fixture = TestBed.createComponent(GuidehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
