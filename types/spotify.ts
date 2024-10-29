export interface SpotifyNowPlaying {
    is_playing: boolean;
    item: {
      name: string;
      artists: Array<{ name: string }>;
      album: {
        name: string;
        images: Array<{ url: string }>;
      };
      external_urls: {
        spotify: string;
      };
    } | null;
  }