import { GamesCategoryModule } from './games-category.module';

describe('GamesCategoryModule', () => {
  let gamesCategoryModule: GamesCategoryModule;

  beforeEach(() => {
    gamesCategoryModule = new GamesCategoryModule();
  });

  it('should create an instance', () => {
    expect(gamesCategoryModule).toBeTruthy();
  });
});
