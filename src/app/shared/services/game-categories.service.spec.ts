import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import HttpConfig from '../../configs/http.config'

import { GameCategoriesService } from './game-categories.service';

describe('GameCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GameCategoriesService]
    });
  });

  it('should be created', inject([GameCategoriesService], (service: GameCategoriesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return routeSubscription', inject([GameCategoriesService], (service: GameCategoriesService) => {
    const observerMock = {next: ()=>{}}
    const sub = service['categoriesSubscription'](observerMock)
    expect(typeof(sub)).toEqual('object');
    expect(sub.unsubscribe).not.toBeUndefined();
  }));

  it('should return routeSubscription', inject([GameCategoriesService], (service: GameCategoriesService) => {
    expect(service['url']).not.toBeUndefined();
  }));
});
