import { MainNav } from "@/components/main-nav"
import { AIAssistant } from "@/components/ai-assistant"

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Assistant</h1>
          <p className="text-muted-foreground">
            Get instant answers to tech questions, personalized recommendations, and AI-powered insights
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AIAssistant />
        </div>
      </main>
    </div>
  )
}
