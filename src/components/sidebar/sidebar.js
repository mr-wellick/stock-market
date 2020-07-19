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
    <section className="h-screen fixed" style={{ width: '240px' }}>
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
                <label htmlFor={route.id}>
                  {route.icon}
                  <span>{route.name}</span>
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
