import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ForgetPassLink,
  RegisterButton,
  FormInput,
} from "src/components";

export const Signup = ({ setFormType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isSubmitting},
  } = useForm();
  const [inputType, setInputType] = useState("password");

  const onIconClick = () => {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    console.log(data);
    reset()
  };

  return (
    <>
      <h1 className="mb-11 text-h-light text-3xl font-medium dark:text-h-dark">
        Sign up
      </h1>
      <form
        className="mb-2.5 w-full space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          register={register("username", {
            required: "Name can Not be empty",
            pattern: {
              value: /^[a-zA-Z][a-zA-Z0-9_]*$/,
              message: "name can not contain symbol",
            },
            minLength: { value: 2, message: "pick longer name" },
          })}
          error={errors.username}
          id="username"
          inputType="text"
          placeholder="Name"
          inputIcon="profile-icon"
        />
        <FormInput
          register={register("email", {
            required: "email can not be empty",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email Is Invalid",
            },
          })}
          error={errors.email}
          id="email"
          inputType="text"
          placeholder="Email"
          inputIcon="email-icon"
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
        <RegisterButton buttonText="Sign up" loading={isSubmitting}/>
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
