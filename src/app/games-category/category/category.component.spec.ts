import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import mock from '../../fixtures/response.mock.js'

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatCardModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ CategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return routeSubscription', () => {
    const sub = component['routeSubscription']()
    expect(typeof(sub)).toEqual('object');
    expect(sub.unsubscribe).not.toBeUndefined();
  });

  it('should return gameInfo', () => {
    component['getGames'](mock)
    expect(component.games.length).toEqual(3);
  });
});
