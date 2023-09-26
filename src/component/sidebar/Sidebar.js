
import React from 'react';
import Logo from './logo/Logo';
import SideMenu from './sidemenu/SideMenu';
import Account from './account/Account';

const Sidebar = () => {
    return (
        <aside className='w-[275px] max-h-screen min-h-screen px-2 flex flex-col sticky top-0'>
          <Logo/>
          <SideMenu/>
          <Account/>
        

        </aside>
    );
}

export default Sidebar;
