import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface State {
  posts: Post[];
  isLoadingPosts: boolean;
  categories: string[];
  selectedCategories: string[];
}

export const initialState: State = {
  posts: null,
  isLoadingPosts: false,
  categories: [],
  selectedCategories: []
};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionTypes.LoadPosts:
      return {
        ...state,
        isLoadingPosts: true
      };

    case DashboardActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.posts,
        categories: extractCategories(action.posts),
        isLoadingPosts: false
      };

    case DashboardActionTypes.ToggleCategory:
      return {
        ...state,
        selectedCategories: toggleCategory(state, action.category)
      };

    default:
      return state;
  }
}

function extractCategories(posts: Post[]) {
  const categories = posts.map(post => post.category);
  const uniqCategories = new Set<string>(categories);
  uniqCategories.delete('');
  return [...Array.from(uniqCategories)].sort();
}

function toggleCategory(state, category: string) {
  if (state.selectedCategories.includes(category)) {
    return state.selectedCategories.filter(c => c !== category);
  } else {
    return [...state.selectedCategories, category];
  }
}
