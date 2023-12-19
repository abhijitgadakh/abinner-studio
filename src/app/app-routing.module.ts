import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './home/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { WriteupsComponent } from './home/writeups/writeups.component';
import { GuessTheNumberComponent } from './home/projects/games/guess-the-number/guess-the-number.component';
import { WeatherAppComponent } from './home/projects/basic-apps/weather-app/weather-app.component';
import { AvengersExpandableCardsComponent } from './home/projects/basic-apps/avengers-expandable-cards/avengers-expandable-cards.component';
import { PigGameComponent } from './home/projects/games/pig-game/pig-game.component';
import { ModalWindowsComponent } from './home/projects/basic-apps/modal-windows/modal-windows.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'writeups', component: WriteupsComponent },
  { path: 'projects/guess-the-number', component: GuessTheNumberComponent },
  { path: 'projects/weather-app', component: WeatherAppComponent },
  { path: 'projects/pig-game', component: PigGameComponent },
  { path: 'projects/modal-window', component: ModalWindowsComponent },

  {
    path: 'projects/avengers-expandable-cards',
    component: AvengersExpandableCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
