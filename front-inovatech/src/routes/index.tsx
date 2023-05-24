import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/index";
import Slice from "../pages/slice";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/problem-solving" element={<Slice />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
