import classNames from "classnames";
import Menus from "./menus";

import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = (e) => setMenuToggle(!menuToggle);

  const outsideClick = (e) => {
    // console.log(e.target);
    if (
      !e.target.closest(".dy__header-menu") &&
      !e.target.closest(".dy__header-menu_pop")
    ) {
      setMenuToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", outsideClick);

    return () => {
      window.removeEventListener("click", outsideClick);
    };
  }, []);
  return (
    <div className={classNames("dy__header")}>
      <div className={classNames("dy__header-logo")}>DyGym</div>
      <div className={classNames("dy__header-menu")} onClick={handleMenuToggle}>
        <AiOutlineMenu size={20} />
      </div>
      {menuToggle && (
        <div className={classNames("dy__header-menu_pop")}>
          <div className={classNames("dy__header-menu_title")}>Menus</div>
          <Menus handleClick={handleMenuToggle} />
        </div>
      )}
    </div>
  );
}

export default Header;
