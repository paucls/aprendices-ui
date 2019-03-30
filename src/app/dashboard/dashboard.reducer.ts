import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface State {
  posts: Post[];
  isLoadingPosts: boolean;
  categories: string[];
  selectedCategories: string[];
  searchTerm: string;
}

export const initialState: State = {
  posts: null,
  isLoadingPosts: false,
  categories: [],
  selectedCategories: [],
  searchTerm: ''
};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionTypes.LoadPosts:
    case DashboardActionTypes.LoadOldPosts:
      return {
        ...state,
        isLoadingPosts: true
      };

    case DashboardActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.posts,
        isLoadingPosts: false
      };

    case DashboardActionTypes.LoadOldPostsSuccess:
      const allPosts = [...state.posts, ...action.oldPosts];
      return {
        ...state,
        posts: allPosts,
        isLoadingPosts: false
      };

    case DashboardActionTypes.LoadCategoriesSuccess:
      return {
        ...state,
        categories: action.categories.sort()
      };

    case DashboardActionTypes.ToggleCategory:
      return {
        ...state,
        selectedCategories: toggleCategory(state, action.category)
      };

    case DashboardActionTypes.SearchPosts:
      return {
        ...state,
        searchTerm: action.searchTerm
      };

    default:
      return state;
  }
}

function toggleCategory(state, category: string) {
  if (state.selectedCategories.includes(category)) {
    return state.selectedCategories.filter(c => c !== category);
  } else {
    return [...state.selectedCategories, category];
  }
}
