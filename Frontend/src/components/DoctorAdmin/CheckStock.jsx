import { useState } from 'react';

const CheckStock = () => {
    // Demo data for medicines
    const [medicines, setMedicines] = useState([
        {
            id: 1,
            name: 'Napa Extra',
            genericName: 'Paracetamol + Caffeine',
            image: 'https://medex.com.bd/storage/images/packaging/napa-extra-500-mg-tablet-46174620412-i1-S6ON0Cv84Db8DclIKRNt.webp',
            quantity: 150,
            thresholdPoint: 50,
        },
        {
            id: 2,
            name: 'Ace',
            genericName: 'Paracetamol',
            image: 'https://www.squarepharma.com.bd/products/Ace-Plus_l.jpg',
            quantity: 200,
            thresholdPoint: 100,
        },
        {
            id: 3,
            name: 'Sergel',
            genericName: 'Esomeprazole',
            image: 'https://medex.com.bd/storage/images/packaging/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg',
            quantity: 45,
            thresholdPoint: 50,
        },
        {
            id: 4,
            name: 'Seclo',
            genericName: 'Omeprazole',
            image: 'https://medex.com.bd/storage/images/packaging/seclo-20-mg-capsule-86285846171-i1-lUXWj4eP5tZMT3MfhLGJ.jpg',
            quantity: 30,
            thresholdPoint: 40,
        },
        {
            id: 5,
            name: 'Monas',
            genericName: 'Montelukast',
            image: 'https://www.acmeglobal.com/wp-content/uploads/2025/03/2monas-4-oft-4mg.png',
            quantity: 0,
            thresholdPoint: 20,
        },
    ]);

    const getStatusBadge = (quantity, thresholdPoint) => {
        if (quantity === 0) {
            return <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Out of Stock</span>;
        }
        if (quantity <= thresholdPoint) {
            return <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">Low Stock</span>;
        }
        return <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">In Stock</span>;
    };

    const getQuantityDisplay = (quantity, thresholdPoint) => {
        if (quantity === 0) {
            return <span className="font-semibold text-red-600">0</span>;
        }
        if (quantity <= thresholdPoint) {
            return <span className="font-semibold text-amber-600">{quantity}</span>;
        }
        return <span className="font-semibold text-emerald-600">{quantity}</span>;
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
            <div className="mb-8 border-b border-gray-200 pb-4">
                <h1 className="text-2xl font-bold text-gray-800">Pharmacy Inventory Management</h1>
                <p className="text-gray-500 mt-1">Monitor and manage medicine stock levels</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
                <h2 className="text-blue-800 text-sm font-semibold mb-2">Stock Status Legend</h2>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">In Stock</span>
                        <span className="text-sm text-gray-600">Adequate inventory</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">Low Stock</span>
                        <span className="text-sm text-gray-600">Below threshold point</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Out of Stock</span>
                        <span className="text-sm text-gray-600">Immediate reorder required</span>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                <table className="table-auto w-full">
                    <thead className="bg-gray-50 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Medicine Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Generic Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Image</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Quantity</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Threshold</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {medicines.map((medicine) => (
                            <tr
                                key={medicine.id}
                                className={
                                    medicine.quantity === 0
                                        ? 'bg-red-50'
                                        : medicine.quantity <= medicine.thresholdPoint
                                            ? 'bg-amber-50'
                                            : 'hover:bg-gray-50'
                                }
                            >
                                <td className="px-4 py-4 text-sm font-medium text-gray-800">{medicine.name}</td>
                                <td className="px-4 py-4 text-sm text-gray-600">{medicine.genericName}</td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 rounded shadow overflow-hidden border border-gray-200">
                                            <img
                                                src={medicine.image}
                                                alt={medicine.name}
                                                className="h-full w-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = '/api/placeholder/40/40';
                                                }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm">{getQuantityDisplay(medicine.quantity, medicine.thresholdPoint)}</td>
                                <td className="px-4 py-4 text-sm text-gray-600">{medicine.thresholdPoint}</td>
                                <td className="px-4 py-4">{getStatusBadge(medicine.quantity, medicine.thresholdPoint)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">Showing 1 to 5 of 5 entries</div>
                <div className="flex space-x-1">
                    <button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 text-sm disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 rounded border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 text-sm">1</button>
                    <button className="px-3 py-1 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 text-sm disabled:opacity-50" disabled>Next</button>
                </div>
            </div>
        </div>
    );
};

export default CheckStock;