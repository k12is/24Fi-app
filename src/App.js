import React, { useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setWalletAddress(address);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div style={{ 
      background: 'linear-gradient(180deg, #0f0f0f 0%, #000000 100%)', 
      height: '100vh', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 20px'
    }}>

      {/* Background glow effect */}
      <div style={{ 
        position: 'absolute', 
        width: '500px', 
        height: '500px', 
        borderRadius: '50%', 
        background: 'rgba(0,255,204,0.1)', 
        top: '-100px', 
        left: '-100px', 
        filter: 'blur(100px)', 
        zIndex: 0 
      }}></div>

      {/* Top-left 24Fi branding */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '30px', 
        color: '#ffffff', 
        fontSize: '16px', 
        fontWeight: '400', 
        letterSpacing: '1px', 
        zIndex: 2
      }}>
        24<span style={{ fontWeight: '700' }}>Fi</span>
      </div>

      {/* Main Title */}
      <h1 style={{ 
        fontSize: '4.5rem', 
        fontWeight: '800', 
        background: 'linear-gradient(90deg, #ffffff, #cccccc)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        maxWidth: '900px',
        lineHeight: '1.1',
        zIndex: 2,
        marginBottom: '10px'
      }}>
        Low-Interest Lending
      </h1>

      {/* Wallet Connect Button */}
      <button onClick={connectWallet} style={{ 
        padding: '16px 40px', 
        marginTop: '20px', 
        background: 'linear-gradient(90deg, #ffffff, #dddddd)', 
        border: 'none', 
        borderRadius: '10px', 
        fontSize: '18px', 
        fontWeight: '600',
        color: '#000',
        cursor: 'pointer',
        boxShadow: '0 0 15px rgba(255,255,255,0.1)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 2
      }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        Connect to View Loans
      </button>

      {showModal && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#111',
          padding: '30px 40px',
          borderRadius: '12px',
          border: '1px solid #00ffcc',
          boxShadow: '0 0 30px rgba(0,255,204,0.3)',
          color: '#00ffcc',
          fontSize: '16px',
          zIndex: 10,
        }}>
          Wallet Connected!<br/>
          <span style={{ fontSize: '12px', color: '#aaa' }}>{walletAddress}</span>
        </div>
      )}
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', padding: '40px', background: '#111', height: '100vh' }}>
      <h2>Welcome to the 24Fi Dashboard</h2>
      <p style={{ marginTop: '20px' }}>
        🧪 Sample loan listings will appear here soon...
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

