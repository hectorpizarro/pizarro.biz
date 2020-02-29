import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { showModal } from "../shared/modal/ducks";
import { MODAL_HEADER_MENU } from "../constants";

/**
 * Styled button
 */
const MenuButton = styled.button`
  right: 1.25rem;
  top: 1.25rem;
`;

/**
 * Store modal id on Redux to open mobile menu modal.
 */
const openModal = () => showModal({ id: MODAL_HEADER_MENU });

/**
 * Floating mobile menu button shown on top right of screen.
 * Visible only under 640px screen width.
 * @returns {Object} - HTML button
 */
const MobileMenuButton = () => (
  <MenuButton
    className="menu-button fixed p-0 m-0 block sm:hidden border border-gray-400 bg-gray-100 rounded-full px-2 shadow-lg"
    onClick={openModal}
    aria-label="Mobile Menu Button"
  >
    <FontAwesomeIcon icon={faBars} className="text-1xl" />
  </MenuButton>
);

const mapDispatchToProps = {
  showModal
};

export default connect(null, mapDispatchToProps)(MobileMenuButton);
