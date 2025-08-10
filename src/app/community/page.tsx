import { MainNav } from "@/components/main-nav"
import { DiscussionList } from "@/components/discussion-list"
import { CreateDiscussion } from "@/components/create-discussion"
import { CommunityStats } from "@/components/community-stats"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tech Community</h1>
          <p className="text-muted-foreground">
            Join discussions, share insights, and connect with fellow tech enthusiasts
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <CommunityStats />
            <CreateDiscussion />
          </aside>
          <main className="lg:col-span-3">
            <DiscussionList />
          </main>
        </div>
      </main>
    </div>
  )
}
