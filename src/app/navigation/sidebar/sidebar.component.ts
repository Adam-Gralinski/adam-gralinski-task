import { Component, OnInit } from '@angular/core';
import { GameCategoriesService } from '../../shared/services/game-categories.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public categories;

  constructor(private categoriesService: GameCategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.categories;
  }

}
