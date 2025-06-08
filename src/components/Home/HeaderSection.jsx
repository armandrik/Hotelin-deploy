export const HeaderSection = () => {
  return (
    <>
      <h1 className="text-h-light text-4xl pt-2.5 px-3 font-bold mb-4 flex items-center justify-between dark:text-h-dark">
        Let's pack for <br /> your trip
        <svg width={40} height={40}>
          <use href="/sprite.svg#hotelin-logo" />
        </svg>
      </h1>
      <p className="text-p-light text-sm pt-2.5 px-3 font-medium mb-4">
        Use one of our suggestions or make a <br /> list of what a pack
      </p>
    </>
  );
};