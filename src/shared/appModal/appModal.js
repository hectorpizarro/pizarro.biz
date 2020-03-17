import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { hideModal } from "./ducks";
import {
  MODAL_HEADER_MENU,
  MODAL_CLOSE_TIME,
  MODAL_EXPERIENCE
} from "../constants";
import Card from "../../pages/experience/card";
import NavBar from "../../app/navBar";

Modal.setAppElement("#root"); // Required by react-modal library

const StyledModalHeader = styled.div`
  padding: ${props => props.theme.size.d2};
`;

const ModalWrap = styled.div`
  & .mobile-menu-overlay {
    background-color: rgb(26, 32, 44, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .mobile-menu-content {
    max-height: 90%;
    position: absolute;
    outline: 0;
    border-radius: ${props => props.theme.size.d1};
    box-shadow: ${props => props.theme.boxShadow};
    overflow-y: auto;
    background-color: ${props =>
      props.modalId === MODAL_HEADER_MENU
        ? props.theme.color.gray100
        : "white"};
    ${props =>
      props.modalId === MODAL_HEADER_MENU
        ? `
          top: 0;
          right: 0;
          `
        : `
          margin-left: auto;
          margin-right: auto;
          width: 84%;
          @media (min-width: 768px) {
            max-width: ${props.theme.size.d32};
          }
          `}
  }
`;

/**
 * Modal component. Only visible if modal id stored in Redux.
 * @returns {Object} Modal component
 */
export const InternalAppModal = ({ modalId, modalData, experiences }) => {
  const dispatch = useDispatch();

  /**
   * Reset modal id, this closes modal.
   * @param {Object} event - Optional, usually click event
   */
  const closeModal = event => {
    if (event) {
      event.stopPropagation();
    }
    dispatch(hideModal());
  };

  // Executed once on modal mount
  useEffect(() => {
    /**
     * If modal visible, hide modal if ESC keyboard pressed.
     * @param {Object} event - Key event
     */
    const handleKeyDown = event => {
      if (modalId && event.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, []);

  return (
    <ModalWrap>
      <Modal
        isOpen={[MODAL_HEADER_MENU, MODAL_EXPERIENCE].includes(modalId)}
        onRequestClose={closeModal}
        contentLabel="Modal"
        overlayClassName="mobile-menu-overlay"
        className="mobile-menu-content"
        closeTimeoutMS={MODAL_CLOSE_TIME}
        modalId={modalId}
      >
        {modalId === MODAL_HEADER_MENU && (
          <StyledModalHeader>
            <NavBar isLeft={false} closeModal={closeModal} />
          </StyledModalHeader>
        )}
        {modalId === MODAL_EXPERIENCE && (
          <Card experience={experiences[modalData]} />
        )}
      </Modal>
    </ModalWrap>
  );
};

InternalAppModal.propTypes = {
  modalId: PropTypes.string, // Modal id, if null no modal visible
  modalData: PropTypes.any, // Modal data, optional
  experiences: PropTypes.object,
  theme: PropTypes.object
};

InternalAppModal.defaultProps = {
  modalId: null,
  modalData: null, // Modal data, optional
  experiences: null,
  theme: {}
};

const mapStateToProps = state => ({
  modalId: state.modal.modalId,
  modalData: state.modal.modalData,
  experiences: state.experiences.byId
});

export default connect(mapStateToProps)(InternalAppModal);
