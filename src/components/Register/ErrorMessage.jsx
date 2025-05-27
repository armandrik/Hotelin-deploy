export const ErrorMessage = ({ message }) => {
  return (
    <p className="text-xs text-rose-400 flex items-center gap-1">
      <svg strokeWidth={1.5} className="size-5">
        <use href="/sprite.svg#warning-icon" />
      </svg>
      {message}
    </p>
  );
};
