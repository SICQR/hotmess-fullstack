export default function Affiliate() {
  const legend = [
    { rank: 1, name: 'LegendOne', tier: 'Gold', scans: 120, sales: 50, rewards: '£200' },
    { rank: 2, name: 'LegendTwo', tier: 'Silver', scans: 90, sales: 30, rewards: '£100' },
    { rank: 3, name: 'LegendThree', tier: 'Bronze', scans: 50, sales: 15, rewards: '£40' }
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Affiliate & Legend Board</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Join the Affiliate Program</h2>
        <p className="mb-2">Earn rewards by sharing HOTMESS with your network. Generate your personal QR code and start earning today.</p>
        <form className="max-w-md space-y-3">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
          </div>
          <div>
            <label className="block mb-1">Telegram Handle</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="@yourhandle" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Join Affiliate</button>
        </form>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Legend Board</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Rank</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Tier</th>
              <th className="border p-2">Scans</th>
              <th className="border p-2">Sales</th>
              <th className="border p-2">Rewards</th>
            </tr>
          </thead>
          <tbody>
            {legend.map((item) => (
              <tr key={item.rank} className="text-center">
                <td className="border p-2">{item.rank}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.tier}</td>
                <td className="border p-2">{item.scans}</td>
                <td className="border p-2">{item.sales}</td>
                <td className="border p-2">{item.rewards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}