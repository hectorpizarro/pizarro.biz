// import React from "react";
// import { Provider, useDispatch } from "react-redux";
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import modal from "./ducks";
// import { AppModal } from "./appModal";
// import { MODAL_HEADER_MENU } from "../constants";
// import { setFlagInitRoute } from "../../app/ducks";

// export default {
//   title: "Shared / Modal",
//   component: AppModal,
//   parameters: {
//     notes: "Shared component: Mobile menu modal, Experience modal."
//   }
// };

// let dispatch = null;

// const addReduxDecorator = storyFn => {
//   const rootReducer = combineReducers({ modal });
//   const store = configureStore({ reducer: rootReducer });

//   // set flag so scroll is executed only once
//   dispatch(setFlagInitRoute());
//   return <Provider store={store}>{storyFn()}</Provider>;
// };

// export const MobileMenu = () => {
//   dispatch = useDispatch();

//   return <AppModal modalId={MODAL_HEADER_MENU} />;
// };
// MobileMenu.story = {
//   decorators: [addReduxDecorator]
// };
// /*
// modalId: PropTypes.string, // Modal id, if null no modal visible
//   modalData: PropTypes.any, // Modal data, optional
//   experiences: PropTypes.object
// */
