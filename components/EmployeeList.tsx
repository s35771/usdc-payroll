'use client'

import { useState, useEffect } from 'react'

interface Employee {
  id: string
  name: string
  email: string
  walletAddress: string
  salary: string
  status: 'active' | 'inactive'
  joinDate: string
}

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    walletAddress: '',
    salary: '',
  })

  useEffect(() => {
    setEmployees([
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        walletAddress: '0x742d...1234',
        salary: '2500.00',
        status: 'active',
        joinDate: '2023-01-15',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        walletAddress: '0xabcd...5678',
        salary: '3000.00',
        status: 'active',
        joinDate: '2023-03-20',
      },
      {
        id: '3',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        walletAddress: '0x5678...9abc',
        salary: '2200.00',
        status: 'active',
        joinDate: '2023-06-10',
      },
    ])
  }, [])

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault()
    const newEmployee: Employee = {
      id: Date.now().toString(),
      ...formData,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0],
    }
    setEmployees([...employees, newEmployee])
    setFormData({ name: '', email: '', walletAddress: '', salary: '' })
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Employees</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary"
        >
          {showForm ? 'Cancel' : 'Add Employee'}
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h3 className="text-lg font-bold mb-4 text-gray-900">Add New Employee</h3>
          <form onSubmit={handleAddEmployee} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field"
                required
              />
              <input
                type="text"
                placeholder="Wallet Address (0x...)"
                value={formData.walletAddress}
                onChange={(e) =>
                  setFormData({ ...formData, walletAddress: e.target.value })
                }
                className="input-field"
                required
              />
              <input
                type="number"
                placeholder="Monthly Salary (USDC)"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                className="input-field"
                required
                step="0.01"
              />
            </div>
            <button type="submit" className="btn-primary">
              Add Employee
            </button>
          </form>
        </div>
      )}

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Wallet</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Salary</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4 text-gray-900 font-medium">
                    {employee.name}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{employee.email}</td>
                  <td className="py-4 px-4 text-gray-600 font-mono text-sm">
                    {employee.walletAddress}
                  </td>
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    ${employee.salary}
                  </td>
                  <td className="py-4 px-4">
                    <span className="badge badge-success">Active</span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-secondary hover:underline text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
