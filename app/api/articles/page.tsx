// app/articles/page.tsx

import { getArticles } from "@/lib/data";

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div>
      <h1>Articles</h1>

      {articles.map((a) => (
        <a key={a.id} href={`/articles/${a.slug}`}>
          <h2>{a.title}</h2>
          <p>{a.excerpt}</p>
        </a>
      ))}
    </div>
  );
}