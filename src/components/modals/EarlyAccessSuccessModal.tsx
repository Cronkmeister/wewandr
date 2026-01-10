"use client";

interface EarlyAccessSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessSuccessModal({
  isOpen,
  onClose,
}: EarlyAccessSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-cream rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto px-6 py-8 md:px-8 md:py-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-500 hover:text-orange-600 transition-colors duration-300 p-1"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 pt-serif-bold">
            You&apos;re in. Welcome to WeWandr.
          </h2>

          <p className="text-base md:text-lg text-darkblue pt-serif-regular">
            Thanks for joining our early access list.
          </p>

          <p className="text-base md:text-lg text-darkblue pt-serif-regular">
            You&apos;re now part of the founding community helping shape a more
            trusted, human, and parent-powered way to plan family travel.
          </p>

          <p className="text-base md:text-lg text-darkblue pt-serif-regular">
            We&apos;ll be in touch with updates, early previews, and your
            invitation to explore or create guides as we roll things out.
          </p>

          <p className="text-base md:text-lg text-darkblue pt-serif-regular italic mt-4">
            Family travel, built on lived experience.
          </p>

          <div className="mt-6">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-darkblue text-darkblue bg-cream hover:bg-darkblue hover:text-white transition-colors duration-300 pt-serif-regular font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
