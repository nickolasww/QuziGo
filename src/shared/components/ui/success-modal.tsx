import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  autoCloseDelay?: number;
}

export const SuccessModal = ({
  isOpen,
  onClose,
  title,
  message,
  autoCloseDelay,
}: SuccessModalProps) => {
  useEffect(() => {
    if (isOpen && autoCloseDelay) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDelay, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-linear-to-br from-gray-900 to-black border-2 border-purple-500/30 rounded-2xl shadow-2xl max-w-md w-full animate-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Content */}
        <div className="p-8 flex flex-col items-center text-center gap-6">
          {/* Success Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
            <div className="relative bg-linear-to-br from-green-400 to-green-600 rounded-full p-4 animate-in zoom-in duration-500">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            {title}
          </h2>

          {/* Message */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};
