import Post from "./Post";
import { data } from "@/data";

export default function Fourm({ tab }: { tab: number }) {
  return (
    <section
      className={`${tab === 1 ? "block" : "hidden md:block"} w-full px-5 md:w-8/12`}
    >
      <h1 className="mb-5 w-fit bg-neutral-100 px-4 py-2 text-lg font-semibold text-red-500">
        DISSCUSSION FOURM
      </h1>
      <div className="flex flex-col gap-5">
        {data.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </section>
  );
}
