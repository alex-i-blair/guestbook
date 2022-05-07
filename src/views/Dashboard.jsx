import React, { useEffect, useState } from 'react';
import Entry from '../components/Entry';
import { useUser } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';

export default function Dashboard() {
  const { logout, user } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  const fetchEntries = () => {
    getEntries()
      .then(setEntries)
      .catch(console.error)
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchEntries();
  }, []);

  async function handleAddEntry(e) {
    e.preventDefault();
    await createEntry({ userId: user.id, content });
    setContent('');
    fetchEntries();
  }

  return (
    <>
      <header>
        <p>Logged in as {user.email}</p>
        <button onClick={logout}>logout</button>
      </header>
      <form onSubmit={handleAddEntry}>
        <textarea
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <button type="submit">New Entry</button>
      </form>
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
