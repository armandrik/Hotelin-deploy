import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormInput,
  ForgetPassLink,
  RegisterButton,
} from "src/components";

export const Login = ({ setFormType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [inputType, setInputType] = useState("password");

  const onIconClick = () => {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <>
      <h1 className="mb-11 text-h-light text-3xl font-medium dark:text-h-dark">
        Login
      </h1>
      <form
        className="mb-2.5 w-full space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          register={register("identifire", {
            required: "name or email can not be empty",
          })}
          error={errors.identifire}
          id="identifire"
          inputType="text"
          placeholder="Email or Name"
          inputIcon="identify"
        />
        <FormInput
          register={register("password", {
            required: "password can not be empty",
            minLength: {
              value: 8,
              message: "password must contain 8 character",
            },
          })}
          error={errors.password}
          id="password"
          inputType={inputType}
          placeholder="Password"
          inputIcon={inputType === "password" ? "hide-pass" : "show-pass"}
          onIconClick={onIconClick}
        />
        <ForgetPassLink />
        <RegisterButton buttonText="Login" loading={isSubmitting} />
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
