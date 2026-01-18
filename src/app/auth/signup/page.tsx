'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function SignupFormContent() {
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role')
  const [role, setRole] = useState<'buyer' | 'designer'>(
    (roleParam as 'buyer' | 'designer') || 'buyer'
  )
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }


    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    alert(`Sign up as ${role} would be processed by backend`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Join DesignHub</h1>
            <p className="text-gray-600 text-sm mt-2">
              Create your account and get started
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <button
              onClick={() => setRole('buyer')}
              className={`rounded-lg border-2 p-4 text-center transition-colors ${
                role === 'buyer'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="font-medium text-gray-900">I&apos;m a Buyer</div>
              <div className="text-xs text-gray-600">Find assets</div>
            </button>
            <button
              onClick={() => setRole('designer')}
              className={`rounded-lg border-2 p-4 text-center transition-colors ${
                role === 'designer'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="font-medium text-gray-900">I&apos;m a Designer</div>
              <div className="text-xs text-gray-600">Sell assets</div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required className="rounded" />
              I agree to the Terms of Service and Privacy Policy
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <Link
                href="/auth/login"
                className="text-blue-500 font-medium hover:text-blue-600"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupFormContent />
    </Suspense>
  )
}
