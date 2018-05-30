import { GamesSearchModule } from './games-search.module';

describe('GamesSearchModule', () => {
  let gamesSearchModule: GamesSearchModule;

  beforeEach(() => {
    gamesSearchModule = new GamesSearchModule();
  });

  it('should create an instance', () => {
    expect(gamesSearchModule).toBeTruthy();
  });
});
