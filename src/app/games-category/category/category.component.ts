import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameCategoriesService } from '../../shared/services/game-categories.service'
import { GameCategoriesModel } from '../../shared/models/game-categories.model'
import { GameModel } from '../../shared/models/game.model'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  public currentCategory: GameCategoriesModel;
  public games: Array<GameModel>;
  private routerSubscription: any;

  constructor(private route: ActivatedRoute, private categoriesService: GameCategoriesService) { }

  ngOnInit() {
    this.routerSubscription = this.routeSubscription();
  }

  ngOnDestroy() {
    if(this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private routeSubscription() {
    return this.route.params.subscribe(params => {
      this.getCategory(params['id']);
   });
  }

  public getCategory(categoryId) {
    const categorySubscription = this.categoriesService.categories.subscribe(categories => {
      this.currentCategory = categories.find(category => category.slug === categoryId)
      this.getGames(this.currentCategory)
      categorySubscription.unsubscribe()
    })
  }

  private getGames(category) {
    const categoryEmbedded = category._embedded;
    this.games = categoryEmbedded['games'];
  }

}
