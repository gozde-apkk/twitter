import React from 'react';
import Search from './search/Search';
import Topics from './topics/Topics';
import WhoFollow from './who-to-follow/WhoFollow';
import Footer from './footer/Footer';

const RightBar = () => {
    return (
        <div className='w-[350px] mr-2.5 '>
            <Search/>
            <Topics/>
            <WhoFollow/>
            <Footer/>
        </div>
    );
}

export default RightBar;
