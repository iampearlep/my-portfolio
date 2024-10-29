import { useEffect, useState } from "react";
import { SpotifyNowPlaying } from "@/types/spotify";
import Image from "next/image";
import SpotifyLogo from "@/public/images/spotifyLogo.svg";

export default function NowPlaying() {
  const [data, setData] = useState<SpotifyNowPlaying | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching now playing:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-row gap-x-2 items-center justify-center">
        <Image src={SpotifyLogo} height={28} width={28} alt="" />
        <p className="text-sm">Loading...</p>
      </div>
    );
  }

  if (!data?.item) {
    return (
      <div className="flex flex-row gap-x-2 items-center justify-center">
        <Image src={SpotifyLogo} height={28} width={28} alt="" />
        <p className="text-sm">Princess is Offline</p>
      </div>
    );
  }

  return (
    <a
      href={data.item.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row gap-x-2 items-center justify-center"
    >
      {data.item.album.images[0] && (
        <div className="relative w-10 h-10">
          <Image
            src={data.item.album.images[0].url}
            alt={`${data.item.album.name} album art`}
            fill
            className="rounded-md object-cover"
            sizes="30px"
          />
        </div>
      )}
      <div>
        <h3 className="font-medium text-sm hover:text-purple-300">
          {data.item.name}
        </h3>
        <p className="text-gray-400 text-xs">
          {data.item.artists.map((artist) => artist.name).join(", ")}
        </p>
        {/* <p className="text-sm text-gray-500">{data.item.album.name}</p> */}
      </div>
    </a>
  );
}
