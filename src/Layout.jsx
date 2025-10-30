import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";
import NestedLinks from "./components/NestedLinks";
import { useState } from "react";

export default function Layout() {
  const [tabs, setTabs] = useState([]);
  const navigate = useNavigate();

  const addTab = (path, label) => {
    setTabs((prev) => {
      const exists = prev.find((t) => t.path === path);
      if (exists) {
        return [...prev.filter((t) => t.path !== path), { path, label }];
      } else {
        return [...prev, { path, label }];
      }
    });

    navigate(path);
  };

  const removeTab = (path) => {
    setTabs((prev) => {
      const filtered = prev.filter((t) => t.path !== path);

      if (location.pathname === path) {
        if (filtered.length > 0) {
          navigate(filtered[filtered.length - 1].path);
        } else {
          navigate("/");
        }
      }

      return filtered;
    });
  };

  return (
    <>
      <div className="layout-container">
        <Header onAddTab={addTab} />
        <main style={{ padding: "20PX" }}>
          <h1>MAIN APP DATA</h1>
          <NestedLinks tabs={tabs} removeTab={removeTab} />
          <Outlet />
        </main>
      </div>
    </>
  );
}
