import { initialState, reducer } from './dashboard.reducer';
import {
  LoadCategories, LoadCategoriesSuccess,
  LoadOldPosts,
  LoadOldPostsSuccess,
  LoadPosts,
  LoadPostsSuccess,
  SearchPosts,
  ToggleCategory
} from './dashboard.actions';
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

  describe('load old posts action', () => {
    it('should return a new state indicating posts are loading', () => {
      const action = new LoadOldPosts();

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
        ...state,
        posts,
        isLoadingPosts: false
      });
    });
  });

  describe('load old posts success action', () => {
    it('should return a new state including all posts', () => {
      const posts: Post[] = [{category: 'category1', author: 'author', content: 'content2', date: new Date()}];
      const oldPosts: Post[] = [{category: 'category2', author: 'author', content: 'content1', date: new Date()}];
      const state = {
        ...initialState,
        posts,
        isLoadingPosts: true
      };
      const action = new LoadOldPostsSuccess(oldPosts);

      const result = reducer(state, action);

      expect(result).toEqual({
        ...state,
        posts: [...posts, ...oldPosts],
        isLoadingPosts: false
      });
    });
  });

  describe('load categories success action', () => {
    it('should return a new state including loaded categories sorted by name', () => {
      const categories: string[] = ['Learning', 'XP', 'Languages'];
      const action = new LoadCategoriesSuccess(categories);

      const result = reducer(initialState, action);

      expect(result.categories).toEqual(['Languages', 'Learning', 'XP']);
    });
  });

  describe('toggle category action', () => {
    it('should add the category to the list of selected categories', () => {
      const state = {...initialState};
      const action = new ToggleCategory('category1');

      const result = reducer(state, action);

      expect(result).toEqual({
        ...initialState,
        selectedCategories: ['category1']
      });
    });

    it('should remove the category from the list of selected categories', () => {
      const state = {...initialState, selectedCategories: ['category1', 'category2']};
      const action = new ToggleCategory('category1');

      const result = reducer(state, action);

      expect(result).toEqual({
        ...initialState,
        selectedCategories: ['category2']
      });
    });
  });

  describe('search posts action', () => {
    it('should add the search term to the new state', () => {
      const state = {...initialState};
      const searchTerm = 'Pair';
      const action = new SearchPosts(searchTerm);

      const result = reducer(state, action);

      expect(result).toEqual({
        ...initialState,
        searchTerm
      });
    });
  });
});
