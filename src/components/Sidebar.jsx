import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Icons
import { RiAlignRight, RiCloseLine } from "react-icons/ri";
import { sidebarItems } from "../data/Constants";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div
        className={`h-full xl:h-[100vh] w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto top-0 overflow-y-scroll fixed xl:static bg-secondary-200 p-8 z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <h1 className="text-center text-2xl font-bold text-primary mb-10">
          Admin<span className="text-primary text-4xl">.</span>
        </h1>

        <div>
          <nav>
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                to={`${item.to}`}
                className={`w-[170px] flex items-center text-textSecondary text-sm font-light gap-4 py-2 px-4 mb-4 rounded-lg hover:bg-hover transition-colors ${
                  currentPath === `/${item.to}` ? "bg-hover" : "bg-transparent"
                }`}
              >
                {item.icon}
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-white p-2 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiAlignRight />}
      </button>
    </>
  );
};

export default Sidebar;
