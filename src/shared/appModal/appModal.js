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
    <Modal
      isOpen={[MODAL_HEADER_MENU, MODAL_EXPERIENCE].includes(modalId)}
      onRequestClose={closeModal}
      contentLabel="Modal"
      overlayClassName="modal-overlay"
      className={`modal-content ${modalId === MODAL_HEADER_MENU &&
        "modal-content-menu"}`}
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
  );
};

InternalAppModal.propTypes = {
  modalId: PropTypes.string, // Modal id, if null no modal visible
  modalData: PropTypes.any, // Modal data, optional
  experiences: PropTypes.object
};

InternalAppModal.defaultProps = {
  modalId: null,
  modalData: null, // Modal data, optional
  experiences: null
};

const mapStateToProps = state => ({
  modalId: state.modal.modalId,
  modalData: state.modal.modalData,
  experiences: state.experiences.byId
});

export default connect(mapStateToProps)(InternalAppModal);
