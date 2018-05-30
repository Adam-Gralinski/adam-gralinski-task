import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent }    from './category/category.component';

const gamesCategoryRoutes: Routes = [
  { path: 'category/:id',  component: CategoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gamesCategoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GamesCategoryRoutingModule { }
