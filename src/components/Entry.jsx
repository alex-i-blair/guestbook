import React from 'react';
import { useUser } from '../context/UserContext';

export default function Entry({ entry }) {
  const { user } = useUser();

  console.log('entry', entry);
  const timeStamp = new Date(entry.created_at).toDateString();
  return (
    <div className="entryCard">
      <h4>{entry.content}</h4>
      <p>{user.email}</p>
      <p>{timeStamp}</p>
    </div>
  );
}
