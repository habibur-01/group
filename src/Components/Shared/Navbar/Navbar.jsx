import { RiMenu2Line } from "react-icons/ri";
import logo from "../../../assets/images/logo.png";
import Container from "../Container/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./navbar.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const NavbarNew = () => {
  const [isDown, setIsDown] = useState(false);
  const [barActive, setBarActive] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const aboutUsRef = useRef(null);
  const location = useLocation();
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBarActive(true);
      } else {
        setBarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDown(!isDown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close dropdowns on route change
    setIsDown(false);
  }, [location]);
  useEffect(() => {
    axios
      .get("/subMenu.json")
      .then((result) => {
        setSubCategory(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subCategory]);

  return (
    <div
      className={`h-24 w-full z-50 bg-base-100 flex items-center ${
        barActive && "navbar-fixed"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="hidden">
              <RiMenu2Line size={30} />
              <div></div>
            </div>

            <div>
              <a className="#">
                <img src={logo} className="h-20 w-16" alt="IGL Group Logo" />
              </a>
            </div>
          </div>
          <div className="menubar">
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  About us
                </NavLink>
              </li>

              {subCategory.length > 0 ? (
                <li className="relative" ref={dropdownRef}>
                  <a className="sidebar" onClick={handleDropdownToggle}>
                    Sister Concern
                    <span className={`${isDown && "rotate-180"}`}>
                      <MdKeyboardArrowDown size={18} className="inline-block" />
                    </span>
                  </a>
                  <div
                    className={`absolute top-[100%] bg-base-200 w-56 space-y-4 z-10 p-4 shadow-md hover:bg-white ${
                      isDown ? "block" : "hidden"
                    }`}
                  >
                    {subCategory.map((subMenu) => (
                      <div className="dropdown-bar" key={subMenu.id}>
                        <Link to={`/${subMenu.path}`}>Duronto Web</Link>
                      </div>
                    ))}
                  </div>
                </li>
              ) : (
                <li>
                  <NavLink
                    to={"/siterconcern"}
                    className={({ isActive }) =>
                      isActive ? "sidebar sidebar-active" : "sidebar"
                    }
                  >
                    Sister Concern
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to={"/team"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Our Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/gallery"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Photo Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "sidebar sidebar-active" : "sidebar"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarNew;
