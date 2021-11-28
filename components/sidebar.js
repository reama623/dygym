import classNames from "classnames";
import Menus from "./menus";

function Sidebar() {
  return (
    <div className={classNames("dy__sidebar")}>
      <Menus handleClick={(e) => e} />
    </div>
  );
}

export default Sidebar;
