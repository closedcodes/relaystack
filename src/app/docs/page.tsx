import { Book, Search, ChevronRight, FileText, Code, HelpCircle, Users } from "lucide-react";

const docSections = [
  {
    title: "Getting Started",
    description: "Everything you need to know to get up and running with RelayStack",
    icon: "🚀",
    articles: [
      { title: "Welcome to RelayStack", time: "5 min read" },
      { title: "Account Setup Guide", time: "3 min read" },
      { title: "First Steps Tutorial", time: "10 min read" },
      { title: "Platform Overview", time: "7 min read" }
    ]
  },
  {
    title: "Community Guidelines",
    description: "Learn how to participate effectively in our community",
    icon: "👥",
    articles: [
      { title: "Code of Conduct", time: "5 min read" },
      { title: "Posting Guidelines", time: "4 min read" },
      { title: "Moderation Policies", time: "6 min read" },
      { title: "Best Practices", time: "8 min read" }
    ]
  },
  {
    title: "API Documentation",
    description: "Complete reference for the RelayStack API",
    icon: "⚡",
    articles: [
      { title: "API Introduction", time: "5 min read" },
      { title: "Authentication", time: "7 min read" },
      { title: "Endpoints Reference", time: "15 min read" },
      { title: "Rate Limiting", time: "4 min read" }
    ]
  },
  {
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    icon: "🔧",
    articles: [
      { title: "Common Problems", time: "6 min read" },
      { title: "Error Messages", time: "8 min read" },
      { title: "Performance Issues", time: "5 min read" },
      { title: "Contact Support", time: "2 min read" }
    ]
  }
];

const popularDocs = [
  { title: "How to create your first post", views: "12.5k", category: "Getting Started" },
  { title: "Understanding the voting system", views: "8.2k", category: "Community" },
  { title: "API Rate Limiting Guide", views: "6.8k", category: "API" },
  { title: "Markdown formatting guide", views: "5.3k", category: "Guides" },
  { title: "Community moderation rules", views: "4.1k", category: "Community" }
];

const DocsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to know about using RelayStack effectively. From getting started to advanced features.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 shadow-sm"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">Getting Started</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">New to RelayStack? Start here.</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <Code className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h3 className="font-semibold text-green-900 dark:text-green-100">API Reference</h3>
          <p className="text-sm text-green-700 dark:text-green-300 mt-1">Complete API documentation.</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
          <h3 className="font-semibold text-purple-900 dark:text-purple-100">Community</h3>
          <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">Guidelines and best practices.</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
          <HelpCircle className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
          <h3 className="font-semibold text-orange-900 dark:text-orange-100">Help & Support</h3>
          <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">Get help when you need it.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Documentation Sections */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">Documentation Sections</h2>
          {docSections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{section.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {section.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{article.title}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{article.time}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Articles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <div className="space-y-3">
                {popularDocs.map((doc, index) => (
                  <div key={index} className="flex flex-col gap-1 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                    <div className="font-medium text-sm leading-tight">{doc.title}</div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{doc.category}</span>
                      <span>{doc.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Help Widget */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Need Help?</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
              Can't find what you're looking for? Our community is here to help.
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm">
              Ask the Community
            </button>
          </div>

          {/* Contribute */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2">Improve this page</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Help us make our documentation better by contributing improvements.
            </p>
            <button className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-sm">
              Edit on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
