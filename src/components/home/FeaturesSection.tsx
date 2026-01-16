export default function FeaturesSection() {
  const features = [
    {
      title: 'Production Ready',
      description: 'All assets are tested and optimized for production use',
      icon: '✓',
    },
    {
      title: 'Lifetime Access',
      description: 'One-time purchase gives you lifetime updates and access',
      icon: '∞',
    },
    {
      title: 'Commercial Use',
      description: 'Use freely in commercial and personal projects',
      icon: '$',
    },
    {
      title: 'Regular Updates',
      description: 'Assets are continuously improved and updated',
      icon: '↻',
    },
    {
      title: 'Quality Assured',
      description: 'Every asset is reviewed by our design team',
      icon: '★',
    },
    {
      title: 'Community Driven',
      description: 'Connect with designers and get exclusive previews',
      icon: '👥',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose DesignHub?
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;re committed to providing the best experience for designers and buyers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
