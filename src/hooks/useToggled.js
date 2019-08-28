import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { sidebarToggled } from '../redux/';

const useToggled = () => {
  const dispatch = useDispatch();
  const { toggled } = useSelector(state => state.uiReducer);

  const setToggled = () => {
    if (toggled === '') {
      dispatch(sidebarToggled(true));
    } else {
      dispatch(sidebarToggled(false));
    }
  };

  return [toggled, setToggled];
};

export default useToggled;
