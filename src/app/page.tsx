"use client";

import InitialAnimation from "@/components/InitialAnimation/InitialAnimation";
import Main from "@/Views/Main/Main";

import { useEffect, useState } from "react";

const Home = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "auto";
    }, 2000);
  }, []);

  return (
    <main>
      {visible && <InitialAnimation />}
      <Main />
    </main>
  );
};

export default Home;
