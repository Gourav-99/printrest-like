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
      const res = await axios.post(`/comment/${postId}`, { commentText });
      setCommentState(res.data);
      setCommentText("");
    } catch (error) {
      console.log(error);
      toast.error("Unauthorised !SignIn to comment");
    }
  };
  const handleLike = async () => {
    try {
      const res = await axios.get(`/post/like/${postId}`);
      setCommentState(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {post && (
        <div className="bg-white p-1 overflow-hidden shadow-none flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-none md:w-2/3 p-2">
            <div className="aspect-w-4 aspect-h-3 md:w-full md:h-[500px]">
              {post?.image && (
                <img
                  className="w-full h-full object-contain"
                  src={post.image}
                  alt={post.title}
                />
              )}
            </div>
            <div className="mt-4 flex-grow">
              {post?.description && (
                <>
                  <h2 className="text-xl font-semibold mb-2">Description:</h2>
                  <p className="text-gray-600">{post.description}</p>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-auto md:w-1/3 md:pl-4">
            <header className="border-b border-gray-400 pb-4">
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
            <div className="pt-4 border-t border-gray-400">
              <form onSubmit={handleComment} className="flex items-start">
                <textarea
                  className="w-full resize-none outline-none appearance-none"
                  aria-label="comment ..."
                  placeholder="Add a comment..."
                  autoComplete="off"
                  autoCorrect="off"
                  style={{ height: 36 }}
                  defaultValue={""}
                  value={commentText}
                  onChange={(e) => setCommentText(e.currentTarget.value)}
                />
                <button
                  type="submit"
                  className="ml-2 focus:outline-none border-none bg-transparent text-blue-600"
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
              <div className="flex flex-col  space-x-2">
                <span
                  onClick={handleLike}
                  className="fill-heart text-gray-700 cursor-pointer"
                >
                  <svg
                    // onClick={handleLike}
                    className=" h-7 w-7 heart"
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
                <span className="text-gray-600 text-sm font-bold">{`${post?.likes.length} Likes`}</span>
              </div>
              <span className="block mt-1 text-xs text-gray-600">
                {postedSince}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PostView;
