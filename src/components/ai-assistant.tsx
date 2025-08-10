"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Sparkles, Lightbulb, TrendingUp, BookOpen } from "lucide-react"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  category?: string
}

const quickQuestions = [
  "What's the latest in AI development?",
  "Explain quantum computing basics",
  "Best practices for web security",
  "How to get started with blockchain?",
  "Latest trends in cloud computing",
  "Tips for learning machine learning"
]

const categories = [
  { name: "AI & ML", icon: Bot, color: "bg-tech-purple" },
  { name: "Web Dev", icon: BookOpen, color: "bg-tech-blue" },
  { name: "Security", icon: Lightbulb, color: "bg-tech-red" },
  { name: "Trends", icon: TrendingUp, color: "bg-tech-green" }
]

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI tech assistant. I can help you with questions about technology, programming, AI, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
      category: "general"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about "${input}". This is a simulated response - in the real application, this would be powered by OpenAI's API with context from our tech news database and community discussions.`,
        isUser: false,
        timestamp: new Date(),
        category: "ai"
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="space-y-6">
      {/* Quick Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Quick Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-left h-auto p-3"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI Chat
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 border rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.isUser ? (
                      <span className="text-xs opacity-80">You</span>
                    ) : (
                      <>
                        <Bot className="h-3 w-3" />
                        <span className="text-xs opacity-80">AI Assistant</span>
                      </>
                    )}
                    {message.category && (
                      <Badge variant="secondary" className="text-xs">
                        {message.category}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bot className="h-3 w-3" />
                    <span className="text-xs opacity-80">AI Assistant</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about tech..."
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Explore by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center gap-2"
              >
                <div className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm">{category.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
