import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Article {
  title: string;
  summary: string;
  source: string;
  date: string;
  tags: string[];
}

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{article.summary}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-sm text-gray-500">{article.source} - {article.date}</span>
        <div className="flex space-x-2">
          {article.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
