
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
    <div style={{ backgroundColor: '#000', height: '100vh', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ background: 'linear-gradient(90deg, #ffffff, #bfff00)', WebkitBackgroundClip: 'text', color: 'transparent' }}>24Fi Lending</h1>
      <button onClick={connectWallet} style={{ padding: '12px 24px', marginTop: '20px', background: 'linear-gradient(90deg, #ffffff, #bfff00)', border: 'none', borderRadius: '8px', fontSize: '16px' }}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
