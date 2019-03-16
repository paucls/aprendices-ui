import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface State {
  posts: Post[];
  isLoadingPosts: boolean;
  category: string;
}

export const initialState: State = {
  posts: null,
  isLoadingPosts: false,
  category: null
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
        isLoadingPosts: false
      };

    case DashboardActionTypes.ToggleCategory:
      return {
        ...state,
        category: action.category
      };

    default:
      return state;
  }
}
