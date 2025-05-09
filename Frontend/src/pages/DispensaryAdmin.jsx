import React, { useState } from 'react';
import { FaBoxOpen, FaHistory, FaPrescriptionBottleAlt, FaClipboardList } from 'react-icons/fa';
import ManageInventory from '../components/DispensaryAdmin/ManageInventory';
import DispenseItems from '../components/DispensaryAdmin/DispenseItems';
import PendingPrescriptions from '../components/DispensaryAdmin/PendingPrescriptions';
import DispensaryHistory from '../components/DispensaryAdmin/DispensaryHistory';

const DispensaryAdmin = () => {
    const [activeTab, setActiveTab] = useState('inventory');

    // Menu items for the sidebar
    const menuItems = [
        { id: 'inventory', label: 'Manage Inventory', icon: <FaBoxOpen /> },
        { id: 'dispense', label: 'Dispense Items', icon: <FaPrescriptionBottleAlt /> },
        { id: 'prescriptions', label: 'Pending Prescriptions', icon: <FaClipboardList /> },
        { id: 'history', label: 'Dispensary History', icon: <FaHistory /> }
    ];

    // Render the content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'inventory':
                return <ManageInventory />;
            case 'dispense':
                return <DispenseItems />;
            case 'prescriptions':
                return <PendingPrescriptions />;
            case 'history':
                return <DispensaryHistory />;
            default:
                return <ManageInventory />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-center">Dispensary Panel</h2>
                </div>
                <nav className="mt-4">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} className="mb-2">
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === item.id
                                            ? 'bg-green-500 text-white'
                                            : 'text-gray-700 hover:bg-green-100'
                                        }`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Main content area */}
            <div className="flex-1 overflow-auto">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center mb-6">Dispensary Admin Panel</h1>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DispensaryAdmin;