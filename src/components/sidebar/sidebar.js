import React from 'react';
import { IexIcon } from '../../icons/';
import { DashboardIcon } from '../../icons/';
import './style.scss';

const routes = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon />
  }
];

const Sidebar = () => {
  return (
    <section className="h-screen fixed bg-blue w-240">
      <div className="pt-24 pb-20 px-24">
        <IexIcon />
      </div>
      <div>
        <div>
          <form>
            {routes.map(route => (
              <div key={route.id}>
                <input
                  className="hidden"
                  type="radio"
                  name="route-selector"
                  id={route.id}
                  defaultChecked
                />
                <label className="flex items-center pl-28 pr-24 py-7" htmlFor={route.id}>
                  <div className="mr-16">{route.icon}</div>
                  <span className="text-white"> {route.name}</span>
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
