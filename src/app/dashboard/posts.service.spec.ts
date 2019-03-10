import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PostsService', () => {
  let postsService: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    postsService = TestBed.get(PostsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get posts from API', () => {
    const posts = [];

    postsService.getPosts().subscribe(response => {
      expect(response).toEqual(posts);
    });

    httpMock
      .expectOne({ method: 'GET', url: 'assets/posts/posts.json' })
      .flush(posts);
  });
});
