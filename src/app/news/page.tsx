import ArticleCard from "@/components/ArticleCard";
import { Search, Filter, Clock, TrendingUp } from "lucide-react";

const articles = [
  {
    title: "The Future of AI in Software Development",
    summary: "A comprehensive look into how artificial intelligence is shaping the future of software engineering, from automated testing to AI-powered code generation and debugging tools.",
    source: "TechCrunch",
    date: "2025-08-10",
    tags: ["AI", "Software Development", "Future Tech"],
  },
  {
    title: "Getting Started with Next.js 15",
    summary: "A comprehensive guide to the new features and improvements in Next.js 15, including the latest updates to the App Router, server components, and performance optimizations.",
    source: "Vercel Blog",
    date: "2025-08-09",
    tags: ["Next.js", "Web Development", "JavaScript"],
  },
  {
    title: "TypeScript 5.5 Brings New Performance Improvements",
    summary: "The latest TypeScript release focuses on compiler performance, better error messages, and enhanced developer experience with new language features.",
    source: "Microsoft Dev Blog",
    date: "2025-08-08",
    tags: ["TypeScript", "JavaScript", "Performance"],
  },
  {
    title: "The Rise of Edge Computing in 2025",
    summary: "How edge computing is revolutionizing data processing and reducing latency for modern applications, with real-world examples and implementation strategies.",
    source: "AWS Blog",
    date: "2025-08-07",
    tags: ["Edge Computing", "Cloud", "Performance"],
  },
  {
    title: "Kubernetes Security Best Practices",
    summary: "Essential security measures every DevOps team should implement when deploying applications with Kubernetes, including RBAC, network policies, and secrets management.",
    source: "CNCF",
    date: "2025-08-06",
    tags: ["Kubernetes", "Security", "DevOps"],
  },
  {
    title: "React 19 Beta: What's New for Developers",
    summary: "Exploring the upcoming features in React 19, including the new compiler, concurrent features, and breaking changes that developers need to know about.",
    source: "React Blog",
    date: "2025-08-05",
    tags: ["React", "Web Development", "JavaScript"],
  }
];

const categories = ["All", "AI/ML", "Web Development", "DevOps", "Mobile", "Cloud", "Security"];
const sortOptions = ["Latest", "Popular", "Most Discussed"];

const NewsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Tech News</h1>
        <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest technology and engineering news</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search news articles..."
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

      {/* Stats Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2 sm:mb-0">
          <TrendingUp className="h-5 w-5" />
          <span className="font-medium">Showing {articles.length} articles</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span className="text-sm">Updated 5 minutes ago</span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
