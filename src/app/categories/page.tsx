import Link from 'next/link'
import AssetCard from '@/components/marketplace/AssetCard'

const categories = [
  {
    name: 'Dashboard',
    description: 'Admin dashboards, analytics, and management UIs',
    count: 324,
    icon: '📊',
  },
  {
    name: 'E-commerce',
    description: 'Shop templates, product pages, and checkout flows',
    count: 412,
    icon: '🛍️',
  },
  {
    name: 'Mobile',
    description: 'iOS and Android app UI kits and components',
    count: 567,
    icon: '📱',
  },
  {
    name: 'Landing Pages',
    description: 'Conversion-optimized landing page templates',
    count: 289,
    icon: '🚀',
  },
  {
    name: 'SaaS',
    description: 'Software-as-a-service UI templates and components',
    count: 456,
    icon: '⚙️',
  },
  {
    name: 'Animation',
    description: 'Animated components and motion UI elements',
    count: 178,
    icon: '✨',
  },
]

const topAssets = [
  {
    id: '1',
    title: 'Modern Dashboard UI Kit',
    creator: 'Alex Design Studio',
    price: 49.99,
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    downloads: 1240,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'E-commerce Component Library',
    creator: 'Jane Studios',
    price: 79.99,
    preview: 'https://images.unsplash.com/photo-1545665225-b489fbb4ee5d?w=400&h=300&fit=crop',
    downloads: 892,
    rating: 4.9,
  },
  {
    id: '3',
    title: 'Mobile App UI Patterns',
    creator: 'Design Collective',
    price: 39.99,
    preview: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    downloads: 2100,
    rating: 4.7,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of UI design assets organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/browse?category=${encodeURIComponent(category.name)}`}
            >
              <div className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm font-medium text-blue-500">
                  {category.count} assets →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Top Assets Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topAssets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
