import React from 'react';
import { useUser } from '../context/UserContext';

export default function Entry({ entry }) {
  const { user } = useUser();
  const { content, created_at } = entry;
  const timeStamp = new Date(created_at).toDateString();
  return (
    <div className="entryCard">
      <h4>{content}</h4>
      <p>{user.email}</p>
      <p>{timeStamp}</p>
    </div>
  );
}
