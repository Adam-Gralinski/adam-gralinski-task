import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GamesListComponent, GameItemComponent],
  declarations: [GamesListComponent, GameItemComponent]
})
export class SharedModule { }
