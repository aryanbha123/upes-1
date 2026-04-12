import  { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./compoents/BlogPage";
import HomePage from "./compoents/HomePage";
import BlogList from "./compoents/BlogList";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create-blog" element={<BlogPage/>} />
          <Route path="/list-blogs" element={<BlogList/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
