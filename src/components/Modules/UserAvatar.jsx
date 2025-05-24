import avatar from "../../assets/avatar.png";

export const UserAvatar = () => {
  return (
    <div className="w-full flex items-center justify-start gap-4 p-4 mb-6 h-24 rounded-md shadow-xs bg-white dark:bg-secondary-dark">
      <img src={avatar} loading="lazy" width={64} height={64} />
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
