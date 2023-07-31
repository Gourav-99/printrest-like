// import "./App.css";
// import React from "react";

import { Route, Routes } from "react-router";
import Login from "./components/auth/Login";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import { Toaster } from "react-hot-toast";
import Gallary from "./components/Gallery";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/auth";
import CreatePost from "./components/post/CreatePost";
import PostView from "./components/PostView";
import EditPost from "./components/post/EditPost";
import { SearchProvider } from "./components/contexts/SearchContext";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <Toaster />
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/edit/:postId" element={<EditPost />} />
          <Route path="/post/:postId" element={<PostView />} />
        </Routes>
        <Footer />
      </SearchProvider>
    </>
  );
}

export default App;
