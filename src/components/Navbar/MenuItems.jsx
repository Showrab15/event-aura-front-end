import { NavLink } from "react-router-dom";

const MenuItems = ({ links, onLinkClick, isMobile = false }) => {
  return (
    <>
      {links.map(({ path, label }, idx) => (
        <NavLink
          key={idx}
          to={path}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""} ${
              isMobile ? "text-lg font-medium" : "text-base"
            }`
          }
          end
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

export default MenuItems;
