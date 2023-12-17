import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteupsComponent } from './writeups.component';

describe('WriteupsComponent', () => {
  let component: WriteupsComponent;
  let fixture: ComponentFixture<WriteupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
