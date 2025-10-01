interface PlanLearnModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlanLearnModal({
  isOpen,
  onClose,
}: PlanLearnModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Plan & Learn
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
          <p className="text-lg text-gray-600 mt-4 max-w-4xl">
            WandrGuides are answers to trip questions you didn't even know you
            had. This is the inside scoop within the family trip, highlights,
            lowlights and everything in between. With all the moving variables
            that come when travelling with young children, think of WandrGuides
            as real, tried- and- tested roadmaps for you to learn from when
            planning your next trip.
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gear Logistics */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Gear Logistics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                How parents travelled with strollers, carseats, high chairs,
                pottys and pack and plays.
              </p>
            </div>

            {/* Kid-Friendly Accommodation Reviews */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Kid-Friendly Accommodation Reviews
              </h3>
              <p className="text-gray-600 leading-relaxed">
                What was provided, and what was brought from home.
              </p>
            </div>

            {/* Purchasing the Essentials */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Purchasing the Essentials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Where to buy diapers, wipes, formula, purées, snacks and other
                daily items.
              </p>
            </div>

            {/* On the Go Strategies */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                On the Go Strategies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nap locations, accessibility to public toilets, laundry
                solutions, any child care hired, pet-friendly ideas.
              </p>
            </div>

            {/* Safety and Transportation */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Safety and Transportation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                How it felt walking around with kids, how stroller-friendly it
                was, ease of taking public transport, and using taxi's.
              </p>
            </div>

            {/* 'Yes' Activities */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                'Yes' Activities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                What family-centric activities were fun for the whole family.
                What was fun for kids, and what was fun for parents.
              </p>
            </div>

            {/* Destination cultural views */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Destination Cultural Views
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Any unspoken views on breastfeeding and changing diapers in
                public. Respectful clothing choices, words or gestures.
              </p>
            </div>

            {/* Packing Lists */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Packing Lists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                What the kids wore everyday, what items could stay home next
                time, temperature ranges for that time of year.
              </p>
            </div>

            {/* Highlights & Lowlights */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Highlights & Lowlights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Honest feedback on what was a hit and what was a miss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
