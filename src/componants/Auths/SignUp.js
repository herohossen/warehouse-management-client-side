import React, { useEffect, useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import "../../styles/Auths/SignUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  // const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);
  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    // setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userInfo);

    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Registerd Successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;
        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  return (
    <div className="login-container2">
      <div className="left">
        <div className="login-title">Sign up</div>
        <form className="" onSubmit={handleLogin}>
          {errors?.email && <p className="error-message">{errors.email}</p>}
          <input
            type="text"
            placeholder="Your Email"
            onChange={handleEmailChange}
            required
          />
          {/* {errors?.email && <p className="error-message">{errors.email}</p>} */}
          <div className="relative">
            <input
              type="password"
              placeholder="password"
              onChange={handlePasswordChange}
              required
            />
            {errors?.password && (
              <p className="error-message">{errors.password}</p>
            )}
            {/* <p
            className="absolute top-3 right-5"
            onClick={() => setShowPass(!showPass)}
          ></p> */}
          </div>
          <input
            type="password"
            placeholder="confirm password"
            onChange={handleConfirmPasswordChange}
            required
          />

          <button className="signup-button">Sign up</button>

          {/* {error && <p className="error-message">{error}</p> } */}
          {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
        </form>
      </div>
      <div className="right">
        <span className="loginwith">
          Sign in with
          <br />
          social network
        </span>
        <button
          className="social-signin google"
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle/>  Signup with Google
        </button>
      </div>

      <div className="or">OR</div>
    </div>
  );
};

export default SignUp;
