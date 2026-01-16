'use client'

import { useState } from 'react'

interface Asset {
  id: string
  title: string
  creator: string
  price: number
  preview: string
  downloads: number
  rating: number
}

interface AssetCardProps {
  asset: Asset
}

export default function AssetCard({ asset }: AssetCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="rounded-lg border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preview Image */}
      <div className="relative h-40 overflow-hidden bg-gray-200">
        <img
          src={asset.preview}
          alt={asset.title}
          className="h-full w-full object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <button className="rounded-lg bg-white px-4 py-2 font-medium text-gray-900 hover:bg-gray-50">
              View Details
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
          {asset.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3">{asset.creator}</p>

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span>{asset.rating}</span>
          </div>
          <span>{asset.downloads.toLocaleString()} downloads</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            ${asset.price}
          </div>
          <button className="rounded bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
