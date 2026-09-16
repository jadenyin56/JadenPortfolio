export type Track = {
  title: string;
  artist: string;
  src: string;
  tones: [number, number, number];
  albumArt?: string;
};

// The generated tone beds make the control usable before licensed audio is added.
// Replace `src` with a local file in public/audio and the player will use it.
export const tracks: Track[] = [
  {
    title: "Ryokan Dusk",
    artist: "Ambient study",
    src: "/audio/ryokan-dusk.mp3",
    tones: [146.83, 220, 293.66],
  },
  {
    title: "Window Seat",
    artist: "Field note",
    src: "/audio/window-seat.mp3",
    tones: [130.81, 196, 261.63],
  },
  {
    title: "After Rain",
    artist: "Quiet systems",
    src: "/audio/after-rain.mp3",
    tones: [164.81, 246.94, 329.63],
  },
];
