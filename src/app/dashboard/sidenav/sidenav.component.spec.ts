import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { MatCheckboxModule } from '@angular/material';
import { ToggleCategory } from '../dashboard.actions';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { reducer, State } from '../dashboard.reducer';
import * as fromRoot from '../../reducers';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let element;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
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

  it('should dispatch toggle category on category click', () => {
    element.querySelector('mat-checkbox').click();

    expect(store.dispatch).toHaveBeenCalledWith(new ToggleCategory('Category A'));
  });
});
