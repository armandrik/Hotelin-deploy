export const FormInput = ({
  inputType,
  id,
  placeholder,
  inputIcon,
  onIconClick,
}) => {
  return (
    <div className="relative mb-2.5">
      <input
        type={inputType}
        id={id}
        className="px-2.5 pb-2.5 pt-4 w-full h-14 text-sm text-p-light bg-transparent rounded-lg border-1 border-border-light appearance-none dark:border-border-dark dark:text-p-dark dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-secondary peer"
        placeholder=" "
        required
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="absolute duration-300 text-sm text-p-light transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-light dark:bg-dark px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {placeholder}
      </label>
      <svg
        strokeWidth={1.5}
        className="size-6 absolute right-2 top-4 text-p-light dark:text-p-dark"
        onClick={onIconClick}
      >
        <use href={`/sprite.svg#${inputIcon}`} />
      </svg>
    </div>
  );
};
