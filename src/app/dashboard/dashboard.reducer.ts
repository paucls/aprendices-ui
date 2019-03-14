import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface State {
  posts: Post[];
  category: string;
}

export const initialState: State = {
  posts: null,
  category: null
};

export function reducer(state = initialState, action: DashboardActions): State {
  const POSTS_LIMIT = 299;

  switch (action.type) {

    case DashboardActionTypes.LoadPosts:
      return state;

    case DashboardActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.posts.slice(0, POSTS_LIMIT)
      };

    case DashboardActionTypes.ToggleCategory:
      return {
        ...state,
        category: action.category,
        posts: state.posts
          .filter(post => post.category === action.category)
          .slice(0, POSTS_LIMIT)
      };

    default:
      return state;
  }
}
