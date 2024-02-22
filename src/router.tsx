import { Route, Routes } from "react-router"
import { MainPage } from "./main/MainPage"
import SelectFavorite from "./selectFavorite/SelectFavorite"


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectFavorite/>} />
      <Route path="/home" element={<MainPage />} />
    </Routes>
  )
}
