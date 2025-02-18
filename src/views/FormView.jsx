import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db, collection, addDoc } from '../firebase'; // Import Firestore functions
import DataTable from './DataTable';

function FormView() {
  // State for form fields
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [add,setAdd] = useState(0);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Save data to Firestore
      await addDoc(collection(db, 'users'), {
        name,
        address,
        email,
        phone,
        summary,
        createdAt: new Date(),
      });

      setMessage('Data saved successfully! ✅');
      
      // Clear form fields
      setName('');
      setAddress('');
      setEmail('');
      setPhone('');
      setSummary('');

      setAdd((add)=>add+1);
    } catch (error) {
      console.error('Error saving data:', error);
      setMessage('Error saving data ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: '2rem',display:'flex' }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '300px',padding:'5px' }}
        >
        <h2>User Data Form</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ marginBottom: '10px', padding: '10px' }}
        />

        {/* React Quill Text Editor */}
        <div style={{overflowY:'scroll'}}>
          <ReactQuill
            value={summary}
            onChange={setSummary}
            placeholder="Write your summary here"
            style={{
              marginBottom: '10px',
              width: '100%',
              height: '100px',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            position: 'relative',
            top: '25px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Data'}
        </button>

        {/* Success/Error Message */}
        {message && <p style={{ marginTop: '10px', color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
      </form>
      <DataTable add={add}/>
    </div>
  );
}

export default FormView;
