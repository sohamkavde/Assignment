import React, { useEffect, useState } from 'react';
import { generateUserId } from '../models/FormModel';

const useFormController = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [userId, setUserId] = useState(generateUserId());

  // Save data to localStorage when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, address, email, phone, summary, userId };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('User data saved!');
  };

  // Detect unsaved changes
  const handleBeforeUnload = (e) => {
    if (name || address || email || phone || summary) {
      const confirmationMessage = 'You have unsaved changes! Are you sure you want to leave?';
      (e || window.event).returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage; // For Chrome
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [name, address, email, phone, summary]);

  return {
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    summary,
    setSummary,
    userId,
    setUserId,
    handleSubmit,
    handleBeforeUnload,
  };
};

export default useFormController;
