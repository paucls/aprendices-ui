import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './dashboard.reducer';

const maxNumberPostsToDisplay = 150;
const selectFeature = createFeatureSelector<State>('dashboard');

export const selectCategories = createSelector(selectFeature, state => state.categories);
export const selectSelectedCategories = createSelector(selectFeature, state => state.selectedCategories);
export const selectPosts = createSelector(selectFeature, state => state.posts || []);
export const selectIsLoadingPosts = createSelector(selectFeature, state => state.isLoadingPosts);

export const selectFilteredPosts = createSelector(selectPosts, selectSelectedCategories,
  (posts = [], selectedCategories = []) => {
    const noCategorySelected = selectedCategories.length === 0;
    return posts
      .filter(post => noCategorySelected || selectedCategories.includes(post.category))
      .slice(0, maxNumberPostsToDisplay);
  });
