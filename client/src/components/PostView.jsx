import { useParams } from "react-router";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Comment from "./Comment";
import { toast } from "react-hot-toast";
import { getPost } from "../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
dayjs.extend(relativeTime);
const PostView = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.posts[0]);
  const { postId } = useParams();
  const [postedSince, setPostedSince] = useState();
  const [commentText, setCommentText] = useState();
  const [commentState, setCommentState] = useState(); //using it to jst re-rendering when comment or likes is updated
  useEffect(() => {
    setPostTime();
  }, []);
  useEffect(() => {
    dispatch(getPost(postId));
  }, [commentState]);

  const setPostTime = () => {
    const postCreationTime = post?.createdAt;
    const currentTime = dayjs();
    const timeAgo = dayjs(postCreationTime).from(currentTime);
    setPostedSince(timeAgo);
  };
  const handleComment = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `/comment/${postId}`,
        { commentText },
        {
          withCredentials: true,
        }
      );
      setCommentState(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Unauthorised !SignIn to comment");
    }
  };
  const handleLike = async () => {
    try {
      const res = await axios.get(`/post/like/${postId}`, {
        withCredentials: true,
      });
      setCommentState(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white p-1 overflow-hidden shadow-none">
        <div className="grid grid-cols-3 min-w-full">
          <div className="col-span-2 w-full p-2 h-[18rem] align-middle">
            <img
              className="w-full max-w-full min-w-full max-h-[95%] object-contain"
              src={post?.image}
              alt={post?.title}
            />
            <div className="flex flex-col pt-1">
              {post?.description && (
                <>
                  <h2 className="text font-bold">Description:</h2>
                  <p className="text">{post.description}</p>
                </>
              )}
            </div>
          </div>
          <div className="col-span-1 relative pl-4">
            <header className="border-b border-grey-400">
              <a
                href="#"
                className="block cursor-pointer py-4 flex items-center text-sm outline-none focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <img
                  src={
                    post?.user?.profilePicture ||
                    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  }
                  className="h-9 w-9 rounded-full object-cover"
                  alt="user"
                />
                <div className="flex flex-col ">
                  <p className="block ml-2 font-bold">
                    {post?.user?.firstName}
                  </p>
                  <p className="block ml-2 font-2xl">{post?.title}</p>
                </div>
              </a>
            </header>
            <Comment
              comments={post?.comments}
              postUser={post?.user._id}
              setCommentState={setCommentState}
            />
            <div className=" pl-4 pt-1">
              <div className="pt-4 pb-1 pr-3 border-t border-grey-400">
                <form onSubmit={handleComment} className="flex items-start">
                  <textarea
                    className="w-full resize-none outline-none appearance-none"
                    aria-label="comment ..."
                    placeholder="Add a comment..."
                    autoComplete="off"
                    autoCorrect="off"
                    style={{ height: 36 }}
                    defaultValue={""}
                    onChange={(e) => setCommentText(e.currentTarget.value)}
                  />
                  <button
                    type="submit"
                    className="mb-2 focus:outline-none border-none bg-transparent text-blue-600"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      width={30}
                      height={30}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7"
                          stroke="#000000"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </button>
                </form>
              </div>
              <div className="pt-4">
                <div className="mb-2">
                  <div className="flex items-center">
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                      <svg
                        onClick={handleLike}
                        className="fill-heart text-gray-700 inline-block h-7 w-7 heart"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </span>
                    <span className="mr-3 inline-flex items-center cursor-pointer">
                      <svg
                        className="text-gray-700 inline-block h-7 w-7 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm font-bold">
                    {post?.likes.length} Likes
                  </span>
                </div>
                <span className="block ml-2 text-xs text-gray-600">
                  {postedSince}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostView;
