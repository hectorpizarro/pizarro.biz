import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import styled from "styled-components";

import { showModal } from "../redux/actions";
import { MODAL_HEADER_MENU } from "../constants";

Modal.setAppElement("#root");

const MenuButton = styled.button`
  right: 1.25rem;
  top: 1.25rem;
`;

const openModal = () => showModal(MODAL_HEADER_MENU);

const MobileMenuButton = () => (
  <MenuButton
    className="menu-button fixed p-0 m-0 block sm:hidden border border-gray-400 bg-gray-100 rounded-full px-2 shadow-lg"
    onClick={openModal}
    aria-label="Mobile Menu Button"
  >
    <FontAwesomeIcon icon={faBars} className="text-1xl" />
  </MenuButton>
);

export default React.memo(MobileMenuButton);
