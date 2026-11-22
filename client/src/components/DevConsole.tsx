import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { type ConsoleLog, logConsoleEvent } from '../utils/consoleLogger';

const getNowTime = () => {
  const d = new Date();
  return d.toTimeString().split(' ')[0] + '.' + Math.floor(d.getMilliseconds() / 100);
};

const DevConsole = () => {
  const [logs, setLogs] = useState<ConsoleLog[]>([
    {
      id: 'init-1',
      time: getNowTime(),
      type: 'SYS',
      message: 'Console mounted. Listening for backend req/res & simulations...',
    },
    {
      id: 'init-2',
      time: getNowTime(),
      type: 'WS',
      message: 'Standing by for live events...',
    },
  ]);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Auto-scroll on new log when open and visible
  useEffect(() => {
    if (isVisible && !isMinimized && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs, isVisible, isMinimized]);

  // Log route transitions automatically
  useEffect(() => {
    logConsoleEvent('ACT', `Route navigated -> ${location.pathname}`);
  }, [location.pathname]);

  // Listen for custom console events from anywhere in the app
  useEffect(() => {
    const handleCustomLog = (e: Event) => {
      const customEvent = e as CustomEvent<Omit<ConsoleLog, 'id' | 'time'>>;
      const newEntry: ConsoleLog = {
        id: Math.random().toString(36).substring(2, 9),
        time: getNowTime(),
        type: customEvent.detail.type || 'SYS',
        message: customEvent.detail.message,
        details: customEvent.detail.details,
      };
      setLogs((prev) => [...prev.slice(-99), newEntry]);
    };

    window.addEventListener('nullroom:console-log', handleCustomLog);
    return () => {
      window.removeEventListener('nullroom:console-log', handleCustomLog);
    };
  }, []);

  const clearLogs = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLogs([
      {
        id: Math.random().toString(36).substring(2, 9),
        time: getNowTime(),
        type: 'SYS',
        message: 'Buffer cleared.',
      },
    ]);
  };

  const getTagStyle = (type: ConsoleLog['type']) => {
    switch (type) {
      case 'REQ':
        return 'text-[#ECEEEF] font-bold';
      case 'RES':
        return 'text-[#A0A0A0] font-bold';
      case 'WS':
        return 'text-[#888888]';
      case 'ACT':
        return 'text-[#D0D0D0]';
      case 'SYS':
      default:
        return 'text-[#666666]';
    }
  };

  // When hidden, render the "Show Console" button
  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#0A0A0A] border border-[#2C3033] text-[#ECEEEF] px-3.5 py-1.5 font-mono text-xs hover:bg-[#161616] hover:border-[#424749] transition-colors cursor-pointer flex items-center gap-2 shadow-2xl"
        title="Open simulation and backend response console"
      >
        <span className="w-1.5 h-1.5 bg-[#ECEEEF] inline-block animate-pulse"></span>
        <span className="font-semibold tracking-wider">Show Console</span>
        <span className="text-[10px] text-[#888888]">({logs.length})</span>
      </button>
    );
  }

  // When visible, render the full console with Hide & Minimize controls
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 font-mono text-xs transition-all duration-150 select-none ${
        isMinimized ? 'w-64' : 'w-80 sm:w-96'
      }`}
    >
      <div className="border border-[#2C3033] bg-[#0A0A0A] text-[#ECEEEF] shadow-2xl flex flex-col">
        
        {/* Header Bar */}
        <div
          onClick={() => setIsMinimized(!isMinimized)}
          className="border-b border-[#222222] bg-[#121212] px-3 py-1.5 flex items-center justify-between cursor-pointer text-[11px] hover:bg-[#181818] transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ECEEEF] inline-block animate-pulse"></span>
            <span className="font-semibold tracking-wider text-[#ECEEEF]">
              CONSOLE // DEV-HUD
            </span>
            <span className="text-[10px] text-[#666666]">
              ({logs.length})
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#888888]">
            {!isMinimized && (
              <button
                type="button"
                onClick={clearLogs}
                className="hover:text-[#ECEEEF] text-[10px] px-1 cursor-pointer"
                title="Clear buffer"
              >
                clear
              </button>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
              className="hover:text-[#ECEEEF] text-xs px-1 cursor-pointer"
              title={isMinimized ? 'Expand' : 'Collapse'}
            >
              {isMinimized ? '+' : '—'}
            </button>

            {/* Hide button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="hover:text-[#ECEEEF] hover:border-[#424749] text-[10px] px-1.5 py-0.5 border border-[#2C3033] bg-[#181818] cursor-pointer"
              title="Hide console"
            >
              Hide
            </button>
          </div>
        </div>

        {/* Console Logs Body */}
        {!isMinimized && (
          <div
            ref={scrollRef}
            className="h-60 sm:h-72 overflow-y-auto p-2.5 space-y-1.5 text-[11px] leading-relaxed bg-[#0A0A0A] select-text"
          >
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 font-mono">
                <span className="text-[#555555] shrink-0 text-[10px]">
                  {log.time}
                </span>
                <span className={`shrink-0 ${getTagStyle(log.type)}`}>
                  [{log.type}]
                </span>
                <div className="flex-1 break-all text-[#CCCCCC]">
                  {log.message}
                  {log.details ? (
                    <pre className="mt-0.5 text-[10px] text-[#888888] bg-[#141414] p-1 border border-[#222222] overflow-x-auto">
                      {typeof log.details === 'string'
                        ? log.details
                        : JSON.stringify(log.details, null, 2)}
                    </pre>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Status strip when open */}
        {!isMinimized && (
          <div className="border-t border-[#1C1C1C] px-3 py-1 bg-[#0F0F0F] text-[10px] text-[#666666] flex justify-between items-center">
            <span>READY FOR BACKEND HOOKS</span>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="hover:text-[#ECEEEF] underline underline-offset-2 cursor-pointer"
            >
              hide screen
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DevConsole;
