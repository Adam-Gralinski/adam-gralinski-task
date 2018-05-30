import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesSearchComponent } from './games-search/games-search.component';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    SharedModule,
    FormsModule
  ],
  exports: [GamesSearchComponent],
  declarations: [GamesSearchComponent]
})
export class GamesSearchModule { }
