'use client'

import { useState } from 'react'

interface PaymentForm {
  recipient: string
  amount: string
  description: string
}

export default function SendPayment() {
  const [formData, setFormData] = useState<PaymentForm>({
    recipient: '',
    amount: '',
    description: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate sending payment
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSuccessMessage(
        `Payment of ${formData.amount} USDC sent to ${formData.recipient}!`
      )
      setFormData({ recipient: '', amount: '', description: '' })

      setTimeout(() => setSuccessMessage(''), 5000)
    } catch (error) {
      console.error('Payment error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Send USDC Payment</h2>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient (Employee Address or Wallet)
            </label>
            <input
              type="text"
              placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f1234"
              value={formData.recipient}
              onChange={(e) =>
                setFormData({ ...formData, recipient: e.target.value })
              }
              className="input-field"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter employee wallet address or select from list
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount (USDC)
            </label>
            <input
              type="number"
              placeholder="1000.00"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="input-field"
              required
              step="0.01"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              placeholder="e.g., May 2024 Salary, Bonus, etc."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="input-field resize-none"
              rows={4}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium text-gray-900">
                  {formData.amount || '0.00'} USDC
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gas Fee (estimated):</span>
                <span className="font-medium text-gray-900">
                  {formData.amount && parseFloat(formData.amount) > 0
                    ? (parseFloat(formData.amount) * 0.001).toFixed(2)
                    : '0.00'}{' '}
                  USDC
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-lg text-primary">
                  {formData.amount && parseFloat(formData.amount) > 0
                    ? (parseFloat(formData.amount) * 1.001).toFixed(2)
                    : '0.00'}{' '}
                  USDC
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                isLoading ? 'opacity-75' : ''
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Payment'}
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({ recipient: '', amount: '', description: '' })
              }
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 card bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-3">💡 Tips for Sending Payments</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>✓ Double-check the wallet address before sending</li>
          <li>✓ Ensure you have sufficient USDC balance</li>
          <li>✓ Transactions are permanent once confirmed on blockchain</li>
          <li>✓ Keep track of all payments for accounting purposes</li>
        </ul>
      </div>
    </div>
  )
}
