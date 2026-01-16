export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            By the Numbers
          </h2>
          <p className="text-lg text-gray-600">
            Join a thriving community of designers and developers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              $2.5M+
            </div>
            <div className="text-gray-600">Revenue to Designers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              10K+
            </div>
            <div className="text-gray-600">Assets Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              98%
            </div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              150+
            </div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}
