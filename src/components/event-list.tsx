"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"
import { formatRelativeTime, truncateText } from "@/lib/utils"

// Mock data - would be replaced with actual API calls
const mockEvents = [
  {
    id: "1",
    title: "React Summit 2024",
    description: "The biggest React conference of the year featuring top speakers, workshops, and networking opportunities. Learn about the latest React features, best practices, and connect with the React community.",
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 7 days + 2 hours
    location: "San Francisco, CA",
    isOnline: false,
    onlineUrl: null,
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend", "Conference"],
    maxAttendees: 500,
    isFree: false,
    price: 299,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    organizer: "React Foundation",
    registrations: 342,
    isRegistered: false
  },
  {
    id: "2",
    title: "AI & Machine Learning Hackathon",
    description: "A 48-hour hackathon focused on building innovative AI solutions. Work with cutting-edge tools, collaborate with experts, and compete for prizes worth $50,000.",
    startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    location: "Online",
    isOnline: true,
    onlineUrl: "https://ai-hackathon.example.com",
    category: "AI & Machine Learning",
    tags: ["AI", "ML", "Hackathon", "Innovation", "Competition"],
    maxAttendees: 1000,
    isFree: true,
    price: 0,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    organizer: "Tech Innovation Hub",
    registrations: 789,
    isRegistered: true
  },
  {
    id: "3",
    title: "DevOps Days London",
    description: "Join DevOps practitioners, engineers, and thought leaders for two days of learning, sharing, and networking. Topics include CI/CD, infrastructure as code, monitoring, and team collaboration.",
    startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
    location: "London, UK",
    isOnline: false,
    onlineUrl: null,
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Infrastructure", "Monitoring", "Collaboration"],
    maxAttendees: 300,
    isFree: false,
    price: 199,
    currency: "GBP",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
    organizer: "DevOps London",
    registrations: 156,
    isRegistered: false
  }
]

export function EventList() {
  const [events, setEvents] = useState(mockEvents)

  const handleRegister = (id: string) => {
    setEvents(prev => prev.map(event => 
      event.id === id ? { ...event, isRegistered: !event.isRegistered } : event
    ))
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTimeUntil = (date: Date) => {
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} away`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} away`
    return 'Starting soon'
  }

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <Card key={event.id} className="card-hover">
          <div className="flex">
            {event.imageUrl && (
              <div className="w-48 h-32 relative overflow-hidden rounded-l-lg">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {event.isOnline && (
                  <Badge className="absolute top-2 left-2 bg-tech-green">
                    Online
                  </Badge>
                )}
              </div>
            )}
            
            <div className="flex-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>
                      {event.isFree ? (
                        <Badge variant="secondary" className="text-xs">
                          Free
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          ${event.price} {event.currency}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {truncateText(event.description, 150)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
                    <Badge variant="outline" className="text-xs">
                      {getTimeUntil(event.startDate)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {event.isOnline ? (
                      <ExternalLink className="h-4 w-4" />
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.registrations}/{event.maxAttendees} registered</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Organized by {event.organizer}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {event.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {event.isRegistered ? (
                      <Button variant="outline" size="sm" disabled>
                        Registered
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        onClick={() => handleRegister(event.id)}
                        disabled={event.registrations >= event.maxAttendees}
                      >
                        {event.registrations >= event.maxAttendees ? 'Full' : 'Register'}
                      </Button>
                    )}
                    
                    {event.isOnline && event.onlineUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={event.onlineUrl} target="_blank" rel="noopener noreferrer">
                          Join Online
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
