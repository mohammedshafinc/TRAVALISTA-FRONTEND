import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserblockComponent } from './userblock.component';

describe('UserblockComponent', () => {
  let component: UserblockComponent;
  let fixture: ComponentFixture<UserblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserblockComponent]
    });
    fixture = TestBed.createComponent(UserblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
