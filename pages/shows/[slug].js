import { useRouter } from 'next/router';
import AudioPlayer from '../../components/AudioPlayer';

const showData = {
  'dial-a-daddy': {
    title: 'Dial-a-Daddy',
    description: 'Call in and tell daddy what you need. Unfiltered advice and vibes.',
    schedule: 'Daily at 12:00',
    host: 'DJ Daddy'
  },
  'hand-n-hand': {
    title: 'Hand N Hand',
    description: 'Aftercare for your body and mind. Join us for the HNH Sundays.',
    schedule: 'Sundays at 18:00',
    host: 'DJ Care'
  },
  'pre-drinks': {
    title: 'Pre-Drinks',
    description: 'Warming up your night with tunes and talk.',
    schedule: 'Fridays at 20:00',
    host: 'DJ Sunshine'
  },
  'club-hours': {
    title: 'Club Hours',
    description: 'Late night club vibes live from HOTMESS.',
    schedule: 'Saturdays at 22:00',
    host: 'DJ Night'
  }
};

export default function ShowPage() {
  const router = useRouter();
  const { slug } = router.query;
  const show = showData[slug];
  if (!show) {
    return <div>Show not found</div>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{show.title}</h1>
      <p className="text-gray-600 mb-2">Host: {show.host}</p>
      <p className="mb-4">Schedule: {show.schedule}</p>
      <p className="mb-4">{show.description}</p>
      <AudioPlayer />
      <h2 className="text-2xl font-semibold mt-6 mb-2">Episodes</h2>
      <p>Episode list coming soon...</p>
    </div>
  );
}