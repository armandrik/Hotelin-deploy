import { useState } from "react";

export const Signup = () => {
  const [displayPassword, setDisplayPassword] = useState(false);

  return (
    <form className="mb-2.5 w-full">
      <div className="relative mb-2.5">
        <input
          type="text"
          id="username"
          className="px-2.5 pb-2.5 pt-4 w-full h-14 text-sm text-p-light bg-transparent rounded-lg border-1 border-border-light appearance-none dark:border-border-dark dark:text-p-dark dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-secondary peer"
          placeholder=" "
          required
          autoFocus
          autoComplete="off"
        />
        <label
          htmlFor="username"
          className="absolute duration-300 text-sm text-p-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Name
        </label>
        <svg
          strokeWidth={1.5}
          className="size-6 absolute right-2 top-4 text-p-light dark:text-p-dark"
        >
          <use href="/sprite.svg#profile-icon" />
        </svg>
      </div>
      <div className="relative mb-2.5">
        <input
          type="email"
          id="email_signup"
          className="px-2.5 pb-2.5 pt-4 w-full h-14 text-sm text-p-light bg-transparent rounded-lg border-1 border-border-light appearance-none dark:border-border-dark dark:text-p-dark dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-secondary peer"
          placeholder=" "
          required
          autoComplete="off"
        />
        <label
          htmlFor="email_signup"
          className="absolute duration-300 text-sm text-p-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Email
        </label>
        <svg
          strokeWidth={1.5}
          className="size-6 absolute right-2 top-4 text-p-light dark:text-p-dark"
        >
          <use href="/sprite.svg#email-icon" />
        </svg>
      </div>
      <div className="relative mb-3.5">
        <input
          type={displayPassword ? "text" : "password"}
          id="pass_signup"
          className="px-2.5 pb-2.5 pt-4 w-full h-14 text-sm text-p-light bg-transparent rounded-lg border-1 border-border-light appearance-none dark:border-border-dark dark:text-p-dark dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-secondary peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="pass_signup"
          className="absolute duration-300 text-sm text-p-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
        {displayPassword ? (
          <svg
            strokeWidth={1.5}
            onClick={() => setDisplayPassword(false)}
            className="size-6 absolute right-2 top-4 text-p-light dark:text-p-dark cursor-pointer"
          >
            <use href="/sprite.svg#show-pass" />
          </svg>
        ) : (
          <svg
            strokeWidth={1.5}
            onClick={() => setDisplayPassword(true)}
            className="size-6  absolute right-2 top-4 text-p-light dark:text-p-dark cursor-pointer"
          >
            <use href="/sprite.svg#hide-pass" />
          </svg>
        )}
      </div>
      <p className="text-secondary text-xs mb-11 text-right dark:text-primary cursor-pointer">
        Forget your password?
      </p>
      <button
        type="submit"
        className="bg-secondary text-white w-full h-14 rounded-lg text-lg cursor-pointer dark:bg-primary"
      >
        Sign up
      </button>
    </form>
  );
};
