import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameCategoriesService } from '../../shared/services/game-categories.service';
import { GameCategoriesModel } from '../../shared/models/game-categories.model';
import { GameModel } from '../../shared/models/game.model';

@Component({
  selector: 'app-games-search',
  templateUrl: './games-search.component.html',
  styleUrls: ['./games-search.component.scss']
})
export class GamesSearchComponent implements OnInit, OnDestroy {
  public searchText: string;
  public categories: Array<GameCategoriesModel>;
  public games: Array<GameModel>;
  private categoriesSubscription: any;

  constructor(private categoryService: GameCategoriesService) { }

  ngOnInit() {
    this.getCategories();
    this.games = [];
  }

  ngOnDestroy() {
    if(this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  private getCategories() {
    this.categoriesSubscription = this.categoryService.categories.subscribe(categories => {
      this.categories = categories;
    })
  }

  public removePopularGamesDuplicates(categories) {
    return categories.filter(category => category.slug !== 'popular-games')
  }

  public searchTextChange() {
    if(this.searchText.length > 0){
      this.games = this.getUniqueGames()
    } else {
      this.games = [];
    }
  }

  public getUniqueGames() {
    const filteredCategories = this.removePopularGamesDuplicates(this.categories)
    return filteredCategories
      .map(category => this.getGames(category))
      .reduce((a, b) => { return a.concat(b) }, [])
  }

  public getGames(category) {
    return category._embedded.games.filter(game => this.matchSearchString(game))
  }

  public matchSearchString(game) {
    return game.name.toLowerCase().includes(this.searchText.toLowerCase())
  }

}
