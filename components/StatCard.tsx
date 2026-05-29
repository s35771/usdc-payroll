interface StatCardProps {
  title: string
  value: string
  icon: string
  color?: 'blue' | 'green' | 'orange' | 'purple'
}

const colorMap = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  orange: 'bg-orange-50 border-orange-200',
  purple: 'bg-purple-50 border-purple-200',
}

export default function StatCard({
  title,
  value,
  icon,
  color = 'blue',
}: StatCardProps) {
  return (
    <div className={`card ${colorMap[color]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}
