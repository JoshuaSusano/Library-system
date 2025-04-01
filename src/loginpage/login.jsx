import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ccbuild from '../assets/logimg.png';
import logo from '../assets/cclogo.png';

const Login = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();
    if (studentID === '123' && password === '123') {
      navigate('/landing'); 
    } else {
      alert('Invalid Student ID or Password');
    }
  }; 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="hidden md:flex w-2/6 h-[450px]">
        <img src={ccbuild} alt="Building" className="w-full h-full object-cover rounded-l-lg" />
      </div>
      <div className="w-full md:w-2/5 flex flex-col items-center bg-white shadow-lg p-6 h-[450px] rounded-r-lg">
        <img src={logo} alt="cclogo" className="w-16 mb-3 mt-6" />
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Login Your Account</h2>
        <form className="w-full max-w-xs" onSubmit={handleLogin}>
          <div className="mb-2">
            <label className="block text-gray-700">Student ID:</label>
            <input
              type="text"
              placeholder="Enter Student ID"
              className="w-full p-2 border border-gray-300 rounded"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-2 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" /> Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
