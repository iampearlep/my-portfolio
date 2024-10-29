const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

async function getAccessToken() {
  if (!client_id || !client_secret || !refresh_token) {
    throw new Error("Missing required environment variables");
  }

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Token request failed: ${response.status} ${text}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
}

export async function getNowPlaying() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: {
        revalidate: 30,
      },
    });

    if (response.status === 204) {
      return { isPlaying: false };
    }

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Now playing request failed: ${response.status} ${text}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting now playing:", error);
    throw error;
  }
}
