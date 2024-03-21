"use client";

import { useState } from "react";
import Fourm from "@/components/fourm/Fourm";
import TopNav from "@/components/nav/TopNav";
import Navbar from "@/components/nav/Navbar";
import Stories from "@/components/stories/Stories";

export default function Home() {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div className="flex w-full">
        <Navbar />
        <TopNav
          onClick1={() => setTab(1)}
          onClick2={() => setTab(2)}
          tab={tab}
        />
        <Fourm tab={tab} />
        <Stories tab={tab} />
      </div>
    </>
  );
}
