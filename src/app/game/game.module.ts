import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game.routing'

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    MatCardModule
  ],
  exports: [GameComponent],
  declarations: [GameComponent]
})
export class GameModule { }
