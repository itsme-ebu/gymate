import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import SignBox from "../components/SignBox";

function SignIn() {
  const info = {
    account: "New to Gymate?",
    link_text: "Sing Up",
    link: "/signup",
    button: "Sign In",
    message: "Test Account - gymate@gymail.com / testpassword123",
  };
  return (
    <div>
      <HeaderBanner path="Sign In" />
      <SignBox info={info} />
    </div>
  );
}

export default SignIn;
