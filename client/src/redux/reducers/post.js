const initialState = {
  posts: [],
  loaded: false,
  hasData: true,
};
const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...payload], // Add payload data to the existing posts array
        loaded: true,
        hasData: payload.length > 0,
      };
    case "POST_BY_ID":
      return {
        posts: [payload],
        loaded: true,
      };
    case "RESET_POSTS":
      return { ...initialState };
    default:
      return { ...state };
  }
};
export default postReducer;
