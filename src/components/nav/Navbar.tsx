import { useState } from "react";
import NavItems from "./NavItems";
import { FaBell } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className={`${visible ? "w-7/12 md:w-3/12" : "w-min"} absolute top-0 z-50 h-screen bg-blue-900 text-sm text-white md:sticky`}
    >
      <RiArrowRightSFill
        size="30"
        onClick={() => setVisible((curr) => !curr)}
        className="absolute -right-[30px] top-1/2 h-20 -translate-y-[40px] bg-blue-900 text-white"
      />

      {visible && (
        <>
          <div className="flex items-center justify-between border-b-2 border-neutral-400 p-5">
            <div className="flex items-center gap-3">
              <FaUser size={25} />
              Hello, User
            </div>
            <FaBell size={25} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between bg-blue-950 p-5">
              <div className="flex items-center gap-3">
                <MdChat size={20} />
                Discussion Fourm
              </div>
              <MdArrowDropDown size="20" />
            </div>
            <div className="flex items-center gap-3 p-5 hover:bg-blue-950">
              <AiFillDollarCircle size={20} />
              Market Stories
            </div>
            <NavItems />
          </div>
        </>
      )}
    </nav>
  );
}
