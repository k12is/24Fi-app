import React from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

function App() {
  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    console.log("Wallet connected:", await signer.getAddress());
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
      fontFamily: 'Helvetica, sans-serif',
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

      {/* Top-right 24Fi label */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        right: '30px', 
        color: '#fff', 
        fontSize: '14px', 
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        fontWeight: '700', 
        opacity: 0.9,
        zIndex: 2
      }}>24Fi</div>

      {/* Main Title */}
      <h1 style={{ 
        fontSize: '5rem', 
        fontWeight: '900', 
        letterSpacing: '1px',
        background: 'linear-gradient(90deg, #ffffff, #00ffee)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        maxWidth: '900px',
        lineHeight: '1.1',
        zIndex: 2
      }}>
        Smarter DeFi Lending Starts Here
      </h1>

      {/* Subheadline */}
      <p style={{ 
        color: '#ccc', 
        fontSize: '1.2rem', 
        marginTop: '20px', 
        maxWidth: '700px', 
        textAlign: 'center',
        zIndex: 2
      }}>
        Powered by Web3. Built for real-world credit. Launch with confidence.
      </p>

      {/* Wallet Connect Button */}
      <button onClick={connectWallet} style={{ 
        padding: '16px 40px', 
        marginTop: '40px', 
        background: 'linear-gradient(90deg, #ffffff, #00ff99)', 
        border: 'none', 
        borderRadius: '12px', 
        fontSize: '18px', 
        fontWeight: '600',
        color: '#000',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(0,255,153,0.2)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 2
      }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default App;

