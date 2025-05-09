import React, { useState } from 'react';
import CreatePrescription from '../components/DoctorAdmin/CreatePrescription';
import CheckStock from '../components/DoctorAdmin/CheckStock';
import PrescriptionHistory from '../components/DoctorAdmin/PescriptionHistory';
import { FaNotesMedical, FaHistory, FaClinicMedical } from 'react-icons/fa';

const DoctorAdmin = () => {
    const [activeTab, setActiveTab] = useState('prescription');

    // Menu items for the sidebar
    const menuItems = [
        { id: 'prescription', label: 'Create Prescription', icon: <FaNotesMedical /> },
        { id: 'history', label: 'Old Prescriptions', icon: <FaHistory /> },
        { id: 'dispensary', label: 'Dispensary Check', icon: <FaClinicMedical /> }
    ];

    // Render the content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'prescription':
                return <CreatePrescription />;
            case 'history':
                return <PrescriptionHistory />;
            case 'dispensary':
                return <CheckStock />;
            default:
                return <CreatePrescription />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-center">Doctor Panel</h2>
                </div>
                <nav className="mt-4">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} className="mb-2">
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === item.id
                                            ? 'bg-blue-500 text-white'
                                            : 'text-gray-700 hover:bg-blue-100'
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
                    <h1 className="text-3xl font-bold text-center mb-6">Doctor Admin Panel</h1>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAdmin;