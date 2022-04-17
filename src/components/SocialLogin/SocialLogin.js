import React from 'react';
import googleLogo from '../../images/social/google.png';
import facebookLogo from '../../images/social/facebook.png';
import githubLogo from '../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, errorForGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, errorForGithub] = useSignInWithGithub(auth);

    let errorElement;
    if (errorForGoogle || errorForGithub) {
        errorElement = <div>
            <p className='text-danger'>Error: {errorForGoogle?.message}{errorForGithub.message}</p>
        </div>
    }

    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: "1px" }} className='bg-secondary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50' ></div>
            </div>
            <div>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-secondary w-50 mx-auto  my-2 d-block'>
                    <img width="20px" src={googleLogo} alt="" />
                    <span className='mx-3'> Google Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 mx-auto  my-2 d-block'>
                    <img width="20px" src={githubLogo} alt="" />
                    <span className='mx-3'> Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;