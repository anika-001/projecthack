import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { Game1Component } from './game1/game1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Game2Component } from './game2/game2.component';
import { Game2createroomComponent } from './game2createroom/game2createroom.component';
import { ComicComponent } from './comic/comic.component';
import { ForumComponent } from './forum/forum.component';
import { CardsComponent } from './cards/cards.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { MallComponent } from './mall/mall.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FilldbComponent } from './filldb/filldb.component';
import { ComicroomComponent } from './comicroom/comicroom.component';
import { AddimagesfsComponent } from './addimagesfs/addimagesfs.component';
import { HouseComponent } from './house/house.component';
import { RoomComponent } from './room/room.component';
import { MiddleComponent } from './middle/middle.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { ToysComponent } from './toys/toys.component';
import { BoardComponent } from './board/board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
import { ReachedComponent } from './reached/reached.component';
import { FootprintComponent } from './footprint/footprint.component';
import { CartravelComponent } from './cartravel/cartravel.component';
import { HttpClientModule } from '@angular/common/http';
import { FlighttravelComponent } from './flighttravel/flighttravel.component';
import { MotorbiketravelComponent } from './motorbiketravel/motorbiketravel.component';
import { PublictransittravelComponent } from './publictransittravel/publictransittravel.component';
import { Fuelco2Component } from './fuelco2/fuelco2.component';
import { PaperfootComponent } from './paperfoot/paperfoot.component';
 import {MatTooltipModule} from '@angular/material/tooltip';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';
import { PersonalcarbobComponent } from './personalcarbob/personalcarbob.component';

@NgModule({
  declarations: [
    AppComponent,
    SaferoomComponent,
    Game1Component,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    Game2Component,
    Game2createroomComponent,
    ComicComponent,
    ForumComponent,
    CardsComponent,
    ActivitiesComponent,
    ScoreboardComponent,
    ComicroomComponent,
    BeachComponent,
    ForestComponent,
    MallComponent,
    ActivitiesComponent,
    FilldbComponent,
    AddimagesfsComponent,
    HouseComponent,
    RoomComponent,
    MiddleComponent,
    EscaperoomComponent,
    TictactoeComponent,
    ToysComponent,
    BoardComponent,
    PuzzleComponent,
    PlantComponent,
    TorchComponent,
    ReachedComponent,
    FootprintComponent,
    CartravelComponent,
    FlighttravelComponent,
    MotorbiketravelComponent,
    PublictransittravelComponent,
    Fuelco2Component,
    PaperfootComponent,
    AnalyticsComponent,
    PersonalcarbobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    MatTooltipModule,
    ChartsModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
