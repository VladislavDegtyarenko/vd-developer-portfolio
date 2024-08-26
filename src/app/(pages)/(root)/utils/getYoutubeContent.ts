import { cache } from "react";

const API_KEY = process.env.YOUTUBE_API_KEY || "";
const CHANNEL_ID = "UCr1JTjRb_IrJ0OkTFwT3xug";

const MOCK_LATEST_VIDEOS = [
  {
    id: "4imxQHicyN0",
    title: "How To Create Read More Read Less Button with CSS Only",
    thumbnail: {
      url: "https://i.ytimg.com/vi/4imxQHicyN0/hqdefault.jpg",
      width: 480,
      height: 360,
    },
  },
];

const MOCK_POPULAR_VIDEOS = [
  {
    id: "vAp3xL1AY4I",
    title:
      "Elegant Text Reveal Effect using React and Framer Motion | Letter-By-Letter Text Animation",
    thumbnail: {
      url: "https://i.ytimg.com/vi/vAp3xL1AY4I/hqdefault.jpg",
      width: 480,
      height: 360,
    },
  },
];

export type Video = {
  id: string;
  title: string;
  thumbnail: Thumbnail;
};

type YoutubeSearchResult = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: Record<string, number>;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

type Thumbnail = { url: string; width: number; height: number };

type getYoutubeContentProps = {
  order: "viewCount" | "date";
  maxResults: number;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getYoutubeContent = cache(
  async (props: getYoutubeContentProps): Promise<Video[] | null> => {
    const { order, maxResults } = props;

    const queryParams = {
      key: API_KEY,
      channelId: CHANNEL_ID,
      part: "snippet,id",
      order,
      maxResults: String(maxResults),
    };
    const searchParams = new URLSearchParams(queryParams);
    const url = `https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`;

    try {
      const response = await fetch(url, {
        next: {
          revalidate: 10800, // 3 hrs
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message);
      }

      const items: YoutubeSearchResult[] = data.items;

      const videos = items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high,
      }));
      console.log("YouTube video requested: ", videos[0].title);

      // await delay(5000);

      return videos;

      // if (order === "date") {
      //   return MOCK_LATEST_VIDEOS;
      // }

      // if (order === "viewCount") {
      //   return MOCK_POPULAR_VIDEOS;
      // }

      // return null;
    } catch (error) {
      console.error(
        `Error fetching content from Youtube API, ${getYoutubeContent.name}, ${error}`
      );

      return null;
    }
  }
);
