interface LivesDisplayProps {
  lives: number;
  maxLives?: number;
}

export const LivesDisplay = ({ lives, maxLives = 3 }: LivesDisplayProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-white text-sm">Lives</span>
      <div className="flex gap-1">
        {Array.from({ length: maxLives }).map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < lives ? 'text-red-500 fill-current' : 'text-gray-600'}`}
            viewBox="0 0 24 24"
            fill={index < lives ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ))}
      </div>
    </div>
  );
};
