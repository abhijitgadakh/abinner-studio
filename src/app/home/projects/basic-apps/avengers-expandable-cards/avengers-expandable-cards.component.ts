import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avengers-expandable-cards',
  templateUrl: './avengers-expandable-cards.component.html',
  styleUrls: ['./avengers-expandable-cards.component.css'],
})
export class AvengersExpandableCardsComponent implements OnInit {
  public panels = [
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop01.jpg',
      title: 'Avengers Assemble',
    },
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop02.jpg',
      title: 'Iron Man',
    },
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop03.jpg',
      title: 'Captain America',
    },
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop04.jpg',
      title: 'The Hulk',
    },
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop05.jpg',
      title: 'THOR',
    },
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop06.jpg',
      title: 'Black Widow',
    },
    {
      image:
        '../../../../../assets/project-images/basic-apps/expanding-cards/images/AvengersDesktop07.jpg',
      title: 'Hawkeye',
    },
  ];
  public activePanel: number | null = 0;

  constructor() {}

  ngOnInit(): void {}

  setActivePanel(index: number): void {
    this.activePanel = index === this.activePanel ? null : index;
  }
}
