import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { getEntries } from '../services/entries';

export default function Dashboard() {
  const { logout } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //This is soooo much better/cleaner than async await imo
    getEntries()
      .then(setEntries)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>logout</button>
    </>
  );
}
