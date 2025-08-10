import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Calendar } from "lucide-react";

const featuredNews = [
  {
    title: "The Future of AI in Software Development",
    summary: "Exploring how AI is revolutionizing code generation and testing.",
    source: "TechCrunch",
    time: "2 hours ago"
  },
  {
    title: "Next.js 15 Released with Major Performance Improvements",
    summary: "New features include improved caching and faster builds.",
    source: "Vercel",
    time: "5 hours ago"
  }
];

const trendingTopics = [
  { name: "AI/ML", posts: 142 },
  { name: "Web Development", posts: 89 },
  { name: "DevOps", posts: 67 },
  { name: "Mobile Development", posts: 45 }
];

const upcomingEvents = [
  {
    title: "React Conf 2025",
    date: "Aug 15, 2025",
    type: "Conference"
  },
  {
    title: "AI/ML Meetup",
    date: "Aug 12, 2025",
    type: "Meetup"
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to RelayStack
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Your AI-powered hub for technology and engineering. Stay informed, collaborate, and share knowledge with the global tech community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/news" 
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Browse News <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/community" 
            className="inline-flex items-center border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors"
          >
            Join Community
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">1,234</h3>
              <p className="text-gray-600 dark:text-gray-400">News Articles</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">5,678</h3>
              <p className="text-gray-600 dark:text-gray-400">Community Members</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-purple-500 mr-3" />
            <div>
              <h3 className="text-2xl font-bold">42</h3>
              <p className="text-gray-600 dark:text-gray-400">Upcoming Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured News */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Featured News</h2>
            <Link href="/news" className="text-blue-500 hover:text-blue-600">View All</Link>
          </div>
          <div className="space-y-4">
            {featuredNews.map((article, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{article.summary}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-500">
                  <span>{article.source}</span>
                  <span>{article.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Topics</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0 border-gray-100 dark:border-gray-700">
                  <span className="font-medium">{topic.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{topic.posts} posts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="py-3 border-b last:border-b-0 border-gray-100 dark:border-gray-700">
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>{event.date}</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
