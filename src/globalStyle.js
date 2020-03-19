import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${props => props.theme.fontsize.base};
  }

  /* Remove outline for all buttons */
  button:focus {
    outline: 0;
  }

  /* React modal background overlay */
  .modal-overlay {
    opacity: 0;
    transition: opacity 600ms ease-in-out;
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

  /* React modal content */
  .modal-content {
    max-height: 90%;
    position: absolute;
    outline: 0;
    border-radius: ${props => props.theme.size.d1};
    box-shadow: ${props => props.theme.boxShadow};;
    overflow-y: auto;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.theme.size.d32};
    @media (min-width: 640px) {
        width: 84%;
    }
  }

  .modal-content-menu {
    background-color: ${props => props.theme.color.gray100};
    top: 0;
    right: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

export default GlobalStyle;
