import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/';

const useToggler = () => {
  const dispatch = useDispatch();
  const { className: toggle } = useSelector(state => state.uiReducer);

  const setToggle = () => {
    if (toggle === '') {
      dispatch(toggleSidebar(true));
    } else {
      dispatch(toggleSidebar(false));
    }
  };

  return [toggle, setToggle];
};

export default useToggler;
