import React, { useEffect, useState } from 'react';

const demoPrescriptions = [
  {
    _id: '1',
    roll: '22102004',
    date: '2024-05-01T10:00:00Z',
    doctorName: 'Dr. A. Rahman',
    diagnosis: 'Fever, Cough',
    medicines: ['Paracetamol 500mg', 'Cough Syrup'],
    advice: 'Rest and drink fluids',
  },
  {
    _id: '2',
    roll: '2021002',
    date: '2024-04-15T14:30:00Z',
    doctorName: 'Dr. S. Akter',
    diagnosis: 'Headache',
    medicines: ['Ibuprofen 200mg'],
    advice: 'Avoid screen time',
  },
  {
    _id: '3',
    roll: '2021001',
    date: '2024-03-20T09:15:00Z',
    doctorName: 'Dr. M. Karim',
    diagnosis: 'Allergy',
    medicines: ['Cetirizine 10mg'],
    advice: 'Avoid dust',
  },
];

const PescriptionHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setPrescriptions(demoPrescriptions);
      setFiltered(demoPrescriptions);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!search) {
      setFiltered(prescriptions);
    } else {
      setFiltered(
        prescriptions.filter(p =>
          p.roll && p.roll.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, prescriptions]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Prescription History (Demo)</h2>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by roll number..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={4} className="text-center p-4">No prescriptions found</td></tr>
              ) : (
                filtered.map(p => (
                  <tr key={p._id}>
                    <td>{p.roll}</td>
                    <td>{new Date(p.date).toLocaleDateString()}</td>
                    <td>{p.doctorName || '-'}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => setSelected(p)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* Details Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative print:w-full print:max-w-full print:shadow-none print:rounded-none" id="print-area">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 print:hidden"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2">Prescription Details</h3>
            <div className="mb-2"><b>Roll:</b> {selected.roll}</div>
            <div className="mb-2"><b>Date:</b> {new Date(selected.date).toLocaleString()}</div>
            <div className="mb-2"><b>Doctor:</b> {selected.doctorName || '-'}</div>
            <div className="mb-2"><b>Diagnosis:</b> {selected.diagnosis || '-'}</div>
            <div className="mb-2"><b>Medicines:</b>
              <ul className="list-disc ml-6">
                {(selected.medicines || []).map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2"><b>Advice:</b> {selected.advice || '-'}</div>
            <div className="mt-4 flex justify-end print:hidden">
              <button
                className="btn btn-outline btn-success"
                onClick={() => {
                  const printContents = document.getElementById('print-area').innerHTML;
                  const originalContents = document.body.innerHTML;
                  document.body.innerHTML = printContents;
                  window.print();
                  document.body.innerHTML = originalContents;
                  window.location.reload();
                }}
              >
                Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PescriptionHistory;
