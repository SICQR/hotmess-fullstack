import Link from 'next/link';

export default function Shows() {
  const shows = [
    { slug: 'dial-a-daddy', title: 'Dial-a-Daddy', host: 'DJ Daddy', schedule: 'Daily at 12:00' },
    { slug: 'hand-n-hand', title: 'Hand N Hand', host: 'DJ Care', schedule: 'Sundays at 18:00' },
    { slug: 'pre-drinks', title: 'Pre-Drinks', host: 'DJ Sunshine', schedule: 'Fridays at 20:00' },
    { slug: 'club-hours', title: 'Club Hours', host: 'DJ Night', schedule: 'Saturdays at 22:00' }
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Radio Shows</h1>
      <div className="space-y-3">
        {shows.map((show) => (
          <div key={show.slug} className="border p-3 rounded">
            <h2 className="text-xl font-semibold">
              <Link href={`/shows/${show.slug}`}>{show.title}</Link>
            </h2>
            <p className="text-sm text-gray-600">Host: {show.host} • {show.schedule}</p>
            <Link href={`/shows/${show.slug}`} className="text-blue-600 underline">Listen / Set Reminder</Link>
          </div>
        ))}
      </div>
    </div>
  );
}