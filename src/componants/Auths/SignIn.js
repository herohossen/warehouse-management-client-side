import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "../../styles/Auths/SignIn.css";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { sendPasswordResetEmail } from "firebase/auth";
import PageTitle from "../../styles/Shared/PageTitle";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
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

  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log(userInfo);
    await signInWithEmail(userInfo.email, userInfo.password);
    const { data } = await axios.post(
      "https://inventory-management-p11.herokuapp.com/login",
      {
        email: userInfo.email,
      }
    );

    // console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
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
  }, [hookError, googleError]);

  if (loading) {
    return <p>Loding...</p>;
  }
  // password resat
  const resetPassword = () => {
    if (userInfo.email) {
      sendPasswordResetEmail(userInfo.email);
      toast.success("Sent email");
    } else {
      toast.warning("Enter your email address Please");
    }
  };
  return (
    <div className="login-container">
      <PageTitle title={"Sign In"}></PageTitle>
      <h1 className="login-title text-center">LOGIN</h1>
      <div className="login-form">
        <form onSubmit={handleLogin} autoComplete="off" required>
          <input
            type="text"
            placeholder="Your Email"
            onChange={handleEmailChange}
          />

          {errors?.email && <p className="error-message">{errors.email}</p>}

          <input
            type="password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          {errors?.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <button>Login</button>

          {/* {error && <p className="error-message">{error}</p> } */}
          {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>{" "}
        </p>
        <p className="text-center">
          Forget Password?{" "}
          <button className="" onClick={resetPassword}>
            Reset Password
          </button>{" "}
        </p>
        <button
          className="social-signin google"
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle /> SignIn With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
