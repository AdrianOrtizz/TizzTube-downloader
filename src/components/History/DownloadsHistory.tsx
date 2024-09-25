"use client";

import { useAppDispatch } from "@/redux/hooks";
import { closeModal } from "@/redux/features/modalSlice";
import { setURL } from "@/redux/features/videoSlice";

import { videoHistory } from "@/utils/interfaces/historyInterface";

import styles from "./DownloadsHistory.module.css";

import { useEffect } from "react";

const DownloadsHistory: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleVideoSearch = (url: string) => {
    dispatch(setURL(url));
    dispatch(closeModal());
  };

  const downloads = JSON.parse(localStorage.getItem("history") || "[]");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <aside className="absolute w-screen h-screen left-0 top-0">
      <div
        onClick={handleClose}
        className="bg-slate-800 opacity-40 w-screen h-screen absolute z-10"
      ></div>
      <div
        className={`${styles.downloadsContainer} absolute z-20 2xl:w-1/4 h-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-300 rounded-lg flex flex-col p-4 overflow-auto`}
      >
        <h2 className="text-white self-center text-xl">
          Historial de descargas
        </h2>
        <button
          className="absolute right-4 top-4 text-white"
          onClick={handleClose}
        >
          {" "}
          X{" "}
        </button>
        {downloads.length > 0 ? (
          <section className="">
            {downloads.map((video: videoHistory) => (
              <div
                onClick={() => handleVideoSearch(video.url)}
                key={video.name}
                className="flex flex-col md:flex-row items-center m-2 cursor-pointer"
              >
                <img className="w-24" src={video.image} alt={video.name} />
                <p className="text-white text-lg m-2">{video.name}</p>
              </div>
            ))}
          </section>
        ) : (
          <h2 className="text-white self-center m-6">No hay descargas</h2>
        )}
      </div>
    </aside>
  );
};
export default DownloadsHistory;
