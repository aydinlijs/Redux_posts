import { FETCH_POSTS } from "./../action_types";
import axios from "axios";

export const fetchPosts = () => async dispatch => {
  try {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then(resp =>
      dispatch({
        type: FETCH_POSTS,
        payload: { status: "SUCCESS", message: null, posts: resp.data }
      })
    );
  } catch (err) {
    dispatch({
      type: FETCH_POSTS,
      payload: { status: "ERROR", message: err.message, posts: [] }
    });
  }
};
