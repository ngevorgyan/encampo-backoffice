import LeftSideBar from "../components/left-side-bar/LeftSideBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="general-content">
      <LeftSideBar />
      <div id="detail" style={{ padding: "20px", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
