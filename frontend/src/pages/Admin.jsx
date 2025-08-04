import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [volunteers, setVolunteers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin-login');
      return;
    }

    axios.get('http://localhost:5000/api/volunteers', {
      headers: { Authorization: token }
    })
    .then(res => setVolunteers(res.data))
    .catch(() => {
      alert('Access Denied');
      navigate('/admin-login');
    });
  }, [navigate]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin - Volunteer Applications</h2>
  <div className="space-y-6">
    {volunteers.map((v, index) => (
      <div key={index} className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
        <div className="text-lg font-semibold text-blue-700">{v.name}</div>
        <div className="text-sm text-gray-600">{v.email} | {v.phone}</div>
        <p className="mt-2 text-gray-800 italic">"{v.message}"</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Admin;
