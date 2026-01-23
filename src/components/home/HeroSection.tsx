export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-transparent py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600 mb-6">
            Welcome to DesignHub
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Production-Ready UI Assets for Every Project
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Discover thousands of high-quality design components, templates, and UI kits. Buy once, use forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="rounded-lg bg-blue-500 px-8 py-3 font-medium text-white hover:bg-blue-600 transition-colors">
              Start Shopping
            </button>
            <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Learn More..
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Assets Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2.5K+</div>
              <div className="text-sm text-gray-600">Active Designers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
