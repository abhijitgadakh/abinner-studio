import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteupsCardsComponent } from './writeups-cards.component';

describe('WriteupsCardsComponent', () => {
  let component: WriteupsCardsComponent;
  let fixture: ComponentFixture<WriteupsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteupsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteupsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
