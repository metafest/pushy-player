# PushyPlayer

PushyPlayer is a simple and customizable React video player component with modern UI and comprehensive controls.

## Features

- 🎥 Responsive video playback
- 🎛️ Comprehensive controls (play/pause, volume, seek)
- 🌓 Dark mode compatible
- 🖥️ Fullscreen support
- ⌨️ Keyboard shortcuts
- 🌈 Animated interactions

## Installation

Install PushyPlayer using npm or yarn:

```bash
npm install @metafest/pushyplayer
# or
yarn add @metafest/pushyplayer
```

## Usage

```jsx
import { VideoPlayer } from "@metafest/pushyplayer";
import "@metafest/pushyplayer/dist/index.css";

function App() {
  return (
    <VideoPlayer
      src="/path/to/your/video.mp4"
      poster="/optional/poster/image.jpg"
    />
  );
}
```

## Props

| Prop     | Type   | Description                     | Required |
| -------- | ------ | ------------------------------- | -------- |
| `src`    | string | Path or URL to the video source | Yes      |
| `poster` | string | Optional thumbnail image        | No       |

## Keyboard Shortcuts

- `Space`: Play/Pause
- `M`: Mute/Unmute
- `F`: Toggle Fullscreen
- `←/→`: Skip backward/forward

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Created by MetaFest
