import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'category',
    loadChildren: './games-category/games-category.module#GamesCategoryModule'
  },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule'
  },
  {
    path: '**',
    redirectTo: '/category/popular-games',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
