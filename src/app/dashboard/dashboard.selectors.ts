import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilterCategory, State } from './dashboard.reducer';
import { Post } from './post.model';

const maxNumberPostsToDisplay = 150;
const selectFeature = createFeatureSelector<State>('dashboard');

export const selectCategories = createSelector(selectFeature, state => state.categories);
export const selectSearchTerm = createSelector(selectFeature, state => state.searchTerm);
export const selectPosts = createSelector(selectFeature, state => state.posts || []);
export const selectIsLoadingPosts = createSelector(selectFeature, state => state.isLoadingPosts);

export const selectFilteredPosts = createSelector(
  selectPosts,
  selectSearchTerm,
  selectCategories,
  (posts = [], searchTerm = '', categories = []) => {
    return posts
      .filter(post => bySearchTermAndCategory(post, searchTerm, categories))
      .slice(0, maxNumberPostsToDisplay);
  });

function bySearchTermAndCategory(post: Post, searchTerm: string, categories: FilterCategory[]) {
  console.log('categories:', categories);
  const postContent = toUpperCase(post.content);
  const postAuthor = toUpperCase(post.author);
  const selectedCategories = categories.filter(c => c.selected);
  return (postContent.includes(toUpperCase(searchTerm)) || postAuthor.includes(toUpperCase(searchTerm))) &&
    (selectedCategories.length === 0 || selectedCategories.map(c => c.name).includes(post.category));
}

function toUpperCase(text: string): string {
  return (text || '').toUpperCase();
}
