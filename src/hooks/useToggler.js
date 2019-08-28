import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { sidebarToggled } from '../redux/';

const useToggler = () => {
  const dispatch = useDispatch();
  const { toggled } = useSelector(state => state.uiReducer);

  const setToggle = () => {
    if (toggled === '') {
      dispatch(sidebarToggled(true));
    } else {
      dispatch(sidebarToggled(false));
    }
  };

  return [toggled, setToggle];
};

export default useToggler;
