import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { WriteupsComponent } from './home/writeups/writeups.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoryListingComponent } from './shared/category-listing/category-listing.component';
import { ProjectCardsComponent } from './home/projects/project-cards/project-cards.component';
import { GuessTheNumberComponent } from './home/projects/games/guess-the-number/guess-the-number.component';
import { ProfileDetailsComponent } from './home/profile/profile-details/profile-details.component';
import { ProfileDetailsBodyComponent } from './home/profile/profile-details-body/profile-details-body.component';
import { AcademicsComponent } from './home/profile/profile-details-body/academics/academics.component';
import { ExperienceComponent } from './home/profile/profile-details-body/experience/experience.component';
import { ExtracurricularComponent } from './home/profile/profile-details-body/extracurricular/extracurricular.component';
import { AchievementComponent } from './home/profile/profile-details-body/achievement/achievement.component';
import { WriteupsCardsComponent } from './home/writeups/writeups-cards/writeups-cards.component';
import { WeatherAppComponent } from './home/projects/basic-apps/weather-app/weather-app.component';
import { AvengersExpandableCardsComponent } from './home/projects/basic-apps/avengers-expandable-cards/avengers-expandable-cards.component';
import { PigGameComponent } from './home/projects/games/pig-game/pig-game.component';
import { ModalWindowsComponent } from './home/projects/basic-apps/modal-windows/modal-windows.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProjectsComponent,
    WriteupsComponent,
    SharedComponent,
    HeaderComponent,
    SidebarComponent,
    CategoryListingComponent,
    ProjectCardsComponent,
    GuessTheNumberComponent,
    ProfileDetailsComponent,
    ProfileDetailsBodyComponent,
    AcademicsComponent,
    ExperienceComponent,
    ExtracurricularComponent,
    AchievementComponent,
    WriteupsCardsComponent,
    WeatherAppComponent,
    AvengersExpandableCardsComponent,
    PigGameComponent,
    ModalWindowsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
