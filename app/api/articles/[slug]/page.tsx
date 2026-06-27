// app/articles/[slug]/page.tsx


export default function ArticlePage({ params }) {
  return <div>Article : {params.slug}</div>
}