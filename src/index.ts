import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";

console.log("code has started running");

//get top songs
const getTopSongs = async () => {
  try {
    console.log("get top songs called");
    const data = await fetch("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SPOTIFY_API_KEY}`,
      },
    });

    const json = await data.json();

    console.log(json);
    console.log(typeof json);
  } catch (err) {
    console.log(`Error fetching top songs ${err}`);
  }
};

getTopSongs();
