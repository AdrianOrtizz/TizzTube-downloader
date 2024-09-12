import SearchBar from "@/components/SearchBar/SearchBar";
import VideoData from "@/components/VideoData/VideoData";
import Header from "@/components/Header/Header";
import DownloadsHistory from "@/components/History/DownloadsHistory";

import { useAppSelector } from "@/redux/hooks";

const Main = () => {
  const URL = useAppSelector((state) => state.videoSlice.URL);
  const showModal = useAppSelector((state) => state.modalSlice.showModal);

  return (
    <section>
      <Header />
      <SearchBar />
      {URL && <VideoData />}

      {showModal && <DownloadsHistory />}
    </section>
  );
};
export default Main;
