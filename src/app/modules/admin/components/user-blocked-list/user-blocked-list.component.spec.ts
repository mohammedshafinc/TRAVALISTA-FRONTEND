import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlockedListComponent } from './user-blocked-list.component';

describe('UserBlockedListComponent', () => {
  let component: UserBlockedListComponent;
  let fixture: ComponentFixture<UserBlockedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBlockedListComponent]
    });
    fixture = TestBed.createComponent(UserBlockedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
