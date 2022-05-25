import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [resetEmail, setResetEmail] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  const [token] = useToken(user || googleUser)

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let loginLoading;
  let loginError;

  if (error || googleError) {
    loginError = (
      <p className="my-4 text-red-500 text-center">{error?.message || googleError?.message}</p>
    );
  }

  if (loading || googleLoading || sending) {
    loginLoading = (
      <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">
        loading
      </button>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    const email = resetEmail;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.error("Please enter your email address");
    }
  };

  const onSubmit = (data) => {
    setResetEmail(data.email);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  },
                })}
              />
              <label className="label ">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt my-3 text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt my-3 text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {loginError}
            {loginLoading}
            <input className="btn w-full max-w-xs" type="submit" value="Login" />
            <div className="flex justify-center items-center mt-4">
              <small>
                New to ToolsBD?{" "}
                <Link className="text-primary" to="/register">
                  Create new Account
                </Link>
              </small>
            </div>
            <div className="flex justify-center items-center mb-3">
              <small className="text-center ">
                Forget Password?
                <button onClick={resetPassword} className="btn btn-link capitalize">
                  Reset Password
                </button>
              </small>
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

export default Login;
