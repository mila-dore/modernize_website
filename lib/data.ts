// lib/data.ts

import { articles } from "./mocks/articles";
import { news } from "./mocks/news";
import { events } from "./mocks/events";

export function getArticles() {
  return articles;
}

export function getNews() {
  return news;
}

export function getEvents() {
  return events;
}

export function getArticleBySlug(slug: string) {
  return articles.find(a => a.slug === slug);
}

export function getNewsBySlug(slug: string) {
  return news.find(n => n.slug === slug);
}

export function getEventBySlug(slug: string) {
  return events.find(e => e.slug === slug);
}