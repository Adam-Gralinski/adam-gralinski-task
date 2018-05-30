export class GameModel {
  name?: string;
  thumbnail?: string;
  slug?: string;

  constructor(name: string, thumbnail: string, slug: string){
    this.name = name;
    this.slug = slug;
    this.thumbnail = thumbnail
  }
}
