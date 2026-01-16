'use client'

import { useState } from 'react'
import AssetCard from '@/components/marketplace/AssetCard'

const allAssets = [
  {
    id: '1',
    title: 'Modern Dashboard UI Kit',
    creator: 'Alex Design Studio',
    price: 49.99,
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    downloads: 1240,
    rating: 4.8,
    category: 'Dashboard',
  },
  {
    id: '2',
    title: 'E-commerce Component Library',
    creator: 'Jane Studios',
    price: 79.99,
    preview: 'https://images.unsplash.com/photo-1545665225-b489fbb4ee5d?w=400&h=300&fit=crop',
    downloads: 892,
    rating: 4.9,
    category: 'E-commerce',
  },
  {
    id: '3',
    title: 'Mobile App UI Patterns',
    creator: 'Design Collective',
    price: 39.99,
    preview: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    downloads: 2100,
    rating: 4.7,
    category: 'Mobile',
  },
  {
    id: '4',
    title: 'SaaS Landing Page Templates',
    creator: 'Creative Team',
    price: 59.99,
    preview: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    downloads: 654,
    rating: 4.6,
    category: 'Landing Pages',
  },
  {
    id: '5',
    title: 'Admin Panel Design System',
    creator: 'UI Masters',
    price: 69.99,
    preview: 'https://images.unsplash.com/photo-1533240332313-0db49ff48fa0?w=400&h=300&fit=crop',
    downloads: 1500,
    rating: 4.8,
    category: 'Dashboard',
  },
  {
    id: '6',
    title: 'Mobile Banking App Kit',
    creator: 'FinTech Design',
    price: 89.99,
    preview: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=300&fit=crop',
    downloads: 892,
    rating: 4.9,
    category: 'Mobile',
  },
  {
    id: '7',
    title: 'Web Animation Toolkit',
    creator: 'Motion Studio',
    price: 44.99,
    preview: 'https://images.unsplash.com/photo-1561656489-2ab8056c0de9?w=400&h=300&fit=crop',
    downloads: 3200,
    rating: 4.5,
    category: 'Animation',
  },
  {
    id: '8',
    title: 'Social Media Dashboard UI',
    creator: 'Social Design Co',
    price: 54.99,
    preview: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    downloads: 1850,
    rating: 4.7,
    category: 'Dashboard',
  },
]

const categories = ['All', 'Dashboard', 'E-commerce', 'Mobile', 'Landing Pages', 'Animation']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: Infinity })
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  const filteredAssets = allAssets.filter((asset) => {
    const matchCategory = selectedCategory === 'All' || asset.category === selectedCategory
    const matchPrice = asset.price >= selectedPrice.min && asset.price <= selectedPrice.max
    const matchSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.creator.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchPrice && matchSearch
  })

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return b.downloads - a.downloads // trending
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Browse Assets
          </h1>
          <p className="text-gray-600">
            Discover {filteredAssets.length} {filteredAssets.length === 1 ? 'asset' : 'assets'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Search
              </label>
              <input
                type="text"
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Categories */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Categories
              </label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Price
              </label>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedPrice.min === range.min && selectedPrice.max === range.max
                        ? 'bg-blue-100 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Rating
              </label>
              <div className="space-y-2">
                {[5, 4, 3].map((rating) => (
                  <button
                    key={rating}
                    className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {Array(rating).fill('★').join('')} & up
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="mb-6 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Showing {sortedAssets.length} results
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="trending">Trending</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Assets Grid */}
            {sortedAssets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedAssets.map((asset) => (
                  <AssetCard key={asset.id} asset={asset} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No assets found
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
