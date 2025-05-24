import { LogoutButton } from "src/components";
import { ProfileOptions } from "src/components";
import { ToggleTheme } from "src/components";
import { UserAvatar } from "src/components";
import { moreOptions, options } from "../../data/data";

export const Profile = () => {
  return (
    <div className="p-4">
      <h1 className="text-h-light font-medium text-2xl mb-4 dark:text-h-dark">
        Profile
      </h1>
      <UserAvatar />
      <ToggleTheme />
      <div className="bg-white shadow-xs px-4 py-6 space-y-10 rounded-md mb-4 dark:bg-secondary-dark">
        {options.map((item) => (
          <ProfileOptions
            key={item?.id}
            title={item?.title}
            desc={item?.desc}
            svgPath={item?.svgPath}
          />
        ))}
      </div>
      <h3 className="text-h-light font-medium text-lg dark:text-h-dark mb-4">
        More
      </h3>
      <div className="bg-white shadow-xs px-4 py-6 space-y-10 rounded-md mb-4 dark:bg-secondary-dark">
        {moreOptions.map((item) => (
          <ProfileOptions
            key={item?.id}
            title={item?.title}
            desc={item?.desc}
            svgPath={item?.svgPath}
          />
        ))}
      </div>
      <LogoutButton />
    </div>
  );
};
