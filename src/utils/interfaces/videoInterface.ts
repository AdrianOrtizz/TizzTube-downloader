interface VideoThumbnail {
  url: string;
  width: number;
  height: number;
}

interface ChannelAvatar {
  url: string;
  width: number;
  height: number;
}

interface Channel {
  type: "channel";
  id: string;
  name: string;
  isVerified: boolean;
  isVerifiedArtist: boolean;
  avatar: ChannelAvatar[];
}

interface MediaStream {
  status: boolean;
  errorID: string;
  expiration: number;
  items: {
    url: string;
    lengthMs: number;
    mimeType: string;
    extension: string;
    lastModified: number;
    size: number;
    sizeText: string;
    hasAudio?: boolean;
    quality?: string;
    width?: number;
    height?: number;
  }[];
}

interface Subtitles {
  status: boolean;
  errorID: string;
  expiration: number;
  items: {
    url: string;
    code: string;
    text: string;
  }[];
}

export interface Video {
  status: boolean;
  errorId: string;
  type: string;
  id: string;
  title: string;
  description: string;
  lengthSeconds: number;
  viewCount: number;
  likeCount: number;
  publishedTimeText: string;
  isLiveStream: boolean;
  isLiveNow: boolean;
  isRegionRestricted: boolean;
  isCommentDisabled: boolean;
  commentCountText: string;
  channel: Channel;
  thumbnails: VideoThumbnail[];
  videos: MediaStream;
  audios: MediaStream;
  subtitles: Subtitles;
}
