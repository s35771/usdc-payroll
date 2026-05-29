'use client'

import { useState } from 'react'

interface HeaderProps {
  onConnect: () => void
  isConnected: boolean
}

export default function Header({ onConnect, isConnected }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container-main flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">💰</div>
          <h1 className="text-2xl font-bold text-gray-900">USDC Payroll</h1>
        </div>

        <div className="flex items-center gap-4">
          {isConnected && (
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-green-800">Connected</span>
            </div>
          )}

          <button
            onClick={onConnect}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              isConnected
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'btn-secondary'
            }`}
          >
            {isConnected ? 'Disconnect' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </header>
  )
}
