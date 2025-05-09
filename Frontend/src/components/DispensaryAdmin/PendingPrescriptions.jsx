import React, { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';

const PendingPrescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Mock data for prescriptions
  const [prescriptions, setPrescriptions] = useState([
    { 
      id: 1, 
      patientName: 'Maria Rodriguez', 
      patientId: 'P45678',
      doctorName: 'Dr. James Wilson',
      date: '2025-05-09',
      status: 'new',
      notes: 'Patient has penicillin allergy',
      medications: [
        { name: 'Ciprofloxacin', dosage: '500mg', frequency: 'Twice daily', duration: '7 days', quantity: 14 },
        { name: 'Prednisone', dosage: '20mg', frequency: 'Once daily', duration: '5 days', quantity: 5, instructions: 'Take with food' }
      ]
    },
    { 
      id: 2, 
      patientName: 'David Lee', 
      patientId: 'P56789',
      doctorName: 'Dr. Sarah Johnson',
      date: '2025-05-09',
      status: 'new',
      medications: [
        { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', duration: '30 days', quantity: 60 },
        { name: 'Atorvastatin', dosage: '10mg', frequency: 'Once daily', duration: '30 days', quantity: 30 }
      ]
    },
    { 
      id: 3, 
      patientName: 'Linda Garcia', 
      patientId: 'P67890',
      doctorName: 'Dr. Michael Chen',
      date: '2025-05-08',
      status: 'new',
      notes: 'Patient has difficulty swallowing tablets',
      medications: [
        { name: 'Amoxicillin suspension', dosage: '250mg/5ml', frequency: 'Three times daily', duration: '10 days', quantity: 1, instructions: '1 bottle (150ml)' },
        { name: 'Ibuprofen suspension', dosage: '100mg/5ml', frequency: 'As needed for pain', duration: 'PRN', quantity: 1, instructions: '1 bottle (100ml)' }
      ]
    },
  ]);

  // Filter prescriptions based on search term
  const filteredPrescriptions = prescriptions.filter(prescription => 
    prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle viewing prescription details
  const handleViewDetails = (prescription) => {
    setSelectedPrescription(prescription);
    setShowDetailsModal(true);
  };

  // Handle approving a prescription - moves it to ready for dispensing
  const handleApprovePrescription = (id) => {
    setPrescriptions(prescriptions.map(prescription => 
      prescription.id === id 
        ? { ...prescription, status: 'approved' } 
        : prescription
    ));
    setShowDetailsModal(false);
  };

  // Handle rejecting a prescription
  const handleRejectPrescription = (id) => {
    setPrescriptions(prescriptions.map(prescription => 
      prescription.id === id 
        ? { ...prescription, status: 'rejected' } 
        : prescription
    ));
    setShowDetailsModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Pending Prescriptions</h2>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by patient name, ID, or doctor..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Prescriptions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left">Patient Name</th>
              <th className="py-3 px-4 text-left">Patient ID</th>
              <th className="py-3 px-4 text-left">Doctor</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Medications</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrescriptions.map(prescription => (
              <tr key={prescription.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{prescription.patientName}</td>
                <td className="py-3 px-4">{prescription.patientId}</td>
                <td className="py-3 px-4">{prescription.doctorName}</td>
                <td className="py-3 px-4">{prescription.date}</td>
                <td className="py-3 px-4">{prescription.medications.length} items</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    prescription.status === 'approved' 
                      ? 'bg-green-100 text-green-800' 
                      : prescription.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {prescription.status === 'approved' 
                      ? 'Approved' 
                      : prescription.status === 'rejected'
                        ? 'Rejected'
                        : 'New'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button 
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleViewDetails(prescription)}
                  >
                    <FaInfoCircle /> <span className="ml-1">Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Prescription Details Modal */}
      {showDetailsModal && selectedPrescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Prescription Details</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowDetailsModal(false)}
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600">Patient Name:</p>
                <p className="font-semibold">{selectedPrescription.patientName}</p>
              </div>
              <div>
                <p className="text-gray-600">Patient ID:</p>
                <p className="font-semibold">{selectedPrescription.patientId}</p>
              </div>
              <div>
                <p className="text-gray-600">Doctor:</p>
                <p className="font-semibold">{selectedPrescription.doctorName}</p>
              </div>
              <div>
                <p className="text-gray-600">Date:</p>
                <p className="font-semibold">{selectedPrescription.date}</p>
              </div>
            </div>

            {selectedPrescription.notes && (
              <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm font-semibold text-yellow-800">Notes:</p>
                <p className="text-sm text-yellow-800">{selectedPrescription.notes}</p>
              </div>
            )}

            <div className="mb-4">
              <h4 className="font-bold mb-2">Medications</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                {selectedPrescription.medications.map((medication, index) => (
                  <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between">
                      <h5 className="font-semibold">{medication.name}</h5>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {medication.quantity} {medication.quantity === 1 ? 'unit' : 'units'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {medication.dosage} - {medication.frequency} for {medication.duration}
                    </p>
                    {medication.instructions && (
                      <p className="text-sm text-gray-600 italic mt-1">
                        {medication.instructions}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button 
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setShowDetailsModal(false)}
              >
                Close
              </button>
              {selectedPrescription.status === 'new' && (
                <>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                    onClick={() => handleRejectPrescription(selectedPrescription.id)}
                  >
                    <FaTimes className="mr-2" /> Reject
                  </button>
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
                    onClick={() => handleApprovePrescription(selectedPrescription.id)}
                  >
                    <FaCheck className="mr-2" /> Approve
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingPrescriptions;