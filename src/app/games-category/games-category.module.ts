import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CategoryComponent } from './category/category.component';
import { GamesCategoryRoutingModule } from './games-category.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GamesCategoryRoutingModule,
    MatCardModule,
    SharedModule
  ],
  exports: [CategoryComponent],
  declarations: [CategoryComponent]
})
export class GamesCategoryModule { }
