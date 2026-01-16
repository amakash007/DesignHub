import Link from 'next/link'
import AssetCard from '@/components/marketplace/AssetCard'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import StatsSection from '@/components/home/StatsSection'

const featuredAssets = [
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
  {
    id: '4',
    title: 'SaaS Landing Page Templates',
    creator: 'Creative Team',
    price: 59.99,
    preview: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    downloads: 654,
    rating: 4.6,
  },
]

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Assets */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Assets
            </h2>
            <p className="text-lg text-gray-600">
              Discover the most popular UI design assets from talented designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAssets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/browse"
              className="inline-block rounded-lg bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600 transition-colors"
            >
              Browse All Assets
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Stats */}
      <StatsSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to monetize your designs?
          </h2>
          <p className="text-blue-100 mb-8">
            Join thousands of designers earning sustainable income from their work
          </p>
          <Link
            href="/auth/signup?role=designer"
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-blue-600 hover:bg-gray-50 transition-colors"
          >
            Start Selling Today
          </Link>
        </div>
      </section>
    </div>
  )
}
