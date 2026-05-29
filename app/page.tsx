'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Dashboard from '@/components/Dashboard'
import EmployeeList from '@/components/EmployeeList'
import SendPayment from '@/components/SendPayment'

type View = 'dashboard' | 'employees' | 'send'

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('dashboard')
  const [walletConnected, setWalletConnected] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header 
        onConnect={() => setWalletConnected(true)} 
        isConnected={walletConnected}
      />
      
      <div className="container-main">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'dashboard'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentView('employees')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'employees'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
            }`}
          >
            Employees
          </button>
          <button
            onClick={() => setCurrentView('send')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentView === 'send'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-primary'
            }`}
          >
            Send Payment
          </button>
        </div>

        {walletConnected ? (
          <>
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'employees' && <EmployeeList />}
            {currentView === 'send' && <SendPayment />}
          </>
        ) : (
          <div className="card text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-600 mb-6">
              Please connect your wallet to manage USDC payments to employees.
            </p>
            <button
              onClick={() => setWalletConnected(true)}
              className="btn-primary mx-auto"
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
