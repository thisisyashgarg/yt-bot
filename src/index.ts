import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";

console.log("code has started running");

type SpotifyTracksData = {
  albums: {
    href: string;
    items: [];
  };
};
// import { path as ffmpegPath } from "@ffmpeg-installer/ffmpeg";
// import ffmpeg from "fluent-ffmpeg";
// ffmpeg.setFfmpegPath(ffmpegPath);
// import videoshow from "videoshow";

// var images = ["ima.jpg"];

// var videoOptions = {
//   fps: 25,
//   loop: 5, // seconds
//   transition: true,
//   transitionDuration: 1, // seconds
//   videoBitrate: 1024,
//   videoCodec: "libx264",
//   size: "640x?",
//   audioBitrate: "128k",
//   audioChannels: 2,
//   format: "mp4",
//   pixelFormat: "yuv420p",
// };

// videoshow(images, videoOptions)
//   .audio("audio.wav")
//   .save("video.mp4")
//   .on("start", function (command) {
//     console.log("ffmpeg process started:", command);
//   })
//   .on("error", function (err, stdout, stderr) {
//     console.error("Error:", err);
//     console.error("ffmpeg stderr:", stderr);
//   })
//   .on("end", function (output) {
//     console.error("Video created in:", output);
//   });

// Function to fetch the lyrics for a song
// const getLyrics = async () => {
//   try {
//     console.log("get lyrics  called");
//     const data = await fetch("https://lyrist.vercel.app/api/yellow/coldplay");
//     // const response = await fetch(lyricsEndpoint);
//     console.log(await data.json());
//     // return response;
//   } catch (err) {
//     console.log(`Error fetching lyrics for song ${err}`);
//   }
// };

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

// getLyrics();

// Function to create a lyrical video for a song
// const createLyricalVideo = async (songId) => {
//   try {
//     console.log("create lyrical video called");

//     const lyrics = await getLyrics(songId);
//     const mp3 = await getMP3(songId);

//     // Write the MP3 file to disk
//     writeFileSync(`${songId}.mp3`, mp3);

//     // Create the lyrical video
//     ffmpeg()
//       .input(`${songId}.mp3`)
//       .input(`lyrics.txt`)
//       .output(`${songId}.mp4`)
//       .outputOption(`-c:v libx264`)
//       .outputOption(`-c:a aac`)
//       .outputOption(`-strict experimental`)
//       .outputOption(`-b:a 192k`)
//       .outputOption(`-pix_fmt yuv420p`)
//       .outputOption(`-shortest`)
//       .outputOption(`-filter_complex "[0:a][1:v] overlay=0:0"`)
//       .on("end", () => {
//         console.log(`Lyrical video for ${songId} created successfully!`);
//       })
//       .on("error", (err) => {
//         console.log(`Error creating lyrical video for ${songId}: ${err}`);
//       })
//       .run();
//   } catch (err) {
//     console.log(`Error creating lyrical video for ${songId}: ${err}`);
//   }
// };
