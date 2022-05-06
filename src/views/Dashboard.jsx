import React, { useEffect, useState } from 'react';
import Entry from '../components/Entry';
import { useUser } from '../context/UserContext';
import { getEntries } from '../services/entries';
import { signOutUser } from '../services/user';

export default function Dashboard() {
  const { logout, user } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //This is soooo much better/cleaner than async await imo
    getEntries()
      .then(setEntries)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  function handleLogout() {
    logout();
    signOutUser();
  }

  return (
    <>
      <header>
        <p>Logged in as {user.email} </p>
        <button onClick={handleLogout}>logout</button>
      </header>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {entries.map((entry) => (
            <Entry key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </>
  );
}
