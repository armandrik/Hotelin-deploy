export const GoogleButton = () => {
  return (
    <button className="w-full pb-2.5 pt-4 bg-white flex items-center justify-center rounded-lg shadow-xs cursor-pointer dark:bg-secondary-dark">
      <svg width="32" height="32">
        <use href="/sprite.svg#google-icon" />
      </svg>
    </button>
  );
};
