import { FPSPollOptions } from "./types";

let polls: number[] = [];
let lastTimestamp = 0;
let isPolling = false;

function fpsPoll({
    fpsThreshold = 30,
    pollAmount = 100,
    onBelowThreshold,
    onStartPolling,
    onEndPolling,
}: FPSPollOptions) {
    if (isPolling) {
        return;
    }

    if (!isPolling) {
        onStartPolling?.();
        isPolling = true;
    }

    function poll(timestamp: number) {
        if (lastTimestamp) {
            const elapsed = timestamp - lastTimestamp;
            polls.push(Math.round(1000 / elapsed));
        }

        lastTimestamp = timestamp;

        const avg =
            polls.length > 0
                ? Math.round(polls.reduce((a, e, i) => (a * i + e) / (i + 1)))
                : 0;

        if (polls.length >= pollAmount) {
            if (avg < fpsThreshold) {
                onBelowThreshold?.(avg);
            }

            onEndPolling?.(avg);

            isPolling = false;
            polls = [];
            lastTimestamp = 0;

            return;
        }

        requestAnimationFrame(poll);
    }

    requestAnimationFrame(poll);
}

export { FPSPollOptions, fpsPoll };