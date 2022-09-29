import React, { useEffect } from 'react'
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const testScan = async () => {
      await BarcodeScanner.checkPermission({ force: true });

      // make background of WebView transparent
      // note: if you are using ionic this might not be enough, check below
      BarcodeScanner.hideBackground();

      await BarcodeScanner.startScan(); // start scanning and wait for a result
    }

    setTimeout(testScan, 3000);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;