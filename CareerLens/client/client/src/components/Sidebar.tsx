// src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { name: 'Dashboard', icon: '📊' }, // These icons are just emojis for now
        { name: 'Profile & Resume', icon: '👤' },
        { name: 'Job Matches', icon: '💼' },
        { name: 'Skill Gaps', icon: '🎯' },
        { name: 'Learning Path', icon: '📚' },
    ];

    return (
        <nav className="sidebar">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    className={`sidebar-tab ${activeTab === tab.name ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.name)}
                >
                    <span className="tab-icon">{tab.icon}</span>
                    {tab.name}
                </button>
            ))}
        </nav>
    );
};

export default Sidebar;