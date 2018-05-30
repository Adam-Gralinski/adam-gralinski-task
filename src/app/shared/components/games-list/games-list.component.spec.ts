import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import mock from '../../../fixtures/response.mock.js'
import { RouterTestingModule } from '@angular/router/testing';

import { GamesListComponent } from './games-list.component';
import { GameItemComponent } from '../game-item/game-item.component'


describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;
  const games = mock._embedded.games
  const game = mock._embedded.games[0]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GamesListComponent, GameItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    const element = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
    component.games = games
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
