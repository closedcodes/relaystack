"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ThumbsUp, MessageCircle, Share2, Bookmark } from "lucide-react"
import { formatRelativeTime, truncateText } from "@/lib/utils"

// Mock data - would be replaced with actual API calls
const mockNews = [
  {
    id: 1,
    title: "OpenAI Releases GPT-5 with Revolutionary Multimodal Capabilities",
    summary: "The latest iteration of OpenAI's language model introduces unprecedented abilities to understand and generate content across text, images, audio, and video simultaneously.",
    source: "TechCrunch",
    url: "https://techcrunch.com/gpt5-release",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    category: "AI",
    tags: ["OpenAI", "GPT-5", "Multimodal AI", "Language Models"],
    upvotes: 1247,
    comments: 89,
    aiScore: 0.95,
    isBookmarked: false
  },
  {
    id: 2,
    title: "Quantum Computing Breakthrough: Error Correction Milestone Achieved",
    summary: "Researchers at IBM have successfully demonstrated quantum error correction that could pave the way for practical quantum computers within the next decade.",
    source: "Nature",
    url: "https://nature.com/quantum-breakthrough",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    category: "Quantum Computing",
    tags: ["Quantum Computing", "IBM", "Error Correction", "Research"],
    upvotes: 892,
    comments: 156,
    aiScore: 0.88,
    isBookmarked: true
  },
  {
    id: 3,
    title: "Web3 Infrastructure Company Raises $50M Series B Funding",
    summary: "The blockchain infrastructure startup aims to simplify Web3 development for enterprises, with plans to expand their developer tools and API offerings.",
    source: "CoinDesk",
    url: "https://coindesk.com/web3-funding",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    category: "Web3",
    tags: ["Web3", "Blockchain", "Funding", "Startups"],
    upvotes: 445,
    comments: 67,
    aiScore: 0.76,
    isBookmarked: false
  }
]

export function NewsFeed() {
  const [news, setNews] = useState(mockNews)

  const handleUpvote = (id: number) => {
    setNews(prev => prev.map(item => 
      item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item
    ))
  }

  const handleBookmark = (id: number) => {
    setNews(prev => prev.map(item => 
      item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
    ))
  }

  return (
    <div className="space-y-6">
      {news.map((article) => (
        <Card key={article.id} className="card-hover">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AI Score: {Math.round(article.aiScore * 100)}%
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {article.title}
                  </a>
                </CardTitle>
                <CardDescription className="text-base">
                  {truncateText(article.summary, 200)}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-4">
                <span>{article.source}</span>
                <span>•</span>
                <span>{formatRelativeTime(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                {article.tags.slice(0, 3).map((tag) => (
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
                  onClick={() => handleUpvote(article.id)}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  {article.upvotes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {article.comments}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleBookmark(article.id)}
                  className={article.isBookmarked ? "text-primary" : ""}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
