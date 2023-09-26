import React from 'react';
import Search from './search/Search';
import Topics from './topics/Topics';

const RightBar = () => {
    return (
        <div className='w-[350px] mr-2.5 '>
            <Search/>
            <Topics/>
        </div>
    );
}

export default RightBar;
