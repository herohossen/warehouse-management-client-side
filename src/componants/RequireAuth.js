import React from "react";
import auth from "../firebase.init";
import {useAuthState} from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { Button } from "bootstrap";
import { ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (loading){
    return <p>Loding...</p>
  }
  if (error){
    return error;
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return (
      <div className="  container h-25 d-flex justify-content-center align-items-center">
        <div className="text-center mt-5 bg-light p-5 rounded-2">
          <h3 className=" text-danger">Email is not verified!!</h3>
          <h5 className=" text-warning">Verify your email Please</h5>
          <Button
            className=" bg-info bg-gradient bg-opacity-100 border-0 fw-bold mb-3"
            onClick={async () => {
              await sendEmailVerification();
              toast.success('Sent email Successfully!');
            }}
          >
            Send A Verification Email
          </Button>
          <ToastContainer />
        </div>
      </div>
    );
  }


  return children;

};

export default RequireAuth;
