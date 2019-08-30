import { TOGGLE_MODAL } from '../constants/';

const toggleModal = message => {
  return {
    type: TOGGLE_MODAL,
    payload: { message }
  };
};

export default toggleModal;
