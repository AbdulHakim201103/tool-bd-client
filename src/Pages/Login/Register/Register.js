import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";



const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);

  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  let loginLoading;
  let loginError;

  if ( error || googleError || profileError) {
   loginError = <p className="my-4 text-red-500 text-center">{error?.message || googleError?.message || profileError?.message}</p>
  }

  if (loading || googleLoading || updating) {
    loginLoading = <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">loading</button>
  }

  if (user ||googleUser) {
    navigate('/home')
  }

  const onSubmit = async(data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName: data.name})
    toast.success("Account create Successfully");
  };
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt my-3 text-red-500">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt my-3 text-red-500">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt my-3 text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  }
                })}
              />
              <label className="label ">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt my-3 text-red-500">{errors.password.message}</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt my-3 text-red-500">{errors.password.message}</span>
                )}
              </label>
            </div>
            {loginError}
            {loginLoading}
            <input className="btn w-full max-w-xs" type="submit" value="Login"/>
            <div className="flex justify-center items-center my-4">
              <small>Already have an Account? <Link className="text-primary" to="/login">Please Login</Link> </small>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
    );
};

export default Register;