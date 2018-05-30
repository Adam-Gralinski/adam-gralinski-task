import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import mock from '../../fixtures/response.mock.js'

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize first game', () => {
    expect(component.game).not.toBeUndefined();
  });

  it('should return routeSubscription', () => {
    const sub = component['routeSubscription']()
    expect(typeof(sub)).toEqual('object');
    expect(sub.unsubscribe).not.toBeUndefined();
  });

  it('should return gameInfo', () => {
    component['gameId'] = 'amaya-merlins-magic-respins';
    component['getGameInfo'](mock)

    expect(component.game.id).toEqual('amaya-merlins-magic-respins');
  });
});
