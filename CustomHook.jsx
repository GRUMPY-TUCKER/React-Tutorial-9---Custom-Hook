import React from 'react';
import useFetch from './useFetch';

function CustomHook() {
  // Call useFetch and pass the URL as an argument
  const { data, loading, error } = useFetch('https://api.github.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {data && data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomHook;
