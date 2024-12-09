/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetVideoDataQuery } from "@/redux/services/getData";
import { useAppSelector } from "@/redux/hooks";

import Loading from "../Loading/Loading";

import { useEffect } from "react";

import { videoHistory } from "@/utils/interfaces/historyInterface";

const VideoData: React.FC = () => {
  const { URL } = useAppSelector((state) => state.videoSlice);
  const { data, isLoading, isFetching } = useGetVideoDataQuery(URL);

  const history = JSON.parse(localStorage.getItem("history") || "[]");

  useEffect(() => {
    if (data) {
      if (history) {
        if (!history.some((video: videoHistory) => video.url === URL)) {
          history.push({
            name: data.title,
            image: data.thumbnails[0].url,
            url: URL,
          });

          localStorage.setItem("history", JSON.stringify(history));
        }
      } else {
        localStorage.setItem(
          "history",
          JSON.stringify([
            { name: data.title, image: data.thumbnails[0].url, url: URL },
          ])
        );
      }
    }
  }, [data]);

  return (
    <section>
      {(isLoading || isFetching) && <Loading />}
      {data && !data.isLiveNow && (
        <section className="flex flex-col items-center">
          <section className="flex flex-col container items-center">
            <article className="bg-red-200 md:w-2/3 container rounded-lg flex flex-col items-center">
              <video
                src={data.videos.items[0].url}
                className="rounded w-4/5 m-6"
                controls
              ></video>
              <audio
                src={data.audios.items[0].url}
                className="w-4/5 rounded mb-6"
                controls
              ></audio>
            </article>

            <article className="bg-red-200 md:w-2/3 container flex flex-col p-4 rounded-lg mt-4">
              <div className="flex items-center">
                <img
                  src={data.channel.avatar[0].url}
                  alt={`${data.channel.name} photo`}
                  className="rounded-full mr-2 mb-2"
                />
                <h2 className="text-2xl">{data.channel.name}</h2>
              </div>

              <div>
                <h2 className="text-2xl">{data.title}</h2>
                <p className="text-lg">{data.description}</p>
              </div>
            </article>
          </section>
        </section>
      )}
    </section>
  );
};

export default VideoData;
