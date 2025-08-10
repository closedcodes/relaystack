import { MainNav } from "@/components/main-nav"
import { EventList } from "@/components/event-list"
import { EventFilters } from "@/components/event-filters"
import { CreateEvent } from "@/components/create-event"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tech Events</h1>
          <p className="text-muted-foreground">
            Discover hackathons, meetups, conferences, and tech events happening worldwide
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <EventFilters />
            <CreateEvent />
          </aside>
          <main className="lg:col-span-3">
            <EventList />
          </main>
        </div>
      </main>
    </div>
  )
}
