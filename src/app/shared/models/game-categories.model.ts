export class GameCategoriesModel {
  name?: string;
  order?: number;
  slug?: string;
  _embedded?: Object;

  constructor(name: string, order: number, slug: string, _embedded:Object){
    this.name = name;
    this.order = order;
    this.slug = slug;
    this._embedded = _embedded;
  }
}
