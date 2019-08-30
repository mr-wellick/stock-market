import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { toggleModal } from '../../redux/';
import './style.scss';

const ModalHelper = ({ children }) => {
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

  return createPortal(<>{children}</>, node.current);
};

const Modal = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.uiReducer);

  return message.error ? (
    <ModalHelper>
      <div className="modal-container">
        <div className="modal-card">
          <div className="modal-content">
            <h4 className="modal-header">Message</h4>
            <p className="modal-message">{message.error}</p>
          </div>
          <div className="modal-footer">
            <button className="modal-btn" onClick={() => dispatch(toggleModal({}))}>
              close
            </button>
          </div>
        </div>
      </div>
    </ModalHelper>
  ) : null;
};

export default Modal;
