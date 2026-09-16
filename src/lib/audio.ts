const MUTE_KEY = "jaden-portfolio-muted";

export function soundIsMuted() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(MUTE_KEY) === "true";
}

export function setSoundMuted(muted: boolean) {
  window.localStorage.setItem(MUTE_KEY, String(muted));
  window.dispatchEvent(new CustomEvent("portfolio-audio-change", { detail: muted }));
}

export function playUiTap() {
  if (typeof window === "undefined" || soundIsMuted()) return;
  const AudioContextClass = window.AudioContext;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(420, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(260, context.currentTime + 0.055);
  gain.gain.setValueAtTime(0.018, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.065);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.07);
  oscillator.addEventListener("ended", () => void context.close(), { once: true });
}
