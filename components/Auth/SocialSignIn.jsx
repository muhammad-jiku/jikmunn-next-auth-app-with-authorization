'use client';

import React from 'react';
import googleLogo from '../../assets/images/google.png';
import githubLogo from '../../assets/images/github.png';
// import twitterLogo from '../../assets/images/twitter.png';
import { signIn } from 'next-auth/react';

const SocialSignIn = () => {
  const handleGoogleLogin = async () => {
    console.log('google sign in');
    try {
      await signIn('google', {
        callbackUrl: 'http://localhost:3000',
        //  callbackUrl: 'https://jikmunn-next-auth-app.vercel.app',
        // redirect: false,
      });
    } catch (err) {
      console.log('google error => ', err);
      console.log('google error ====', err.message);
    }
  };

  const handleGithubLogin = async () => {
    console.log('github sign in');
    try {
      await signIn('github', {
        callbackUrl: 'http://localhost:3000',
        //  callbackUrl: 'https://jikmunn-next-auth-app.vercel.app',
        // redirect: false,
      });
    } catch (err) {
      console.log('github error => ', err);
      console.log('github error ====', err.message);
    }
  };

  // const handleTwitterLogin = async () => {
  //   console.log('twitter sign in');
  //   //  try {
  //   //    await signIn('github', {
  //   //      // callbackUrl: 'http://localhost:3000',
  //   //      callbackUrl: 'https://jikmunn-next-auth-app.vercel.app',
  //   //    });
  //   //  } catch (err) {
  //   //    console.log('github error => ', err);
  //   //  }
  // };

  return (
    <div>
      <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleGoogleLogin}
      >
        Continue with <img src={googleLogo.src} alt="google" className="ml-2" />{' '}
      </button>{' '}
      <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleGithubLogin}
      >
        Continue with <img src={githubLogo.src} alt="github" className="ml-2" />{' '}
      </button>{' '}
      {/* <button
        className="btn btn-outline btn-primary w-full my-2"
        onClick={handleTwitterLogin}
      >
        Continue with{' '}
        <img src={twitterLogo.src} alt="github" className="ml-2" />{' '}
      </button> */}
    </div>
  );
};

export default SocialSignIn;
