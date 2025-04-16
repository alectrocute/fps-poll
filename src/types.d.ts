type FPSPollOptions = {
    fpsThreshold?: number;
    pollAmount?: number;
    onBelowThreshold?: (avg: number) => void;
    onStartPolling?: () => void;
    onEndPolling?: (avg: number) => void;
};

export { FPSPollOptions };
