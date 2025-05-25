export const PulseEffect = () => {
  return (
    <div className="relative w-5 h-5">
      <span className="absolute inset-0 rounded-full bg-emerald-300/70 opacity-55 pulse-ring-1 dark:bg-emerald-300"></span>
      <span className="absolute inset-0 rounded-full bg-emerald-300/70 opacity-55 pulse-ring-2 dark:bg-emerald-300"></span>
      <span className="absolute inset-0 rounded-full bg-emerald-300/70 opacity-55 pulse-ring-3 dark:bg-emerald-300"></span>
      <span className="relative w-full h-full rounded-full bg-transparent opacity-35 z-10"></span>
    </div>
  );
};
