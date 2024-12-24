import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  // Function to fetch users from the backend API
  const fetchUsers = async () => {
    console.log('Fetching users...'); // Debugging log before the request
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      console.log('Fetched users data:', data); // Log the fetched data
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error); // Log any error
    }
  };

  // Function to add a new user
  const addUser = async () => {
    if (!name.trim()) {
      alert('Name cannot be empty!');
      return;
    }
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) throw new Error('Failed to add user');
      setName('');
      fetchUsers();  // Re-fetch users after adding a new one
    } catch (error) {
      console.error('Error adding user:', error); // Log any error
    }
  };

  // Use useEffect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a user name"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.length > 0
          ? users.map((user) => {
              console.log('Rendering user:', user); // Log each user being rendered
              return <li key={user._id}>{user.name}</li>;
            })
          : 'No users found'}
      </ul>
    </div>
  );
};

export default App;
