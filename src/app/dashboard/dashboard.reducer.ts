import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { Post } from './post.model';

export interface State {
  posts: Post[];
}

export const initialState: State = {
  posts: null
};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionTypes.LoadPosts:
      return state;

    case DashboardActionTypes.LoadPostsSuccess:
      return {
        ...state,
        posts: action.posts.slice(0, 299)
      };

    default:
      return state;
  }
}
