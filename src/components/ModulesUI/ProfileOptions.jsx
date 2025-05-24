export const ProfileOptions = ({ title, desc, svgPath }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center dark:bg-primary/10">
        <svg
          strokeWidth={1.5}
          className="size-7 text-secondary dark:text-primary"
        >
          <use href={`/sprite.svg#${svgPath}`} />
        </svg>
      </div>
      <div>
        <h3 className="text-h-light font-medium mb-1 dark:text-h-dark">
          {title}
        </h3>
        {desc && <p className="text-p-light text-xs">{desc}</p>}
      </div>
      <svg className="size-6 ml-auto text-p-light dark:text-p-dark">
        <use href="/sprite.svg#arrow-right" />
      </svg>
    </div>
  );
};
