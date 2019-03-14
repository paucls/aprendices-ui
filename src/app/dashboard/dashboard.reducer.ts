import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface State {
  posts: Post[];
  filteredPosts: Post[];
  category: string;
}

export const initialState: State = {
  posts: null,
  filteredPosts: null,
  category: null
};

export function reducer(state = initialState, action: DashboardActions): State {
  const POSTS_LIMIT = 100;

  switch (action.type) {

    case DashboardActionTypes.LoadPosts:
      return state;

    case DashboardActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.posts,
        filteredPosts: action.posts.slice(0, POSTS_LIMIT)
      };

    case DashboardActionTypes.ToggleCategory:
      return {
        ...state,
        category: action.category,
        filteredPosts: state.posts
          .filter(post => !action.category || post.category === action.category)
          .slice(0, POSTS_LIMIT)
      };

    default:
      return state;
  }
}
