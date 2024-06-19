import { NavLink } from "react-router-dom";
import "./left-side-bar.scss";

const LeftSideBar = () => {
  return (
    <div className="left-side-bar-content">
      <h1>EnCampo</h1>
      <NavLink to="/">Главная Страница</NavLink>
      <NavLink to="/camps">Лагеры</NavLink>
      {/* <NavLink to="/camps">Лагеры</NavLink> */}
      <NavLink to="/about-us">О нас</NavLink>
    </div>
  );
};

export default LeftSideBar;
