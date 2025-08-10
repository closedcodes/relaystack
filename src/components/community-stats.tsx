import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, TrendingUp, Calendar } from "lucide-react"

const stats = [
  {
    title: "Active Members",
    value: "12,847",
    change: "+12%",
    icon: Users,
    color: "text-tech-blue"
  },
  {
    title: "Discussions",
    value: "3,421",
    change: "+8%",
    icon: MessageCircle,
    color: "text-tech-green"
  },
  {
    title: "Events",
    value: "156",
    change: "+23%",
    icon: Calendar,
    color: "text-tech-purple"
  },
  {
    title: "Growth Rate",
    value: "18%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-tech-orange"
  }
]

export function CommunityStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Community Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.title} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-muted`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </p>
              <p className="text-xs text-muted-foreground">vs last month</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
