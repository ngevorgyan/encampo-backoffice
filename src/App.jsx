import { Route, Routes } from "react-router-dom";
import Camps from "./pages/camps";
import HomePage from "./pages/home";
import Root from "./pages/root";
import AboutUsPage from "./pages/about-us";
import CreaeteUpdateCampPage from "./pages/create-update-camp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/camp/create/:id?" element={<CreaeteUpdateCampPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}
