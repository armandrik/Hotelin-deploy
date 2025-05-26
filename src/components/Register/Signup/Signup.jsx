import { useState } from "react";
import { ForgetPassLink, RegisterButton, FormInput } from "src/components";

export const Signup = ({ setFormType }) => {
  const [inputType, setInputType] = useState("password");

  const displayUserPass = (inputType) => {
    if (inputType === "password") setInputType("text");
    if (inputType !== "password") setInputType("password");
  };

  return (
    <>
      <h1 className="mb-11 text-h-light text-3xl font-medium dark:text-h-dark">
        Sign up
      </h1>
      <form className="mb-2.5 w-full">
        <FormInput
          id="username"
          inputType="text"
          placeholder="Name"
          svgPath="profile-icon"
        />
        <FormInput
          id="email_signup"
          inputType="email"
          placeholder="Email"
          svgPath="email-icon"
        />
        <FormInput
          id="pass_signup"
          inputType={inputType}
          placeholder="Password"
          svgPath={inputType === "password" ? "hide-pass" : "show-pass"}
          displayUserPass={displayUserPass}
        />
        <ForgetPassLink />
        <RegisterButton buttonText="Sign up" />
      </form>
      <p className="mb-10 text-sm text-p-light text-left w-full">
        Already have an account?{" "}
        <span
          onClick={() => setFormType("login")}
          className="text-secondary cursor-pointer dark:text-primary"
        >
          Login
        </span>
      </p>
      <p className="mb-4 text-p-light text-sm dark:text-p-dark">
        Or Signup with google account
      </p>
    </>
  );
};
