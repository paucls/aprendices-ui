import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material';
import { LinkyModule } from 'ngx-linky';
import { Post } from './post.model';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  const post: Post = {
    author: 'John Doe',
    category: 'Katas',
    content: 'Accelerate\'s definition of developer productivity, Will Larson (@Lethai) \n' +
      'https://lethain.com/accelerate-developer-productivity/',
    date: new Date('2018-09-10T00:00:00')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [
        LinkyModule,
        MatCardModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = post;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
