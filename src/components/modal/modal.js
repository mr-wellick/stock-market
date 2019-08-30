import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import './style.scss';

const Modal = ({ children }) => {
  const node = useRef(null);

  if (!node.current) {
    const div = document.createElement('div');
    node.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(node.current);

    return () => {
      modalRoot.removeChild(node.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, node.current);
};

export default Modal;
