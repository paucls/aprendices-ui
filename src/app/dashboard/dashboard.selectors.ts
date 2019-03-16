import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './dashboard.reducer';

const maxNumberPostsToDisplay = 150;
const selectFeature = createFeatureSelector<State>('dashboard');

export const selectCategory = createSelector(selectFeature, state => state.category);
export const selectPosts = createSelector(selectFeature, state => state.posts || []);
export const selectIsLoadingPosts = createSelector(selectFeature, state => state.isLoadingPosts);

export const selectFilteredPosts = createSelector(selectPosts, selectCategory,
  (posts = [], category) => {
    return posts
      .filter(post => !category || post.category === category)
      .slice(0, maxNumberPostsToDisplay);
  });
