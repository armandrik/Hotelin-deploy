export const DisCountInput = () => {
  return (
    <>
      <h3 className="flex items-center justify-start gap-1 mb-3 text-h-light text-lg font-medium dark:text-h-dark">
        Use discount code
        <svg strokeWidth={1.5} className="size-6 mt-[2px]">
          <use href="/sprite.svg#discount-icon" />
        </svg>
      </h3>
      <input
        className="w-full p-2 text-p-light dark:text-p-dark rounded-md outline-secondary dark:outline-primary text-sm border border-border-light dark:border-border-dark"
        type="text"
        placeholder="Enter code here"
      />
    </>
  );
};
