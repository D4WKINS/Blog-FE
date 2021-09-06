import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import Login from "./components/login"
import LoginGoogle from "./components/loginGoogle";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      <Route path="/login/google" exact component={LoginGoogle} />
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
