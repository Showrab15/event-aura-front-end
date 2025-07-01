/* eslint-disable no-unused-vars */
import logo from "../../assets/EventAura.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { navLinks } from "./routes";
import MenuItems from "./MenuItems";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
const [skipFetchUser, setSkipFetchUser] = useState(false);


useEffect(() => {
  if (skipFetchUser) {
    setSkipFetchUser(false);
    return;
  }
  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/me", {
        credentials: "include",
      });

      if (res.status === 401) {
        setUser(null);
        return;
      }

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      console.log("Fetched user:", data); // 👈 add this temporarily
      setUser(data);
    } catch (err) {
      setUser(null);
    }
  };

  fetchUser();
}, [location]);



  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

//   try {
//     await fetch("http://localhost:5000/logout", {
//       method: "POST",
//       credentials: "include",
//     });
//   } catch (err) {
//     console.error("Logout error", err);
//   }
//   setUser(null);
//   setDropdownOpen(false);
//   navigate("/");
// };

  // Close dropdown on outside click


  // old
 const handleLogout = async () => {
  try {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include", // ✅ Required to send cookies
    });
  } catch (err) {
    console.error("Logout error", err);
  }

  setUser(null);
  setSkipFetchUser(true);
  navigate("/");
};



  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-md relative z-50">
      <div className="flex items-center justify-between py-4 px-6 max-w-[1320px] mx-auto">
        {/* Logo */}
        <Link className="flex items-center gap-2" to="/">
          <img src={logo} className="w-10 h-10 lg:w-14 lg:h-14" alt="EventAura logo" />
          <h3 className="font-bold text-[#6C63FF] text-xl">EventAura</h3>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
          <MenuItems links={navLinks} />
        </nav>

        {/* Login/Profile */}
        <div className="hidden md:block relative">
          {!user ? (
            <NavLink to="/login">
              <button className="bg-[#6C63FF] hover:bg-[#4A44C6] text-white py-2 px-4 rounded-md shadow transition duration-300">
                Login
              </button>
            </NavLink>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <img
                src={user.photoURL}
                crossOrigin= "anonymous"
                  onError={(e) => (e.target.src = "/default-avatar.png")}

                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer object-cover"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md py-2">
                  <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
                    {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            {menuOpen ? (
              <svg className="w-6 h-6 text-[#6C63FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 mr-6 my-auto text-[#6C63FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                <path d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                <path d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-[70px] w-full left-0 p-6 bg-[#F5F5F5] z-40 shadow-md transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 text-[#1E1E1E]">
          <MenuItems links={navLinks} onLinkClick={closeMenu} isMobile />
          <li>
            {!user ? (
              <NavLink to="/login" onClick={closeMenu}>
                <button className="bg-[#6C63FF] hover:bg-[#4A44C6] text-white py-2 px-4 rounded-md shadow w-full">
                  Login
                </button>
              </NavLink>
            ) : (
              <div className="flex flex-col gap-2 text-left text-sm">
                <div className="font-semibold text-[#333]">{user.name}</div>
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="text-red-500 hover:underline"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
