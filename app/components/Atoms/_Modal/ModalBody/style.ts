import { styled } from "styled-components";

export const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50%",
    height: "90%",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.7)",
  },
};

export const ModalContainer = styled.div`
height: 100%;
width: 80%;
margin: 0 auto;
  position: relative;
`;
