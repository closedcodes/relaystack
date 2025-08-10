"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, ThumbsUp, Eye, Pin, Lock } from "lucide-react"
import { formatRelativeTime, truncateText } from "@/lib/utils"

// Mock data - would be replaced with actual API calls
const mockDiscussions = [
  {
    id: "1",
    title: "What's your experience with Next.js 14 App Router?",
    content: "I've been using Next.js 14 with the App Router for a few months now. The performance improvements are impressive, but I'm curious about others' experiences with the new features like Server Actions and the improved caching system.",
    author: {
      name: "Sarah Chen",
      image: "https://github.com/shadcn.png",
      expertise: ["Frontend", "React", "Next.js"]
    },
    category: "Web Development",
    tags: ["Next.js", "React", "App Router", "Performance"],
    isPinned: true,
    isLocked: false,
    viewCount: 1247,
    upvotes: 89,
    comments: 23,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    lastActivity: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
  },
  {
    id: "2",
    title: "AI in Software Development: Boon or Bane?",
    content: "With the rise of AI coding assistants like GitHub Copilot and Cursor, I'm wondering how this affects our industry. Are we becoming more productive, or are we losing essential skills? Let's discuss the pros and cons.",
    author: {
      name: "Alex Rodriguez",
      image: "https://github.com/shadcn.png",
      expertise: ["AI/ML", "Software Engineering", "Productivity"]
    },
    category: "AI & Machine Learning",
    tags: ["AI", "Coding", "Productivity", "Skills", "Future"],
    isPinned: false,
    isLocked: false,
    viewCount: 892,
    upvotes: 156,
    comments: 67,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    id: "3",
    title: "Best practices for microservices architecture in 2024",
    content: "I'm designing a new microservices architecture and would love to hear about current best practices. What patterns are you using? How do you handle service discovery, monitoring, and data consistency?",
    author: {
      name: "Priya Patel",
      image: "https://github.com/shadcn.png",
      expertise: ["Backend", "Microservices", "DevOps", "Architecture"]
    },
    category: "Backend Development",
    tags: ["Microservices", "Architecture", "Best Practices", "DevOps", "Monitoring"],
    isPinned: false,
    isLocked: false,
    viewCount: 445,
    upvotes: 78,
    comments: 34,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    lastActivity: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
  }
]

export function DiscussionList() {
  const [discussions, setDiscussions] = useState(mockDiscussions)

  const handleUpvote = (id: string) => {
    setDiscussions(prev => prev.map(item => 
      item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item
    ))
  }

  return (
    <div className="space-y-6">
      {discussions.map((discussion) => (
        <Card key={discussion.id} className="card-hover">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {discussion.isPinned && (
                    <Badge variant="secondary" className="text-xs">
                      <Pin className="h-3 w-3 mr-1" />
                      Pinned
                    </Badge>
                  )}
                  {discussion.isLocked && (
                    <Badge variant="destructive" className="text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      Locked
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {discussion.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">
                  <a 
                    href={`/community/discussion/${discussion.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {discussion.title}
                  </a>
                </CardTitle>
                <CardDescription className="text-base">
                  {truncateText(discussion.content, 200)}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={discussion.author.image} />
                    <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{discussion.author.name}</span>
                </div>
                <span>•</span>
                <span>{formatRelativeTime(discussion.createdAt)}</span>
                <span>•</span>
                <span>Last activity: {formatRelativeTime(discussion.lastActivity)}</span>
              </div>
              <div className="flex items-center gap-2">
                {discussion.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleUpvote(discussion.id)}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  {discussion.upvotes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {discussion.comments}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {discussion.viewCount}
                </Button>
              </div>
              
              <Button variant="outline" size="sm" asChild>
                <a href={`/community/discussion/${discussion.id}`}>
                  View Discussion
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
