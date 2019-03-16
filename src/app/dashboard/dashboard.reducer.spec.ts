import { initialState, reducer } from './dashboard.reducer';
import { LoadPosts, LoadPostsSuccess, ToggleCategory } from './dashboard.actions';
import { Post } from './post.model';

describe('Dashboard Reducer', () => {

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('load posts action', () => {
    it('should return a new state indicating posts are loading', () => {
      const action = new LoadPosts();

      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        isLoadingPosts: true
      });
    });
  });

  describe('load posts success action', () => {
    it('should return a new state including loaded posts', () => {
      const posts: Post[] = [{category: 'category', author: 'author', content: 'content', date: new Date()}];
      const state = {
        ...initialState,
        isLoadingPosts: true
      };
      const action = new LoadPostsSuccess(posts);

      const result = reducer(state, action);

      expect(result).toEqual({
        ...initialState,
        posts,
        isLoadingPosts: false
      });
    });
  });

  describe('toggle category action', () => {
    it('should return a new state with selected category', () => {
      const state = {...initialState};
      const action = new ToggleCategory('category1');

      const result = reducer(state, action);

      expect(result).toEqual({
        ...initialState, category: 'category1'
      });
    });
  });
});
