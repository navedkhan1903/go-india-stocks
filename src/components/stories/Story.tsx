import Image from "next/image";
import garden from "../../../public/garden.jpg";

export default function Story() {
  return (
    <article className="text-sm shadow-md">
      <Image src={garden} alt="Garden" quality={100} sizes="100vw" />
      <div className="p-5">
        <h2 className="mb-2 text-base font-semibold text-violet-900">
          The Garden
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          repudiandae ab mollitia eius, atque architecto cupiditate? Minima
          totam
        </p>
      </div>
    </article>
  );
}
