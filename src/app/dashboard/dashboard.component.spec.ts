import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { Post } from './post.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const posts: Post[] = [{
    author: 'John Doe',
    category: 'Katas',
    content: 'Accelerate\'s definition of developer productivity, Will Larson (@Lethai) \n' +
      'https://lethain.com/accelerate-developer-productivity/',
    date: new Date('2018-09-10T00:00:00')
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      imports: [
        MatGridListModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.posts = posts;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
