import React, { useState } from 'react';
import { FaSearch, FaClipboardCheck, FaInfoCircle } from 'react-icons/fa';

const DispenseItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Mock data for prescriptions ready to be dispensed
  const [prescriptions, setPrescriptions] = useState([
    { 
      id: 1, 
      patientName: 'John Doe', 
      patientId: 'P12345',
      doctorName: 'Dr. Sarah Johnson',
      date: '2025-05-08',
      status: 'pending',
      medications: [
        { name: 'Paracetamol', dosage: '500mg', frequency: 'Twice daily', duration: '5 days', quantity: 10 },
        { name: 'Amoxicillin', dosage: '250mg', frequency: 'Three times daily', duration: '7 days', quantity: 21 }
      ]
    },
    { 
      id: 2, 
      patientName: 'Emily Wilson', 
      patientId: 'P23456',
      doctorName: 'Dr. Michael Chen',
      date: '2025-05-08',
      status: 'pending',
      medications: [
        { name: 'Ibuprofen', dosage: '400mg', frequency: 'Three times daily', duration: '3 days', quantity: 9 },
        { name: 'Loratadine', dosage: '10mg', frequency: 'Once daily', duration: '14 days', quantity: 14 }
      ]
    },
    { 
      id: 3, 
      patientName: 'Robert Brown', 
      patientId: 'P34567',
      doctorName: 'Dr. Sarah Johnson',
      date: '2025-05-07',
      status: 'pending',
      medications: [
        { name: 'Vitamin C', dosage: '500mg', frequency: 'Once daily', duration: '30 days', quantity: 30 },
        { name: 'Calcium + D3', dosage: '600mg', frequency: 'Once daily', duration: '30 days', quantity: 30 }
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

  // Handle dispensing a prescription
  const handleDispensePrescription = (id) => {
    setPrescriptions(prescriptions.map(prescription => 
      prescription.id === id 
        ? { ...prescription, status: 'dispensed' } 
        : prescription
    ));
    setShowDetailsModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dispense Medications</h2>
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
                    prescription.status === 'dispensed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {prescription.status === 'dispensed' ? 'Dispensed' : 'Pending'}
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

            <div className="mb-4">
              <h4 className="font-bold mb-2">Medications</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                {selectedPrescription.medications.map((medication, index) => (
                  <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between">
                      <h5 className="font-semibold">{medication.name}</h5>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {medication.quantity} units
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {medication.dosage} - {medication.frequency} for {medication.duration}
                    </p>
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
              {selectedPrescription.status !== 'dispensed' && (
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
                  onClick={() => handleDispensePrescription(selectedPrescription.id)}
                >
                  <FaClipboardCheck className="mr-2" /> Dispense Prescription
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DispenseItems;