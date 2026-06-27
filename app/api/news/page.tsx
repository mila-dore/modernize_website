// app/news/page.tsx

import { getNews } from "@/lib/data";

export default function NewsPage() {
  const items = getNews();

  return (
    <div>
      <h1>News</h1>

      {items.map((n) => (
        <a key={n.id} href={`/news/${n.slug}`}>
          <h2>{n.title}</h2>
          <p>{n.excerpt}</p>
        </a>
      ))}
    </div>
  );
}