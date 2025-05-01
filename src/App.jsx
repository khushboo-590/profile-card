import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import { profile } from './components/Data';

function App() {
  return (
    <div className="min-h-screen p-8 mx-auto container justify-center items-center flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">Profiles</h1>
      <div className="flex-wrap flex-row flex gap-2">
        {profile.map((user) => (
          <ProfileCard name={user.name} post={user.post} image={user.image}  email={user.email}  location={user.location}  />
        ))}
      </div>
    </div>
  );
}

export default App;
