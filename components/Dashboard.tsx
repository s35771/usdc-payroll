'use client'

import { useState, useEffect } from 'react'
import StatCard from './StatCard'
import PaymentHistory from './PaymentHistory'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalPaid: '0.00',
    pendingPayments: 0,
    monthlyBudget: '10000.00',
  })

  useEffect(() => {
    // Simulate fetching dashboard data
    setStats({
      totalEmployees: 24,
      totalPaid: '45230.50',
      pendingPayments: 3,
      monthlyBudget: '100000.00',
    })
  }, [])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value={stats.totalEmployees.toString()}
          icon="👥"
          color="blue"
        />
        <StatCard
          title="Total Paid (This Month)"
          value={`$${stats.totalPaid}`}
          icon="💳"
          color="green"
        />
        <StatCard
          title="Pending Payments"
          value={stats.pendingPayments.toString()}
          icon="⏳"
          color="orange"
        />
        <StatCard
          title="Monthly Budget"
          value={`$${stats.monthlyBudget}`}
          icon="💰"
          color="purple"
        />
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Payments</h2>
        <PaymentHistory />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Average Payment</span>
              <span className="font-bold text-gray-900">$1,884.60</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Total Transactions</span>
              <span className="font-bold text-gray-900">127</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-bold text-green-600">99.2%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold mb-4 text-gray-900">Budget Status</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Used</span>
                <span className="font-bold">$45,230.50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2"
                  style={{ width: '45.2%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Remaining</span>
                <span className="font-bold">$54,769.50</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                54.8% of budget remaining for this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
