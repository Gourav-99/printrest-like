import { useState } from "react";
import axios from "../../utils/axios";
import privateRoute from "../../hoc/privateRoute";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const formData = new FormData();
  const handlePreview = (e) => {
    const file = e.target.files[0];

    const filereader = new FileReader();
    filereader.onload = () => {
      setPreview(filereader.result);
      setImage(file);
    };
    filereader.readAsDataURL(file);
  };
  const handlePost = async (e) => {
    e.preventDefault();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    const res = await axios.post("/post", formData);
    navigate("/");
    toast.success("Post created successfully");
  };
  const handleReset = () => {
    // setFormData(initialState);
    setTitle(null);
    setDescription(null);
    setImage(null);
    setPreview(null);
  };
  return (
    <>
      {/* component */}
      <div className="heading text-center font-bold text-2xl m-5 text-yellow-500">
        New Post
      </div>

      <form
        onSubmit={handlePost}
        className="editor mx-auto mb-16 mt-6 w-10/12 flex flex-col  border border-gray-300 p-4 shadow-lg max-w-3xl"
      >
        <input
          value={title}
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          required
          type="text"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          value={description}
          className="description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          defaultValue={""}
          maxLength="300"
          onChange={(e) => setDescription(e.currentTarget.value)}
        />

        {/* <img src={formData.preview} alt="" /> */}

        {/* icons */}
        <div className="icons flex text-gray-500 m-2">
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            {description?.length}/300
          </div>
        </div>
        {preview ? (
          <>
            <label htmlFor="cover-photo">Preview</label>
            <div className="mb-4 bg-gray-100  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-6">
              <div className="text-center">
                <img src={preview} alt="Preview" className="w-full" />
              </div>
            </div>
          </>
        ) : (
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            onChange={handlePreview}
            required
          />
        )}

        <div className="buttons flex">
          <button
            onClick={handleReset}
            type="button"
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          >
            Post
          </button>
        </div>
        {/* </form> */}
      </form>
    </>
  );
};
export default privateRoute(CreatePost);
