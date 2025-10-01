interface ConnectCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectCommunityModal({
  isOpen,
  onClose,
}: ConnectCommunityModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Connect with Community
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2"
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
          </div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Repeat after us: you are not alone! Travelling with young kids is
            seriously challenging, but it doesn&apos;t mean you have to wait
            until they are grown to see the world.
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Family Travel Growth */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  40%
                </span>
                Family Travel Growth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Family travel has increased globally by 40% in the last 5 years,
                which means there are more parents travelling with young
                children, and therefore more family travel experts than ever
                before.
              </p>
            </div>

            {/* Community Vision */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  ✨
                </span>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It&apos;s time we come together and learn from each other, in a
                safe, encouraging and empowering space. The WeWandr community is
                built on solidarity, parents helping parents make family travel
                feel possible, together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
