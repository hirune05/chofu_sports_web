import { Route, Routes } from "react-router"
import { MainPage } from "./main/index"


export const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<MainPage />} />
    </Routes>
  )
}
