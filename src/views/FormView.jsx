import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles

function FormView({
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
  handleSubmit,
}) {
  return (
    <div style={{ margin: '2rem' }}>
      <h2>User Data Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
      >
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
        <div>

        <ReactQuill
          value={summary}
          onChange={setSummary}
          placeholder="Write your summary here"
          style={{
            marginBottom: '10px',
             
            width:'100%',
            height: '100px', // You can adjust this
          }}
          /> <br /><br />
          </div>
          
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            position:'relative'
          }}
        >
          Save Data
        </button>
      </form>
    </div>
  );
}

export default FormView;
