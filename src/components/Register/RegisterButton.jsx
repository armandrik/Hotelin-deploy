export const RegisterButton = ({buttonText}) => {
  return (
    <button
      type="submit"
      className="bg-secondary text-white w-full h-14 rounded-lg text-lg cursor-pointer dark:bg-primary"
    >
      {buttonText}
    </button>
  );
};
