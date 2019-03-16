import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../dashboard.reducer';
import { ToggleCategory } from '../dashboard.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() categories: string[];

  constructor(private store: Store<State>) {}

  toggleCategory(category: string) {
    this.store.dispatch(new ToggleCategory(category));
  }
}
