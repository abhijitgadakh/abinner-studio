import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersExpandableCardsComponent } from './avengers-expandable-cards.component';

describe('AvengersExpandableCardsComponent', () => {
  let component: AvengersExpandableCardsComponent;
  let fixture: ComponentFixture<AvengersExpandableCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengersExpandableCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvengersExpandableCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
