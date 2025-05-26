import { useState } from "react";
import { ForgetPassLink, RegisterButton, FormInput } from "src/components";

export const Signup = ({ setFormType }) => {
  const [inputType, setInputType] = useState("password");

  const onIconClick = () => {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
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
          inputIcon="profile-icon"
        />
        <FormInput
          id="email_signup"
          inputType="email"
          placeholder="Email"
          inputIcon="email-icon"
        />
        <FormInput
          id="pass_signup"
          inputType={inputType}
          placeholder="Password"
          inputIcon={inputType === "password" ? "hide-pass" : "show-pass"}
          onIconClick={onIconClick}
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
