import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import { Link } from "react-router-dom";
import SignBox from "../components/SignBox";
function Signup() {
  const info = {
    account: "Already have account?",
    link_text: "Sing In",
    link: "/signin",
    button: "Sign Up",
    message: "( Make new Accout or go to Sign In Page for Test Account )",
  };
  return (
    <div>
      <HeaderBanner path="Sign Up" />
      <SignBox info={info} />
    </div>
  );
}

export default Signup;
