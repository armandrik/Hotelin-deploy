export const SearchInput = () => {
  return (
    <div className="relative mb-4 pt-2.5 px-3">
      <input
        type="text"
        placeholder="Search location"
        className="w-full text-sm text-p-light px-3.5 outline-none h-12 rounded-lg border-none dark:text-h-dark bg-white shadow-sm dark:bg-secondary-dark"
      />
      <svg
        strokeWidth={1.5}
        className="size-6 absolute right-6.5 top-5.5 text-p-light cursor-pointer dark:text-h-dark"
      >
        <use href="/sprite.svg#search-icon" />
      </svg>
    </div>
  );
};
