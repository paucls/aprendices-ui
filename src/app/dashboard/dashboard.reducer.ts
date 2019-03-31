import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface FilterCategory {
  name: string;
  selected: boolean;
}

export interface State {
  posts: Post[];
  isLoadingPosts: boolean;
  categories: FilterCategory[];
  searchTerm: string;
}

export const initialState: State = {
  posts: null,
  isLoadingPosts: false,
  categories: [],
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
          .map(category => {
            return {
              name: category,
              selected: false
            };
          })
      };

    case DashboardActionTypes.ToggleCategory:
      return {
        ...state,
        categories: toggleCategory(state.categories, action.category)
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

function toggleCategory(categories: FilterCategory[], categoryName: string) {
  return categories.map(category => {
    if (category.name === categoryName) {
      return {...category, selected: !category.selected};
    }
    return category;
  });
}
