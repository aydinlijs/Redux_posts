import { FETCH_POSTS } from "./../action_types";

const initialStatus = {
  status: "LOADING",
  message: "",
  posts: []
};

export function mainReducer(posts = initialStatus, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return posts;
  }
}
