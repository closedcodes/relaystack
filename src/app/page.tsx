import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Newspaper, Users, Calendar, Bot, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              🚀 Now in Beta
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-tech-purple to-tech-green bg-clip-text text-transparent mb-6">
              RelayStack
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your AI-powered hub for tech news, community discussions, and tech events. 
              Stay ahead with curated insights and connect with fellow tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="tech-gradient text-white hover:opacity-90">
                <Link href="/news">
                  Explore News <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/community">
                  Join Community <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to stay ahead in tech
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI-curated news to community-driven discussions, RelayStack brings the tech world to your fingertips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Newspaper className="h-6 w-6 text-tech-blue" />
                </div>
                <CardTitle>AI-Curated News</CardTitle>
                <CardDescription>
                  Get the latest tech news filtered and summarized by AI, ensuring relevance and quality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-tech-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-tech-green" />
                </CardHeader>
                <CardTitle>Community Hub</CardTitle>
                <CardDescription>
                  Engage in discussions, share insights, and connect with tech professionals worldwide.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-tech-purple/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-tech-purple" />
                </CardHeader>
                <CardTitle>Tech Events</CardTitle>
                <CardDescription>
                  Discover hackathons, meetups, and conferences happening in your area and online.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-tech-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-tech-orange" />
                </CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>
                  Get instant answers to tech questions and personalized content recommendations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-tech-red/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-tech-red" />
                </CardHeader>
                <CardTitle>Trend Detection</CardTitle>
                <CardDescription>
                  Stay ahead with AI-powered trend analysis and emerging technology insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardTitle>Smart Curation</CardTitle>
                <CardDescription>
                  Personalized feeds based on your interests and expertise areas.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to join the future of tech news?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a community that's shaping the future of technology. 
            Get started today and never miss what's important in tech.
          </p>
          <Button asChild size="lg" className="tech-gradient text-white hover:opacity-90">
            <Link href="/auth/signup">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
