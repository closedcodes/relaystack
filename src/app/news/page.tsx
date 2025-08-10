import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    title: "The Future of AI in Software Development",
    summary: "A look into how artificial intelligence is shaping the future of software engineering, from automated testing to AI-powered code generation.",
    source: "TechCrunch",
    date: "2025-08-10",
    tags: ["AI", "Software Development", "Future Tech"],
  },
  {
    title: "Getting Started with Next.js 15",
    summary: "A comprehensive guide to the new features and improvements in Next.js 15, including the latest updates to the App Router and server components.",
    source: "Vercel Blog",
    date: "2025-08-09",
    tags: ["Next.js", "Web Development", "JavaScript"],
  },
];

const NewsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <div className="mb-4">
        {/* Add filters and search bar here */}
      </div>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
