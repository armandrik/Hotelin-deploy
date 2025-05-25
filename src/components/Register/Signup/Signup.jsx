import { FormInput } from "src/components";
import { ForgetPassLink } from "../../Modules/ForgetPassLink";
import { RegisterButton } from "src/components";

export const Signup = ({ setFormType }) => {
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
          inputType="password"
          placeholder="Password"
          svgPath="hide-pass"
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
