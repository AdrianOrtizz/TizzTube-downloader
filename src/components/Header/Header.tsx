"use client";

import styles from "./Header.module.css";
import { ooohBaby } from "../../utils/fonts/Fonts";

import { showModal } from "@/redux/features/modalSlice";
import { useAppDispatch } from "@/redux/hooks";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(showModal());
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}></div>
      <h1 className={`${ooohBaby.className} ${styles.title}`}>TizzTube</h1>
      <span
        onClick={handleClick}
        className="text-xl text-white mr-4 cursor-pointer bg-red-300 px-2 py-1 rounded-md hover:bg-red-400 transition-colors"
      >
        Historial
      </span>
    </header>
  );
};
export default Header;
