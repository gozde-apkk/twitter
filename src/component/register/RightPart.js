


import React from 'react';

import './RightPart.css';

const RightPart = () => {
    return (
        <div className='content-right'>
            <div className='right-one'>
                <div className='context'>
                    <span className='span-content'>Şu anda olup bitenler</span>
                </div>
                <div className='context-two'>
                    <span >Hemen katıl.</span>
                </div>
                <div className='context-three'>
                    <div className='form'>
                   <div className='form-first'>
                   <button className='btn'>
                    <svg version="1.1"  viewBox="0 0 48 48" className='goggle'><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>  
                    <span className="goggle-span">Google ile kaydolun</span>
                        </button>  
                    </div>  
                    </div>
                    <div className='form'>
                    <button className='btn'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className='apple' ><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg>
                    <span className='apple-span'>Apple ile kaydol</span>
                    </button>
                    </div>
                    <div className='line'>
                      <div  className='first-line'/>
                      <span>veya</span>
                      <div className='first-line'/>
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
                    <div className='right-end'>
                        <div className='end-one'>
                            <span>Zaten bir hesabın var mı?</span>
                        </div>
                      <button className='btn'>
                      <a href='/login'>
                            <div>
                                <span>Giriş yap</span>
                            </div>
                        </a>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightPart;
