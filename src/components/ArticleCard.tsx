import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Clock, Tag } from "lucide-react";

interface Article {
  title: string;
  summary: string;
  source: string;
  date: string;
  tags: string[];
}

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{article.summary}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="w-full space-y-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 cursor-pointer transition-colors"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-medium">{article.source}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
            <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors">
              Read more
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
