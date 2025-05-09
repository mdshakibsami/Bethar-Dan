import React, { useState } from 'react';
import { FaSearch, FaFilePdf, FaCalendarAlt, FaFilter } from 'react-icons/fa';

const DispensaryHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Mock data for dispensary history
  const [dispensaryRecords, setDispensaryRecords] = useState([
    { 
      id: 1, 
      patientName: 'John Doe', 
      patientId: 'P12345',
      doctorName: 'Dr. Sarah Johnson',
      dispenseDate: '2025-05-08',
      dispensedBy: 'Jane Smith',
      medications: [
        { name: 'Paracetamol', dosage: '500mg', quantity: 10 },
        { name: 'Amoxicillin', dosage: '250mg', quantity: 21 }
      ]
    },
    { 
      id: 2, 
      patientName: 'Emily Wilson', 
      patientId: 'P23456',
      doctorName: 'Dr. Michael Chen',
      dispenseDate: '2025-05-07',
      dispensedBy: 'Jane Smith',
      medications: [
        { name: 'Ibuprofen', dosage: '400mg', quantity: 9 },
        { name: 'Loratadine', dosage: '10mg', quantity: 14 }
      ]
    },
    { 
      id: 3, 
      patientName: 'Robert Brown', 
      patientId: 'P34567',
      doctorName: 'Dr. Sarah Johnson',
      dispenseDate: '2025-05-05',
      dispensedBy: 'Mark Johnson',
      medications: [
        { name: 'Vitamin C', dosage: '500mg', quantity: 30 },
        { name: 'Calcium + D3', dosage: '600mg', quantity: 30 }
      ]
    },
    { 
      id: 4, 
      patientName: 'Maria Rodriguez', 
      patientId: 'P45678',
      doctorName: 'Dr. James Wilson',
      dispenseDate: '2025-05-02',
      dispensedBy: 'Jane Smith',
      medications: [
        { name: 'Ciprofloxacin', dosage: '500mg', quantity: 14 },
        { name: 'Prednisone', dosage: '20mg', quantity: 5 }
      ]
    },
    { 
      id: 5, 
      patientName: 'David Lee', 
      patientId: 'P56789',
      doctorName: 'Dr. Sarah Johnson',
      dispenseDate: '2025-04-28',
      dispensedBy: 'Mark Johnson',
      medications: [
        { name: 'Metformin', dosage: '500mg', quantity: 60 },
        { name: 'Atorvastatin', dosage: '10mg', quantity: 30 }
      ]
    },
  ]);

  // Date filter options
  const dateFilterOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'custom', label: 'Custom Range' }
  ];

  // Filter records based on search term and date filter
  const filteredRecords = dispensaryRecords.filter(record => {
    // Search filter
    const matchesSearch = 
      record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.dispensedBy.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Date filter
    let matchesDate = true;
    const recordDate = new Date(record.dispenseDate);
    const today = new Date();
    
    if (dateFilter === 'today') {
      matchesDate = recordDate.toDateString() === today.toDateString();
    } else if (dateFilter === 'week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      matchesDate = recordDate >= oneWeekAgo;
    } else if (dateFilter === 'month') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      matchesDate = recordDate >= oneMonthAgo;
    } else if (dateFilter === 'custom' && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59); // Include the entire end day
      matchesDate = recordDate >= start && recordDate <= end;
    }
    
    return matchesSearch && matchesDate;
  });

  // Handle exporting to PDF
  const handleExportPDF = () => {
    alert('PDF export functionality would be implemented here');
  };

  // Calculate total medications dispensed
  const calculateTotalMeds = () => {
    return filteredRecords.reduce((total, record) => {
      return total + record.medications.reduce((medTotal, med) => medTotal + med.quantity, 0);
    }, 0);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dispensary History</h2>
        <button 
          onClick={handleExportPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
        >
          <FaFilePdf className="mr-2" /> Export Report
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search filter */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by patient, ID, doctor, or dispenser..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          {/* Date filter */}
          <div className="md:w-1/4">
            <div className="relative">
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                {dateFilterOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
              <FaFilter className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Custom date range selector - only show when custom range is selected */}
        {dateFilter === 'custom' && (
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-500 text-sm uppercase font-semibold">Total Records</p>
          <p className="text-2xl font-bold">{filteredRecords.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-500 text-sm uppercase font-semibold">Total Medications</p>
          <p className="text-2xl font-bold">{calculateTotalMeds()}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-purple-500 text-sm uppercase font-semibold">Date Range</p>
          <p className="text-md font-medium">
            {dateFilter === 'custom' && startDate && endDate 
              ? `${startDate} to ${endDate}` 
              : dateFilterOptions.find(option => option.value === dateFilter)?.label
            }
          </p>
        </div>
      </div>

      {/* Dispensary Records Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left">Patient</th>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Doctor</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Dispensed By</th>
              <th className="py-3 px-4 text-left">Medications</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map(record => (
              <tr key={record.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{record.patientName}</td>
                <td className="py-3 px-4">{record.patientId}</td>
                <td className="py-3 px-4">{record.doctorName}</td>
                <td className="py-3 px-4">{record.dispenseDate}</td>
                <td className="py-3 px-4">{record.dispensedBy}</td>
                <td className="py-3 px-4">
                  <div className="text-sm">
                    {record.medications.map((med, index) => (
                      <div key={index} className="mb-1 last:mb-0">
                        {med.name} ({med.dosage}) - {med.quantity} units
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Results Message */}
      {filteredRecords.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No records found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default DispensaryHistory;