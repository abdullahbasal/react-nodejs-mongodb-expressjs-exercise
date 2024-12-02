import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { UserContextProvider } from "./components/user-context/UserContext";
import BlogPage from "./pages/blog-page/BlogPage";
import LoginPage from "./pages/login-page/LoginPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import CreatePost from "./pages/create-post-page/CreatePost";
import PostPage from "./pages/post-page/PostPage";
import EditPost from "./pages/edit-page/EditPost";
import HomePage from "./pages/home-page/HomePage";
import ErrorPage from "./pages/error-page/ErrorPage";
import PrivacyPolicyPage from "./pages/privacy-policy-page/PrivacyPolicyPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route index path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
