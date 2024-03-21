import Story from "./Story";

export default function Stories({ tab }: { tab: number }) {
  return (
    <section
      className={`${tab === 2 ? "block" : "hidden md:block"} w-full px-5 md:ml-[5vw] md:w-4/12`}
    >
      <h1 className="mb-5 w-fit bg-neutral-100 px-4 py-2 text-lg font-semibold text-red-500">
        MARKET STORIES
      </h1>
      <div className="flex flex-col gap-5">
        {[0, 1, 2].map((i) => (
          <Story key={i} />
        ))}
      </div>
    </section>
  );
}
