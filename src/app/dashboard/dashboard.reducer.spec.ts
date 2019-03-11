import { initialState, reducer } from './dashboard.reducer';
import { LoadPostsSuccess } from './dashboard.actions';
import { Post } from './post.model';

describe('Dashboard Reducer', () => {

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('load posts success action', () => {
    it('should return a new state including loaded posts', () => {
      const posts: Post[] = [{category: 'category', author: 'author', content: 'content', date: new Date()}];
      const action = new LoadPostsSuccess(posts);

      const result = reducer(initialState, action);

      expect(result).toEqual({...initialState, posts});
    });
  });
});
