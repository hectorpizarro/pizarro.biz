import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { showModal } from "../shared/appModal/ducks";
import { MODAL_HEADER_MENU } from "../shared/constants";

/**
 * Styled button
 */
const StyledButton = styled.button`
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
  cursor: pointer;

  @media (min-width: 640px) {
    display: none;
  }
`;

const StyledBarsIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontsize.base};
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
  const openModal = event => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(showModal({ id: MODAL_HEADER_MENU }));
  };

  return (
    <StyledButton onClick={openModal}>
      <StyledBarsIcon icon={faBars} />
    </StyledButton>
  );
};

export default MobileMenuButton;
