import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/';

const useToggler = () => {
  const [toggled, setToggled] = useState(true);
  const { className } = useSelector(state => state.uiReducer);
  const dispatch = useDispatch();

  const toggle = () => {
    setToggled(!toggled);
    dispatch(toggleSidebar(toggled));
  };

  return [className, toggle];
};

export default useToggler;
