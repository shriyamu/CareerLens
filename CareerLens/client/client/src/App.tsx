// client/src/App.tsx - FINAL CORRECT VERSION
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import './styles.css'; // Imports the custom CSS file

const App: React.FC = () => {
    // 1. State to track which tab is currently active
    const [activeTab, setActiveTab] = useState<string>('Dashboard');

    // State for testing backend connection
    const [backendMessage, setBackendMessage] = useState<string>('Connecting...');

    // Effect to test backend connection, runs once on component mount
    useEffect(() => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => setBackendMessage(data.message))
            .catch(error => setBackendMessage(`Error connecting: Server is offline.`));
    }, []); // The empty array [] ensures this runs only once

    return (
        <div className="app-container">
            <Header />

            {/* Backend Status Display */}
            <div style={{ padding: '10px', backgroundColor: '#fff', textAlign: 'center', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
                **Backend Status:** {backendMessage}
            </div>

            <div className="main-content">
                {/* Pass the active tab and the function to change it to the Sidebar */}
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Pass the active tab to the ContentArea to determine content */}
                <ContentArea activeTab={activeTab} />
            </div>
        </div>
    );
};

export default App;