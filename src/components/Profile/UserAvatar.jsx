export const UserAvatar = () => {
  return (
    <div className="w-full flex items-center justify-start gap-4 p-4 mb-4 h-24 rounded-md shadow-xs bg-white dark:bg-secondary-dark">
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg className="absolute w-12 h-12 text-gray-400 -left-1">
          <use href="/sprite.svg#user-avatar" />
        </svg>
      </div>
      <div>
        <h3 className="text-h-light font-medium mb-1 dark:text-h-dark">
          User Name
        </h3>
        <p className="text-p-light text-sm dark:text-p-dark">@userID</p>
      </div>
      <svg
        strokeWidth={1.5}
        className="size-6 ml-auto cursor-pointer text-p-light dark:text-p-dark hover:text-secondary dark:hover:text-primary"
      >
        <use href="/sprite.svg#edit-icon" />
      </svg>
    </div>
  );
};
