interface TimerProps {
  timeRemaining: number;
  formatTime: (seconds: number) => string;
}

export const Timer = ({ timeRemaining, formatTime }: TimerProps) => {
  const isWarning = timeRemaining <= 10; // Warning when 10 seconds or less
  
  return (
    <div className="flex items-center gap-2">
      <div className={`flex items-center gap-1 ${isWarning ? 'text-red-500' : 'text-white'}`}>
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <span className="text-lg font-semibold">{formatTime(timeRemaining)}</span>
      </div>
    </div>
  );
};
