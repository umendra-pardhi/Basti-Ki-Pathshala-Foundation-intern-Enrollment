import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
 <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 text-center">
  <h1 className="text-4xl font-bold text-blue-800 mb-4">Basti Ki Pathshala Foundation</h1>
  <p className="text-lg text-gray-700 mb-8 max-w-xl">
    We Work Together to Break Educational Barriers
  </p>

  <div className="space-y-4">
    <Link to="/register">
      <button className="px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition duration-200">
        Register as Intern/Volunteer
      </button>
    </Link>
    <br /><br />
    <Link to="/admin">
      <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-200">
        Admin Panel
      </button>
    </Link>
  </div>
</div>

);

export default Home;
