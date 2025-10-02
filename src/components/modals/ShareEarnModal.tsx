interface ShareEarnModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareEarnModal({
  isOpen,
  onClose,
}: ShareEarnModalProps) {
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
              Share & Earn
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 roboto-medium"
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
            You did the planning, you took the trip, you have the insight, and
            now it&apos;s time to earn real income when you help another family
            learn from your experience.
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Getting Started */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  1
                </span>
                Getting Started
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To get started, simply add your deposit details into your
                profile, and click &apos;Create WandrGuide&apos; on our site.
              </p>
            </div>

            {/* Publishing & Growth */}
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  2
                </span>
                Publishing & Growth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Once your guide is published, watch as your downloads and income
                grow. We have set benchmarks for sending out funds
                automatically, or you can manually request a deposit at any
                time.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Earn from Experience */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Earn from Experience
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Turn your family travel experiences into valuable income by
                  sharing your hard-earned insights with other parents.
                </p>
              </div>

              {/* Flexible Payments */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Flexible Payments
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Choose between automatic payments at set benchmarks or request
                  manual deposits whenever you need them.
                </p>
              </div>

              {/* Help Other Families */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Help Other Families
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Your detailed guides help other families avoid common pitfalls
                  and make their trips more enjoyable and stress-free.
                </p>
              </div>

              {/* Build Your Reputation */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Build Your Reputation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  As your guides get downloaded and reviewed, you&apos;ll build
                  a reputation as a trusted family travel expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
