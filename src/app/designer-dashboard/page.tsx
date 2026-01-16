'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Asset {
  id: string
  title: string
  price: number
  sales: number
  revenue: number
  status: 'published' | 'draft'
  views: number
  downloads: number
}

const designerAssets: Asset[] = [
  {
    id: '1',
    title: 'Modern Dashboard UI Kit',
    price: 49.99,
    sales: 42,
    revenue: 2099.58,
    status: 'published',
    views: 1240,
    downloads: 42,
  },
  {
    id: '2',
    title: 'Mobile App Components',
    price: 39.99,
    sales: 28,
    revenue: 1119.72,
    status: 'published',
    views: 892,
    downloads: 28,
  },
  {
    id: '3',
    title: 'E-commerce Checkout Flow',
    price: 59.99,
    sales: 15,
    revenue: 899.85,
    status: 'draft',
    views: 450,
    downloads: 15,
  },
]

export default function DesignerDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const totalRevenue = designerAssets.reduce((sum, asset) => sum + asset.revenue, 0)
  const totalSales = designerAssets.reduce((sum, asset) => sum + asset.sales, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Designer Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your assets and track earnings</p>
          </div>
          <Link
            href="/designer/upload"
            className="mt-4 sm:mt-0 inline-block rounded-lg bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Upload New Asset
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-gray-600 text-sm font-medium">Total Revenue</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">
              ${totalRevenue.toFixed(2)}
            </div>
            <div className="text-green-600 text-sm mt-2">↑ 12% this month</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-gray-600 text-sm font-medium">Total Sales</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">{totalSales}</div>
            <div className="text-green-600 text-sm mt-2">↑ 8 new this week</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-gray-600 text-sm font-medium">Assets Published</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">2</div>
            <div className="text-gray-600 text-sm mt-2">1 in draft</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-gray-600 text-sm font-medium">Total Views</div>
            <div className="text-3xl font-bold text-gray-900 mt-2">2,582</div>
            <div className="text-gray-600 text-sm mt-2">This month</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              {['overview', 'assets', 'analytics', 'payments'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {[
                    { event: 'New purchase', asset: 'Modern Dashboard UI Kit', time: '2 hours ago' },
                    { event: 'New purchase', asset: 'Mobile App Components', time: '5 hours ago' },
                    { event: 'Asset reviewed', asset: 'E-commerce Checkout Flow', time: '1 day ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <div>
                        <div className="font-medium text-gray-900">{activity.event}</div>
                        <div className="text-sm text-gray-600">{activity.asset}</div>
                      </div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'assets' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Your Assets
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          Title
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          Price
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          Sales
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          Revenue
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {designerAssets.map((asset) => (
                        <tr key={asset.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-4 px-4 text-gray-900 font-medium">
                            {asset.title}
                          </td>
                          <td className="py-4 px-4 text-gray-600">${asset.price}</td>
                          <td className="py-4 px-4 text-gray-600">{asset.sales}</td>
                          <td className="py-4 px-4 text-gray-900 font-medium">
                            ${asset.revenue.toFixed(2)}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                                asset.status === 'published'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {asset.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-blue-500 hover:text-blue-600 font-medium text-sm">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Analytics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Views Over Time</h4>
                    <div className="h-48 bg-gradient-to-t from-blue-50 to-transparent rounded flex items-end justify-around">
                      {[45, 52, 48, 65, 58, 70, 62].map((height, i) => (
                        <div
                          key={i}
                          className="w-full h-full bg-blue-500 rounded-t mx-1"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Top Assets</h4>
                    <div className="space-y-3">
                      {designerAssets.map((asset) => (
                        <div key={asset.id} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {asset.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {asset.views} views
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">
                              {asset.downloads}
                            </div>
                            <div className="text-xs text-gray-500">downloads</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Payment History
                </h3>
                <div className="space-y-4">
                  {[
                    { date: 'Jan 15, 2026', amount: '$500.00', status: 'Completed' },
                    { date: 'Jan 1, 2026', amount: '$1,250.00', status: 'Completed' },
                    { date: 'Dec 20, 2025', amount: '$750.00', status: 'Pending' },
                  ].map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-200 pb-4"
                    >
                      <div>
                        <div className="font-medium text-gray-900">{payment.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="font-medium text-gray-900">{payment.amount}</div>
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            payment.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
