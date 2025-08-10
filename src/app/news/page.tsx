import { MainNav } from "@/components/main-nav"
import { NewsFeed } from "@/components/news-feed"
import { NewsFilters } from "@/components/news-filters"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tech News</h1>
          <p className="text-muted-foreground">
            AI-curated technology news and insights, updated in real-time
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <NewsFilters />
          </aside>
          <main className="lg:col-span-3">
            <NewsFeed />
          </main>
        </div>
      </main>
    </div>
  )
}
