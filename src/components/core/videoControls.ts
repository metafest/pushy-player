export interface VideoControlsState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  skipDuration: number;
}

export interface VideoControlsHandlers {
  togglePlay: () => void;
  handleSeek: (time: number) => void;
  handleVolumeChange: (volume: number) => void;
  toggleMute: () => void;
  toggleFullscreen: () => void;
  skip: (amount: number) => void;
  handlePlaybackRate: (change: number) => void;
}

export const handleKeyboardControls = (
  e: KeyboardEvent,
  videoState: VideoControlsState,
  handlers: VideoControlsHandlers
) => {
  // Ignore key events if user is typing in an input field
  if (
    e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLTextAreaElement
  ) {
    return;
  }

  // Ensure skipDuration is a valid number
  const skipAmount =
    typeof videoState.skipDuration === "number" &&
    !isNaN(videoState.skipDuration)
      ? videoState.skipDuration
      : 5; // Default to 5 seconds if invalid

  switch (e.code) {
    case "Space":
      e.preventDefault();
      handlers.togglePlay();
      break;
    case "ArrowLeft":
      e.preventDefault();
      handlers.skip(-skipAmount); // Use the validated skipAmount
      break;
    case "ArrowRight":
      e.preventDefault();
      handlers.skip(skipAmount); // Use the validated skipAmount
      break;
    case "ArrowUp":
      e.preventDefault();
      handlers.handleVolumeChange(Math.min(videoState.volume + 0.1, 1));
      break;
    case "ArrowDown":
      e.preventDefault();
      handlers.handleVolumeChange(Math.max(videoState.volume - 0.1, 0));
      break;
    case "KeyM":
      e.preventDefault();
      handlers.toggleMute();
      break;
    case "KeyF":
      e.preventDefault();
      handlers.toggleFullscreen();
      break;
    case "Home":
      e.preventDefault();
      handlers.handleSeek(0);
      break;
    case "End":
      e.preventDefault();
      handlers.handleSeek(videoState.duration);
      break;
    case "Period":
      if (e.shiftKey) {
        e.preventDefault();
        handlers.handlePlaybackRate(0.25);
      }
      break;
    case "Comma":
      if (e.shiftKey) {
        e.preventDefault();
        handlers.handlePlaybackRate(-0.25);
      }
      break;
    case "Digit0":
    case "Digit1":
    case "Digit2":
    case "Digit3":
    case "Digit4":
    case "Digit5":
    case "Digit6":
    case "Digit7":
    case "Digit8":
    case "Digit9":
      e.preventDefault();
      const percent = parseInt(e.code.slice(-1)) * 10;
      handlers.handleSeek((videoState.duration * percent) / 100);
      break;
  }
};

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
