import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material';
import { LinkyModule } from 'ngx-linky';
import { Post } from '../post.model';
import { LoadPosts, ToggleCategory } from '../dashboard.actions';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { reducer, State } from '../dashboard.reducer';
import * as fromRoot from '../../reducers';

describe('PostComponent', () => {
  let component: PostComponent;
  let element;
  let fixture: ComponentFixture<PostComponent>;
  let store: Store<State>;

  const post: Post = {
    author: 'John Doe',
    category: 'Architecture',
    content: 'Accelerate developer productivity, Will Larson (@Lethai) \nhttps://lethain.com/accelerate-developer-productivity/',
    date: new Date('2018-09-10T00:00:00')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(reducer),
        }),
        LinkyModule,
        MatCardModule
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    component.post = post;
    fixture.detectChanges();
  });

  describe('title', () => {
    it('should contain author and category of the post', () => {
      const cardTitle = element.querySelector('mat-card-title');
      expect(cardTitle.innerText).toContain(post.author);
      expect(cardTitle.innerText).toContain(post.category);
    });
  });

  describe('content', () => {
    it('should contain post content', () => {
      const cardContent = element.querySelector('mat-card-content');
      expect(cardContent.innerText).toContain('Accelerate developer productivity, Will Larson (@Lethai) ' +
        'lethain.com/accelerate-developer-productivity');
    });
  });

  it('should dispatch toggle category on category click', () => {
    element.querySelector('.category').click();

    expect(store.dispatch).toHaveBeenCalledWith(new ToggleCategory(post.category));
  });
});
