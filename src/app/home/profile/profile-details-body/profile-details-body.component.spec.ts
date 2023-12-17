import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsBodyComponent } from './profile-details-body.component';

describe('ProfileDetailsBodyComponent', () => {
  let component: ProfileDetailsBodyComponent;
  let fixture: ComponentFixture<ProfileDetailsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
