'use client'

import React, { useState } from 'react';
import createSubUser from '../actions/create-sub-user'; 
import toast from 'react-hot-toast';

const TestingEmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',  // Initialize with an empty string
        address: '',
        // role: ''
      });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        
      await createSubUser(formData);  // Call the createSubUser function with formData
      toast.success('Tạo nhân viên thành công!');
    } catch (error: any) {
        toast.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <input type="number" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" />
      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestingEmployeeForm;