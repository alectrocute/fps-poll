# FPS Poll

A lightweight TypeScript library for monitoring frame rate performance in web applications.

## Features

- Monitor FPS (Frames Per Second) in real-time
- Configurable polling duration and threshold
- Callback-based notifications for performance issues
- Zero dependencies
- TypeScript support

## Installation

```bash
npm install fps-poll
```

## Usage

```typescript
import { fpsPoll } from 'fps-poll';

fpsPoll({
    fpsThreshold: 30, // Alert when FPS drops below this value
    pollAmount: 100,  // Number of frames to measure
    onBelowThreshold: (avg) => {
        console.log(`Performance warning: FPS dropped to ${avg}`);
    },
    onStartPolling: () => {
        console.log('Started monitoring FPS');
    },
    onEndPolling: (avg) => {
        console.log(`Average FPS: ${avg}`);
    }
});
```

## API

### `fpsPoll(options: FPSPollOptions)`

#### Options

- `fpsThreshold` (optional): Number - Minimum acceptable FPS (default: 30)
- `pollAmount` (optional): Number - Number of frames to measure (default: 100)
- `onBelowThreshold` (optional): Function - Callback when FPS drops below threshold
- `onStartPolling` (optional): Function - Callback when polling starts
- `onEndPolling` (optional): Function - Callback when polling ends

## License

Apache License
