# Audio source

The portfolio player now loads the configured Spotify playlist through Spotify's official embed API after the visitor interacts with it. No local songs, generated substitutes, or copyrighted audio files are shipped in this directory.

The playlist URI and public link live in `src/data/music.ts`. Browser autoplay rules still apply, so playback begins only after a visitor action.
