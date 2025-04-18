import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import Catalog from "../pages/Catalog";
import SpecialCondition from "../pages/SpecialCondition";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="special-condition" element={<SpecialCondition />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
