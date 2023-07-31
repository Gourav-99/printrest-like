import { toast } from "react-hot-toast";
import axios from "../../utils/axios";
export const getPosts = (query) => async (dispatch) => {
  try {
    const { limit = 10, page = 1, search } = query;
    console.log(search, "lok");
    const res = await axios.get(
      `/post?_limit=${limit}&_page=${page}&_search=${search}`
    );

    const responseData = res.data.length !== 0 ? res.data : [];
    dispatch({ type: "GET_POSTS", payload: responseData });
    // toast.success("Posts fetched succesfully");
  } catch (error) {
    // toast.error(error.response.data.message);
    console.log(error);
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/post/getPost/${postId}`);
    dispatch({ type: "POST_BY_ID", payload: res.data });
    // toast.success("Post fetched succesfully");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
};
export const resetPosts = () => ({
  type: "RESET_POSTS",
});
