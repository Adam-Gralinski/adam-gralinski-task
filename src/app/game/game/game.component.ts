import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameCategoriesService } from '../../shared/services/game-categories.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  private gameId: string;
  public game: any;
  private subscription: any;

  constructor(private route: ActivatedRoute, private categoriesService: GameCategoriesService) { }

  ngOnInit() {
    this.initiateGame();
    this.subscription = this.routeSubscription()
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  private initiateGame() {
    this.game = {
      name: 'Sorry, this game doesn\'t exist'
    }
  }

  private routeSubscription() {
    return this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.getCategories();
   });
  }

  private getCategories() {
    const categorySubscription = this.categoriesService.categories.subscribe(categories => {
      categories.forEach(category => this.getGameInfo(category))
      categorySubscription.unsubscribe()
    })
  }

  private getGameInfo(category) {
    const categoryGames = category._embedded.games;
    const game = categoryGames.find(game => game.id === this.gameId)
    if(game) {
      this.game = game;
    }
  }

}
