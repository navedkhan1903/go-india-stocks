import CTABtn from "./CTABtn";
import Image from "next/image";
import { BiComment } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import profile from "../../../public/profile.png";
import { IoEyeOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";

export default function Post({ post }: { post: any }) {
  return (
    <article className="flex justify-between p-5 text-xs font-medium shadow-md">
      <div className="flex w-full items-start gap-3">
        <Image
          src={profile}
          alt="Profile Image"
          width={30}
          quality={100}
          sizes="100vw"
        />
        <div className="w-full">
          <div className="flex items-center gap-3">
            <p>{post.name}</p>
            <span className="rounded-full bg-blue-600 px-4 py-1 text-white">
              Sector {post.sector}
            </span>
          </div>
          <p className="my-3">{post.comment}</p>
          <div className="grid grid-cols-4">
            <CTABtn icon={<FaRegHeart size="15" />} value={post.likes} />
            <CTABtn icon={<IoEyeOutline size="15" />} value={post.views} />
            <CTABtn icon={<BiComment size="15" />} value={`${post.comments}`} />
            <CTABtn icon={<GoShareAndroid size="15" />} value="Share" />
          </div>
        </div>
      </div>
      <time>
        <p className="w-max">{post.time} min ago</p>
      </time>
    </article>
  );
}
