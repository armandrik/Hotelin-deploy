import { useState } from "react";
import { FormInput, ForgetPassLink, RegisterButton } from "src/components";

export const Login = ({ setFormType }) => {
  const [inputType, setInputType] = useState("password");

  const displayUserPass = (inputType) => {
    if (inputType === "password") setInputType("text");
    if (inputType !== "password") setInputType("password");
  };

  return (
    <>
      <h1 className="mb-11 text-h-light text-3xl font-medium dark:text-h-dark">
        Login
      </h1>
      <form className="mb-2.5 w-full">
        <FormInput
          id="identifire"
          inputType="text"
          placeholder="Email or Name"
          svgPath="identify"
        />
        <FormInput
          id="password"
          inputType={inputType}
          placeholder="Password"
          svgPath={inputType === "password" ? "hide-pass" : "show-pass"}
          displayUserPass={displayUserPass}
        />
        <ForgetPassLink />
        <RegisterButton buttonText="Login" />
      </form>
      <p className="mb-10 text-sm text-p-light text-left w-full">
        Dont you have an account?{" "}
        <span
          onClick={() => setFormType("signup")}
          className="text-secondary cursor-pointer dark:text-primary"
        >
          Sign up
        </span>
      </p>
      <p className="mb-4 text-p-light text-sm dark:text-p-dark">
        Or Login with google account
      </p>
    </>
  );
};
