import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SearchPosts, ToggleCategory } from '../dashboard.actions';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { reducer, State } from '../dashboard.reducer';
import * as fromRoot from '../../reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let element;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(reducer)
        })
      ],
      declarations: [SidenavComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    component.categories = ['Category A', 'Category B'];
    fixture.detectChanges();
  });

  it('should list categories', () => {
    const listItems = element.querySelectorAll('li');

    expect(listItems.length).toBe(2);
    expect(listItems[0].innerText).toContain('Category A');
    expect(listItems[1].innerText).toContain('Category B');
  });

  it('should dispatch search posts on input value changes', () => {
    const searchTerm = 'Abc';
    const inputField = element.querySelector('input');

    inputField.value = searchTerm;
    inputField.dispatchEvent(new Event('input'));

    expect(store.dispatch).toHaveBeenCalledWith(new SearchPosts(searchTerm));
  });

  it('should dispatch toggle category on category click', () => {
    element.querySelector('mat-checkbox').click();

    expect(store.dispatch).toHaveBeenCalledWith(new ToggleCategory('Category A'));
  });
});
