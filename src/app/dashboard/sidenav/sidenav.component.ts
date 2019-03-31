import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterCategory, State } from '../dashboard.reducer';
import { SearchPosts, ToggleCategory } from '../dashboard.actions';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input() categories: FilterCategory[];

  searchField = new FormControl('');

  private subs: Subscription;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.subs = this.searchField.valueChanges.subscribe(value => {
      return this.store.dispatch(new SearchPosts(value));
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  toggleCategory(category: FilterCategory) {
    this.store.dispatch(new ToggleCategory(category.name));
    this.scrollToTop();
  }

  private scrollToTop() {
    window.scrollTo(0, 0);
  }
}
