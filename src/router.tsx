import { Route, Routes } from "react-router"
import { MainPage } from "./main/MainPage"
import SelectFavorite from "./selectFavorite/SelectFavorite"
import PostPage from "./post/PostPage"


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectFavorite/>} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/post_page" element={<PostPage/>} />
    </Routes>
  )
}
