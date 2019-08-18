import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/';

const useToggler = () => {
  const [toggled, setToggled] = useState(true);
  const dispatch = useDispatch();

  const toggle = () => {
    setToggled(!toggled);
    dispatch(toggleSidebar(toggled));
  };

  return toggle;
};

export default useToggler;
