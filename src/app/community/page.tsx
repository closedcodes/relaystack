import { MessageCircle, ThumbsUp, User, Plus, Search, Filter, TrendingUp } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Best practices for React performance optimization?",
    author: "sarah_dev",
    avatar: "S",
    content: "I'm working on a large React application and noticed some performance issues. What are the best practices for optimizing React apps in 2025?",
    tags: ["React", "Performance", "JavaScript"],
    upvotes: 24,
    comments: 8,
    timeAgo: "2 hours ago",
    category: "Discussion"
  },
  {
    id: 2,
    title: "How to implement authentication in Next.js 15?",
    author: "mike_fullstack",
    avatar: "M",
    content: "Looking for guidance on implementing secure authentication in Next.js 15 with the new App Router. Should I use NextAuth.js or build a custom solution?",
    tags: ["Next.js", "Authentication", "Security"],
    upvotes: 18,
    comments: 12,
    timeAgo: "4 hours ago",
    category: "Question"
  },
  {
    id: 3,
    title: "AI-powered code review tools comparison",
    author: "tech_lead_alex",
    avatar: "A",
    content: "I've been testing various AI-powered code review tools for our team. Here's my comparison of GitHub Copilot, DeepCode, and CodeGuru.",
    tags: ["AI", "Code Review", "DevOps"],
    upvotes: 42,
    comments: 15,
    timeAgo: "6 hours ago",
    category: "Article"
  },
  {
    id: 4,
    title: "Kubernetes vs Docker Swarm in 2025",
    author: "devops_guru",
    avatar: "D",
    content: "With all the recent updates, how do Kubernetes and Docker Swarm compare for container orchestration in 2025? What factors should influence the choice?",
    tags: ["Kubernetes", "Docker", "DevOps"],
    upvotes: 31,
    comments: 20,
    timeAgo: "8 hours ago",
    category: "Discussion"
  },
  {
    id: 5,
    title: "Learning path for becoming a full-stack developer",
    author: "newbie_coder",
    avatar: "N",
    content: "I'm new to programming and want to become a full-stack developer. What's the best learning path in 2025? Should I start with JavaScript or Python?",
    tags: ["Career", "Learning", "Full Stack"],
    upvotes: 15,
    comments: 25,
    timeAgo: "12 hours ago",
    category: "Question"
  }
];

const categories = ["All", "Questions", "Discussions", "Articles", "Show & Tell"];
const sortOptions = ["Latest", "Popular", "Most Discussed", "Trending"];

const CommunityPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Community</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Join the conversation with fellow developers</p>
        </div>
        <button className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Create Post
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2,847</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Posts</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">1,203</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Active Members</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">156</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Online Now</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">42</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">New Today</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  category === "All"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500">
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                {post.avatar}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                    {post.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium self-start ${
                    post.category === "Question" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" :
                    post.category === "Discussion" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200" :
                    "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
                  }`}>
                    {post.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{post.content}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span>{post.timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      {post.upvotes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default CommunityPage;
