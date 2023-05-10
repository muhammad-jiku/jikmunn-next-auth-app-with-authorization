'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import SocialSignIn from './SocialSignIn';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  let errorMessage;
  const router = useRouter();

  const onSubmit = async () => {
    const email = watch('email');
    const password = watch('password');

    console.log(email, password);

    try {
      const data = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
        redirect: false,
      });
      console.log('signin data', data);

      if (data?.ok) {
        console.log('signin data............', data);
        reset();
        router.push(data?.url);
      }
    } catch (err) {
      console.log('email sign in err', err);
      console.log('email sign in err msg', err.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered input-primary"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Invalid Email',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors.email?.type === 'required' && (
                      <span>{errors?.email?.message}</span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span>{errors?.email?.message}</span>
                    )}
                  </p>
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered input-primary"
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must be at least six letters',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors.password?.type === 'required' && (
                      <span>{errors?.password?.message}</span>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <span>{errors?.password?.message}</span>
                    )}
                  </p>
                </div>
                <div className="form-control mt-6">
                  {errorMessage}
                  <input
                    type="submit"
                    className="btn btn-primary text-white uppercase"
                    value="Sign in"
                  />{' '}
                  <p className="text-center font-bold">
                    New here?{' '}
                    <Link href={`/signup`}>
                      {' '}
                      <span className="text-primary cursor-pointer">
                        {' '}
                        sign up now!
                      </span>
                    </Link>
                  </p>
                </div>
              </form>{' '}
              <div className="divider">OR</div>
              <SocialSignIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
