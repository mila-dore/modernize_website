// app/events/page.tsx

import { getEvents } from "@/lib/data";

export default function EventsPage() {
  const items = getEvents();

  return (
    <div>
      <h1>Événements</h1>

      {items.map((e) => (
        <a key={e.id} href={`/events/${e.slug}`}>
          <h2>{e.title}</h2>
          <p>{e.location}</p>
        </a>
      ))}
    </div>
  );
}