import { TOGGLE_MODAL } from '../constants/';

function toggleModal(message) {
  return {
    type: TOGGLE_MODAL,
    payload: { message }
  };
}

export default toggleModal;
