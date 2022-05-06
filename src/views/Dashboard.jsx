import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function Dashboard() {
  const { logout } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  return <div>Dashboard</div>;
}
