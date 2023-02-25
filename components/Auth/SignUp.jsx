'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import SocialSignIn from './SocialSignIn';

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  let errorMessage;
  // const router = useRouter();

  const onSubmit = async () => {
    const username = watch('username')
      .toLowerCase()
      .replace(/^[ \t]+|[ \t]+$/gm, '');
    const email = watch('email');
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    if (password !== confirmPassword) {
      console.log('Something went wrong!');
    } else {
      const newUser = {
        username,
        email,
        password,
      };
      console.log(newUser);
      // sign up method
      // await fetch('http://localhost:3000/api/auth/sign-up', {
      //  await fetch('https://jikmunn-next-auth-app.vercel.app/api/auth/sign-up', {
      //    method: 'POST',
      //    headers: {
      //      // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      //      'Content-Type': 'application/json',
      //    },
      //    body: JSON.stringify(newUser),
      //  })
      //    .then((res) => {
      //      // console.log('res ', res);
      //      return res.json();
      //    })
      //    .then((data) => {
      //      if (data) {
      //        console.log('sign up data ', data);
      //        console.log('sign up data message', data?.message);
      //        reset();
      //        router.push('https://jikmunn-next-auth-app.vercel.app/');
      //      } else {
      //        console.log('Something went wrong!');
      //      }
      //    })
      //    .catch((err) => {
      //      console.log('sign up err', err);
      //    });
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
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered input-primary"
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors?.displayName?.type === 'required' && (
                      <span>{errors?.displayName?.message}</span>
                    )}
                  </p>
                </div>

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

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-primary font-bold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered input-primary"
                    {...register('confirmPassword', {
                      required: {
                        value: true,
                        message: 'You need to confirm your password',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must be at least six letters',
                      },
                    })}
                    style={{ backgroundColor: 'white' }}
                  />
                  <p className="text-red-500 font-semibold">
                    {errors.confirmPassword?.type === 'required' && (
                      <span>{errors?.confirmPassword?.message}</span>
                    )}
                    {errors.confirmPassword?.type === 'minLength' && (
                      <span>{errors?.confirmPassword?.message}</span>
                    )}
                  </p>
                </div>

                <div className="form-control mt-6">
                  {errorMessage}
                  <input
                    type="submit"
                    className="btn btn-primary text-white uppercase"
                    value="Sign up"
                  />{' '}
                  <p className="text-center font-bold">
                    Already have an account?
                    <Link href={`/signin`}>
                      <span className="text-primary cursor-pointer">
                        {' '}
                        sign in now!
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

export default SignUp;
