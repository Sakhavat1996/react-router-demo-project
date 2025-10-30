import { NavLink, useLocation } from "react-router";

export default function NestedLinks({ tabs, removeTab }) {
  const location = useLocation();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <div
            key={tab.path}
            style={{
              padding: "5px 10px",
              background: isActive ? "#007bff" : "#333",
              color: "white",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <NavLink
              to={tab.path}
              style={{
                padding: "5px 10px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {tab.label}
            </NavLink>
            <button
              onClick={() => removeTab(tab.path)}
              style={{
                background: "transparent",
                border: "none",
                color: "red",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
