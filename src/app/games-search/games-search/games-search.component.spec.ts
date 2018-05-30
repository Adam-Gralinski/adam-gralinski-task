import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSearchComponent } from './games-search.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import mock from '../../fixtures/response.mock.js'

describe('GamesSearchComponent', () => {
  let component: GamesSearchComponent;
  let fixture: ComponentFixture<GamesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatCardModule,
        SharedModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ GamesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate values', () => {
    expect(component.games.length).toBe(0);
  });

  it('should return categorySubscription', () => {
    component['getCategories']()
    expect(typeof(component['categoriesSubscription'])).toEqual('object');
    expect(component['categoriesSubscription'].unsubscribe).not.toBeUndefined();
  });

  it('should initiate values', () => {
    const categories = [mock];
    const filteredCat = component.removePopularGamesDuplicates(categories)
    expect(categories.length).toEqual(1);
    expect(filteredCat.length).toEqual(0);
  });

  it('should remove all games when search string is empty', () => {
    component.games = [{name:'asd', thumbnail: 'dd', slug:'ddd'}];
    expect(component.games.length).toEqual(1)
    component.searchText = '';
    component.searchTextChange();
    expect(component.games.length).toEqual(0)
  });

  it('should getUniqueGames', () => {
    const changedMock = {...mock, slug:'aaa'};
    expect(changedMock.slug).toEqual('aaa');
    component.categories = [changedMock];
    component.searchText = 'merlin\'s';
    component.searchTextChange();
    expect(component.games.length).toEqual(1)

    component.searchText = 'merloooon';
    component.searchTextChange();
    expect(component.games.length).toEqual(0)
  });

  it('should return a game', () => {
    const category = mock;
    component.searchText = 'merl';
    const returnedValue = component.getGames(category)
    expect(returnedValue.length).toEqual(1)
  });

  it('should return true if matched', () => {
    const game = {name:'merlin', thumbnail: 'dd', slug:'ddd'};
    component.searchText = 'merl';
    const returnedValue = component.matchSearchString(game)
    expect(returnedValue).toBeTruthy()

    component.searchText = 'merlon';
    const returnedValue2 = component.matchSearchString(game)
    expect(returnedValue2).toBeFalsy()
  });
});
