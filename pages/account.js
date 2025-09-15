import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setUser(data.user);
      setMessage('Logged in!');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMessage('Logged out');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Account</h1>
      {!user ? (
        <form onSubmit={handleLogin} className="max-w-md space-y-3">
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
          {message && <p className="text-red-600 mt-2">{message}</p>}
        </form>
      ) : (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout} className="bg-gray-800 text-white px-4 py-2 rounded mt-4">Logout</button>
        </div>
      )}
    </div>
  );
}