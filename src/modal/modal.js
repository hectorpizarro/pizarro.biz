import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { hideModal } from "../redux/actions";
import {
  MODAL_HEADER_MENU,
  MODAL_CLOSE_TIME,
  MODAL_EXPERIENCE
} from "../constants";
import HeaderMenu from "./header-menu";
import Card from "../experience/card";

Modal.setAppElement("#root"); // Required by react-modal library

const closeModal = event => {
  event.stopPropagation();
  hideModal();
};

const AppModal = props => {
  const getContent = () => {
    switch (props.modalId) {
      case MODAL_HEADER_MENU: {
        return <HeaderMenu />;
      }
      case MODAL_EXPERIENCE: {
        const experience = props.experiences.find(
          el => el.id === props.modalData
        );
        return <Card experience={experience} />;
      }
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (props.modalId && event.keyCode === 27) {
        hideModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [props.modalId]);

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

const mapStateToProps = state => ({
  modalId: state.modalId,
  modalData: state.modalData,
  experiences: state.experiences
});

export default connect(mapStateToProps)(AppModal);
