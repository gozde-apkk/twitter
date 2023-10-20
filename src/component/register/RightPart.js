


import React from 'react';

import './RightPart.css';

const RightPart = () => {
    return (
        <div className='content-right'>
            <div className='right-one'>
                <div className='context'>
                    <span>Şu anda olup bitenler</span>
                </div>
                <div className='context-two'>
                    <span>Hemen katılın..</span>
                </div>
                <div className='context-three'>
                    <div className='form'>
                    <button className='btn'/>    
                    </div>
                    <div className='form'>
                    <button className='btn'/>
                    </div>
                    <div className='line'>
                      <hr/>
                      <span>veya</span>
                      <hr/>
                    </div>
                    <div className='form'>
                        <button id='blue' className='btn'>Hesap oluştur</button>
                    </div>
                    <div className='cookie'>
                    By signing up, you agree to the 
                    <a href="https://twitter.com/tos" rel="noopener noreferrer nofollow" target="_blank" role="link" ><span >Terms of Service</span></a>
                    "and"
                    <a href="https://twitter.com/privacy" rel="noopener noreferrer nofollow" target="_blank" role="link" ><span >Privacy Policy</span></a>
                    , including
                    <a href="https://help.twitter.com/rules-and-policies/twitter-cookies" rel="noopener noreferrer nofollow" target="_blank" role="link" ><span >Cookie Use.</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightPart;
