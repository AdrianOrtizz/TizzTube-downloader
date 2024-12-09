import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Video } from "../../utils/interfaces/videoInterface";

export const videoAPI = createApi({
  reducerPath: "videoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-media-downloader.p.rapidapi.com/v2/video",
    headers: {
      "x-rapidapi-key": "362ab6dc14msh496b27f347b8c2cp1179e4jsnf666183cef18",
      "x-rapidapi-host": "youtube-media-downloader.p.rapidapi.com",
    },
  }),
  endpoints: (build) => ({
    getVideoData: build.query<Video, string>({
      query: (videoID) => `details?videoId=${videoID}`,
    }),
  }),
});

export const { useGetVideoDataQuery } = videoAPI;
