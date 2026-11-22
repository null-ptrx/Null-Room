export interface ConsoleLog {
  id: string;
  time: string;
  type: 'REQ' | 'RES' | 'WS' | 'ACT' | 'SYS';
  message: string;
  details?: unknown;
}

// Global helper to log backend requests, responses, WebSocket frames, or user actions from anywhere
export const logConsoleEvent = (
  type: ConsoleLog['type'],
  message: string,
  details?: unknown
) => {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent<Omit<ConsoleLog, 'id' | 'time'>>('nullroom:console-log', {
      detail: { type, message, details },
    });
    window.dispatchEvent(event);
  }
};
