import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './dashboard.reducer';
import { Post } from './post.model';

const maxNumberPostsToDisplay = 150;
const selectFeature = createFeatureSelector<State>('dashboard');

export const selectCategories = createSelector(selectFeature, state => state.categories);
export const selectSearchTerm = createSelector(selectFeature, state => state.searchTerm);
export const selectSelectedCategories = createSelector(selectFeature, state => state.selectedCategories);
export const selectPosts = createSelector(selectFeature, state => state.posts || []);
export const selectIsLoadingPosts = createSelector(selectFeature, state => state.isLoadingPosts);

export const selectFilteredPosts = createSelector(
  selectPosts,
  selectSearchTerm,
  selectSelectedCategories,
  (posts = [], searchTerm = '', selectedCategories = []) => {
    return posts
      .filter(post => bySearchTermAndCategory(post, searchTerm, selectedCategories))
      .slice(0, maxNumberPostsToDisplay);
  });

function bySearchTermAndCategory(post: Post, searchTerm, selectedCategories) {
  return (post.content.includes(searchTerm) || post.author.includes(searchTerm)) &&
    (selectedCategories.length === 0 || selectedCategories.includes(post.category));
}
