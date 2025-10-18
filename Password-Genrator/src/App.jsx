import React, { useState, useCallback, useEffect, useRef } from 'react';

export default function App() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeChars, setIncludeChars] = useState(true);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) base += '0123456789';
    if (includeChars) base += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += base[Math.floor(Math.random() * base.length)];
    }
    setPassword(pass);
  }, [length, includeNumbers, includeChars]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    passwordRef.current.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0cb156ff',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffffff',
          borderRadius: '30px',
          padding: '50px',
          width: '300px',
          maxWidth: '90%',
          boxShadow: '0 4px 12px rgba(62, 16, 215, 0.97)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <h1 style={{ margin: 0, color: '#333', fontSize: '24px', textAlign: 'center' }}>
          Random Password Generator
        </h1>

        <div style={{ display: 'flex', width: '100%' }}>
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            style={{
              flexGrow: 1,
              fontSize: '16px',
              padding: '10px',
              borderRadius: '6px 0 0 6px',
              border: '1px solid #ccc',
              textAlign: 'center',
              outline: 'none',
              color: '#333',
              backgroundColor: '#fafafa',
            }}
          />
          <button
            onClick={copyToClipboard}
            style={{
              padding: '10px 14px',
              backgroundColor: '#4caf50',
              border: 'none',
              borderRadius: '0 6px 6px 0',
              cursor: 'pointer',
              color: '#fff',
              fontWeight: 'bold',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#4caf50')}
          >
            Copy
          </button>
        </div>

        <div style={{ width: '100%' }}>
          <label style={{ color: '#333', fontWeight: 'bold' }}>
            Password Length: {length}
          </label>
          <input
            type="range"
            min="8"
            max="50"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            style={{ width: '100%', marginTop: '5px' }}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <label style={{ color: '#333', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(prev => !prev)}
              style={{ marginRight: '6px' }}
            />
            Include Numbers
          </label>

          <label style={{ color: '#333', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars(prev => !prev)}
              style={{ marginRight: '6px' }}
            />
            Include Special Characters
          </label>
        </div>

        <button
          onClick={generatePassword}
          style={{
            padding: '12px 35px',
            backgroundColor: '#2196f3',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1e88e5';
            e.target.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2196f3';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
