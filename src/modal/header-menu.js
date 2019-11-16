import React from "react";
import LeftBar from "../components/left-bar";
import { hideModal } from "../redux/actions";

const HeaderMenu = () => {
  return (
    <div className="py-2 px-2">
      <nav className="container">
        <ul className="list-none">
          <LeftBar isLeft={false} closeModal={hideModal} />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
