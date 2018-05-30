import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import mock from '../../../fixtures/response.mock.js'
import { RouterTestingModule } from '@angular/router/testing';

import { GameItemComponent } from './game-item.component';

describe('GameItemComponent', () => {
  let component: GameItemComponent;
  let fixture: ComponentFixture<GameItemComponent>;
  const game = mock._embedded.games[0]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GameItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemComponent);
    const element = fixture.debugElement.nativeElement;
    component = fixture.debugElement.componentInstance;
    component.game = game
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
