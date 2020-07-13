import React from 'react';
import { IexIcon } from '../../icons/';
import { DashboardIcon } from '../../icons/';
import './style.scss';

const routes = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon />,
  },
];

const Sidebar = () => {
  return (
    <section className="h-screen fixed border-r sidebar-container">
      <div className="px-6 pt-6 pb-5 iex-icon">
        <IexIcon />
      </div>
      <div className="h-64 border-b">
        <div className="sidebar-routes-container">
          <form>
            {routes.map((route) => (
              <div key={route.id} className="flex">
                <input
                  className="hidden"
                  type="radio"
                  name="route-selector"
                  id={route.id}
                  defaultChecked
                />
                <label
                  className="flex items-center px-4 py-3 w-full cursor-pointer"
                  htmlFor={route.id}
                >
                  {route.icon}
                  <span className="pl-4">{route.name}</span>
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
