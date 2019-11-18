import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { hideModal } from "../../redux/modal.actions";
import {
  MODAL_HEADER_MENU,
  MODAL_CLOSE_TIME,
  MODAL_EXPERIENCE
} from "../../constants";
import Card from "../../experience/card";
import NavBar from "../../app/nav-bar";

Modal.setAppElement("#root"); // Required by react-modal library

/**
 * Reset modal id, this closes modal.
 * @param {Object} event - Optional, usually click event
 */
const closeModal = event => {
  if (event) {
    event.stopPropagation();
  }
  hideModal();
};

/**
 * Modal component. Only visible if modal id stored in Redux.
 * @param {Object} props - Props
 * @returns {Object} Modal component
 */
const AppModal = props => {
  // Executed once on modal mount
  useEffect(() => {
    /**
     * If modal visible, hide modal if ESC keyboard pressed.
     * @param {Object} event - Key event
     */
    const handleKeyDown = event => {
      if (props.modalId && event.keyCode === 27) {
        hideModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, []);

  /**
   * Returns content to show in modal, forwards the dark overlay.
   * @returns {Object} DIV for mobile menu, Card component for experiences
   */
  const getContent = () => {
    switch (props.modalId) {
      // Modal menu at top right
      case MODAL_HEADER_MENU: {
        return (
          <div className="py-2 px-2">
            <NavBar isLeft={false} closeModal={hideModal} />
          </div>
        );
      }
      // Experience detail card
      case MODAL_EXPERIENCE: {
        const experience = props.experiences.find(
          el => el.id === props.modalData
        );
        return <Card experience={experience} />;
      }
      // Unknown, modal is empty
      default:
        return null;
    }
  };

  // Modal shown top right for mobile menu only.
  const isCentered = props.modalId !== MODAL_HEADER_MENU;

  return (
    <Modal
      isOpen={props.modalId !== null}
      onRequestClose={closeModal}
      contentLabel="Modal"
      overlayClassName="mobile-menu-overlay inset-0 fixed flex items-center justify-center"
      className={`mobile-menu-content absolute outline-none rounded shadow-lg overflow-y-auto ${
        isCentered ? "md:max-w-lg mx-auto w-10/12" : "top-0 right-0"
      } ${props.modalId === MODAL_HEADER_MENU ? "bg-gray-100" : "bg-white"}`}
      closeTimeoutMS={MODAL_CLOSE_TIME}
    >
      {getContent(props.modalId, props.modalData)}
    </Modal>
  );
};

AppModal.propTypes = {
  modalId: PropTypes.string, // Modal id, if null no modal visible
  modalData: PropTypes.any, // Modal data, optional
  experiences: PropTypes.array // Experiences array
};

const mapStateToProps = state => ({
  modalId: state.modal.modalId,
  modalData: state.modal.modalData,
  experiences: state.misc.experiences
});

export default connect(mapStateToProps)(AppModal);
