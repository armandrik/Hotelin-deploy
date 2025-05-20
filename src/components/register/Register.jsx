import { useState } from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";

function Register() {
  const [formDisplay, setFormDisplay] = useState(true);

  return (
    <div className="h-dvh px-6 flex flex-col items-center justify-center">
      <img src="./hotelin-logo.svg" alt="Hotelin logo" className="mb-16" />
      <h1 className="mb-11 text-h-light text-3xl font-medium dark:text-h-dark">
        {formDisplay ? "Login" : "Sign up"}
      </h1>
      {formDisplay ? <Login /> : <Signup />}
      {formDisplay ? (
        <p className="mb-10 text-sm text-p-light text-left w-full">
          Dont you have an account?{" "}
          <span
            onClick={() => setFormDisplay(false)}
            className="text-secondary cursor-pointer dark:text-primary"
          >
            Sign up
          </span>
        </p>
      ) : (
        <p className="mb-10 text-sm text-p-light text-left w-full">
          Already have an account?{" "}
          <span
            onClick={() => setFormDisplay(true)}
            className="text-secondary cursor-pointer dark:text-primary"
          >
            Login
          </span>
        </p>
      )}
      <p className="mb-4 text-p-light text-sm dark:text-p-dark">
        Or {formDisplay ? "Login" : "Sign up"} with google account
      </p>
      <div className="w-full pb-2.5 pt-4 bg-white flex items-center justify-center rounded-lg shadow-xs cursor-pointer dark:bg-secondary-dark">
        <svg width="32" height="32">
          <use href="/sprite.svg#google-icon" />
        </svg>
      </div>
    </div>
  );
}

export default Register;
