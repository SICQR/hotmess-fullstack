export default function Membership() {
  const tiers = [
    { name: 'Bronze', price: 0, benefits: ['Access to community rooms', 'Basic rewards'] },
    { name: 'Silver', price: 5, benefits: ['All Bronze benefits', 'Early access to drops', 'Exclusive rooms'] },
    { name: 'Gold', price: 20, benefits: ['All Silver benefits', 'Exclusive merch', 'Premium aftercare'] }
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Membership Tiers</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier) => (
          <div key={tier.name} className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{tier.name}</h2>
            <p className="font-bold mb-2">{tier.price === 0 ? 'Free' : `£${tier.price}/mo`}</p>
            <ul className="list-disc pl-6 mb-2">
              {tier.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Join {tier.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}