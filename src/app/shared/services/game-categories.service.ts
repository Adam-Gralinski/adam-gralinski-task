import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import HttpConfig from '../../configs/http.config'

import { GameCategoriesModel } from '../models/game-categories.model';

@Injectable({
  providedIn: 'root'
})
export class GameCategoriesService implements OnDestroy{
  public categories: Observable<GameCategoriesModel[]>;
  private categorySubscription;

  private url = `${HttpConfig.api}${HttpConfig.categories}?${HttpConfig.apiParams}`

  constructor(private _http: HttpClient) {
    this.categories = new Observable(observer => {
      this.categoriesSubscription(observer);
    });
  }

  private _getCategories(): Observable<any> {
    return this._http.get(this.url)
  }

  private categoriesSubscription(observer) {
    this.categorySubscription = this._getCategories().subscribe(res => {
      observer.next(res._embedded.game_categories);
    })
    return this.categorySubscription
  }

  ngOnDestroy() {
    if(this.categorySubscription) {
      this.categorySubscription.unsubscribe()
    }
  }
}
