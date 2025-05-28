export const TravellerCount = ({ ageRange, description, value, onChange }) => {
  return (
    <div className="flex items-center justify-between px-3 py-4 w-full bg-accesnt-light text-sm text-p-light p-2 rounded-md dark:bg-accesnt-dark dark:text-p-dark">
      <div className="text-center">
        <p className="text-h-light text-lg font-medium mb-1 dark:text-h-dark">
          {ageRange}
        </p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-around">
        <button
          disabled={value === 0}
          onClick={() => onChange(value - 1)}
          className="flex items-center justify-center w-7 h-7 cursor-pointer border border-secondary dark:border-primary rounded-full disabled:border-secondary/20 dark:disabled:border-primary/20"
        >
          <svg strokeWidth={1.5} className="size-5 text-secondary dark:text-primary">
            <use href="/sprite.svg#minus-icon" />
          </svg>
        </button>
        <span className="text-center w-7 text-xl text-h-light font-medium dark:text-white">
          {value}
        </span>
        <button
          disabled={value === 5}
          onClick={() => onChange(value + 1)}
          className="flex items-center justify-center w-7 h-7 cursor-pointer border border-secondary dark:border-primary rounded-full disabled:border-secondary/20 dark:disabled:border-primary/20"
        >
          <svg strokeWidth={1.5} className="size-5 text-secondary dark:text-primary">
            <use href="/sprite.svg#plus-icon" />
          </svg>
        </button>
      </div>
    </div>
  );
};
