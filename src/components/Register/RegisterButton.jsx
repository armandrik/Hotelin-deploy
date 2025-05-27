export const RegisterButton = ({ buttonText, loading }) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className="bg-secondary text-white w-full h-14 rounded-lg text-lg cursor-pointer dark:bg-primary disabled:bg-secondary/70 dark:disabled:bg-primary/70"
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <span className="loader-tailwind"></span>
        </div>
      ) : (
        buttonText
      )}
    </button>
  );
};
