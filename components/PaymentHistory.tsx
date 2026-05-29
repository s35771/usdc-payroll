'use client'

import { useState, useEffect } from 'react'

interface Payment {
  id: string
  employee: string
  amount: string
  date: string
  status: 'completed' | 'pending' | 'failed'
  txHash: string
}

export default function PaymentHistory() {
  const [payments, setPayments] = useState<Payment[]>([])

  useEffect(() => {
    setPayments([
      {
        id: '1',
        employee: 'John Doe',
        amount: '2500.00',
        date: '2024-05-28',
        status: 'completed',
        txHash: '0x1234...5678',
      },
      {
        id: '2',
        employee: 'Jane Smith',
        amount: '3000.00',
        date: '2024-05-28',
        status: 'completed',
        txHash: '0xabcd...efgh',
      },
      {
        id: '3',
        employee: 'Mike Johnson',
        amount: '2200.00',
        date: '2024-05-27',
        status: 'pending',
        txHash: '0x5678...1234',
      },
      {
        id: '4',
        employee: 'Sarah Davis',
        amount: '2800.00',
        date: '2024-05-26',
        status: 'completed',
        txHash: '0xijkl...mnop',
      },
    ])
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="badge badge-success">Completed</span>
      case 'pending':
        return <span className="badge badge-pending">Pending</span>
      case 'failed':
        return <span className="badge badge-failed">Failed</span>
      default:
        return <span className="badge">Unknown</span>
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Employee</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Transaction</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4 text-gray-900">{payment.employee}</td>
              <td className="py-4 px-4 font-semibold text-gray-900">${payment.amount}</td>
              <td className="py-4 px-4 text-gray-600">{payment.date}</td>
              <td className="py-4 px-4">{getStatusBadge(payment.status)}</td>
              <td className="py-4 px-4">
                <a
                  href={`https://polygonscan.com/tx/${payment.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline text-sm font-medium"
                >
                  {payment.txHash}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
