export const DiscountInput = () => {
  return (
    <div className="mb-5">
      <h3 className="flex items-center justify-start gap-1 mb-3 text-h-light text-lg font-medium dark:text-h-dark">
        Use discount code
        <svg strokeWidth={1.5} className="size-6 mt-[2px]">
          <use href="/sprite.svg#discount-icon" />
        </svg>
      </h3>
      <div className="flex items-center justify-between gap-1">
        <input
          className="p-2 w-4/5 text-p-light dark:text-p-dark rounded-md outline-none text-sm border border-border-light dark:border-border-dark"
          type="text"
          placeholder="Enter code here"
        />
        <button className="p-2 w-1/5 cursor-pointer text-p-light dark:text-p-dark rounded-md text-sm border border-border-light dark:border-border-dark focus:border-secondary dark:focus:border-primary">Apply</button>
      </div>
    </div>
  );
};
