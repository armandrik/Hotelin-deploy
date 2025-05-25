import { useState } from "react";
import { GoogleButton } from "src/components";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";

export const Register = () => {
  const [formType, setFormType] = useState("login");

  return (
    <div className="h-dvh px-6 flex flex-col items-center justify-center">
      <img src="./hotelin-logo.svg" alt="Hotelin logo" className="mb-16" />
      {formType === "login" ? (
        <Login setFormType={setFormType} />
      ) : (
        <Signup setFormType={setFormType} />
      )}
      <GoogleButton />
    </div>
  );
};
