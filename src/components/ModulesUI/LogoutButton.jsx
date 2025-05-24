export const LogoutButton = () => {
  return (
    <div className="bg-white shadow-xs px-4 py-6 rounded-md dark:bg-secondary-dark">
      <div className="flex items-center justify-start gap-4">
        <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center">
          <svg strokeWidth={1.5} className="size-7 text-rose-500">
            <use href="/sprite.svg#logout-icon" />
          </svg>
        </div>
        <div>
          <h3 className="text-h-light font-medium mb-1 dark:text-h-dark">
            Logout
          </h3>
          <p className="text-p-light text-xs">
            Further secure your account for safety
          </p>
        </div>
      </div>
    </div>
  );
};
