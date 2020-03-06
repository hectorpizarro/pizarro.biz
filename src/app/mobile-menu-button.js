import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { showModal } from "../shared/modal/ducks";
import { MODAL_HEADER_MENU } from "../shared/constants";

/**
 * Styled button
 */
const MenuButton = styled.button`
  right: ${props => props.theme.size.d5};
  top: ${props => props.theme.size.d5};
  position: fixed;
  padding: 0;
  margin: 0;
  display: block;
  border: 1px solid ${props => props.theme.color.gray400};
  background-color: ${props => props.theme.color.gray100};
  border-radius: 9999px;
  padding-left: ${props => props.theme.size.d2};
  padding-right: ${props => props.theme.size.d2};
  box-shadow: ${props => props.theme.boxShadow};

  @media (min-width: 640px) {
    display: none;
  }
`;

const BarsIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.size.d4};
`;

/**
 * Floating mobile menu button shown on top right of screen.
 * Visible only under 640px screen width.
 * @returns {Object} - HTML button
 */
const MobileMenuButton = () => {
  const dispatch = useDispatch();

  /**
   * Store modal id on Redux to open mobile menu modal.
   */
  const openModal = () => dispatch(showModal({ id: MODAL_HEADER_MENU }));

  return (
    <MenuButton onClick={openModal} aria-label="Mobile Menu Button">
      <BarsIcon icon={faBars} />
    </MenuButton>
  );
};

export default MobileMenuButton;
