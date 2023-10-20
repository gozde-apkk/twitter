



import React from 'react';

import '../assest/logout/style.css';

import RightPart from '../component/register/RightPart';
import LeftPart from '../component/register/LeftPart';
import Footer from '../component/register/Footer';


const Authorization = () => {
    return (
     <div className='aut-container'>
        <div className='top'> 
        <RightPart/>
        <LeftPart/>
        </div>
        <Footer/>
 
     </div>
    );
}

export default Authorization;
