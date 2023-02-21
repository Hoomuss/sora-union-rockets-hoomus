import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};
