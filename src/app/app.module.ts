import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { GamesSearchModule } from './games-search/games-search.module';
import { HeaderModule } from './header/header.module'
import { FooterModule } from './footer/footer.module'

import { GamesCategoryModule } from './games-category/games-category.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavigationModule,
    HeaderModule,
    FooterModule,
    GameModule,
    GamesSearchModule,
    GamesCategoryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
