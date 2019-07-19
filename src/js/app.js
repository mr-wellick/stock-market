import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { NavBar } from './components/';
import { Sidebar } from './components/';

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />

      {/* will remove. just prototyping main container that will hold all of our content */}
      <section style={{ paddingTop: '50px', marginLeft: 'auto', width: 'calc(100% - 256px)' }}>
        <div
          style={{
            height: '48px',
            borderBottom: '1.1px solid rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          summary
        </div>
        <div style={{ padding: '24px' }}>main content</div>
      </section>
    </>
  );
};

export default hot(App);
