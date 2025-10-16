// src/components/ContentArea.tsx
import React from 'react';

interface ContentAreaProps {
    activeTab: string;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab }) => {
    return (
        <main className="content-area">
            {activeTab === 'Dashboard' ? (
                // Content specific to the initial dashboard view
                <div className="dashboard-welcome">
                    <div className="target-icon"></div>
                    <h2>Welcome to Career Lens AI</h2>
                    <p>
                        Upload your resume and complete your profile to get started with
                        personalized career insights and recommendations.
                    </p>
                </div>
            ) : (
                // Placeholder content for all other tabs
                <div className="tab-placeholder">
                    <h3>{activeTab} Content Coming Soon!</h3>
                    <p>This is where the content for the {activeTab} tab will appear.</p>
                </div>
            )}
        </main>
    );
};

export default ContentArea;