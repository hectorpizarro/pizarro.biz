import React from "react";
import NavBar from "../../app/nav-bar";
import { hideModal } from "../../redux/modal.actions";

const HeaderMenu = () => {
  return (
    <div className="py-2 px-2">
      <nav className="container">
        <ul className="list-none">
          <NavBar isLeft={false} closeModal={hideModal} />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
