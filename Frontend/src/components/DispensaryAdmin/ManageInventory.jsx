import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ManageInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    stock: '',
    unit: 'tablets',
    expiryDate: '',
    threshold: '10'
  });
  
  // Mock data for inventory items
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Paracetamol', category: 'Pain Relief', stock: 150, unit: 'tablets', expiryDate: '2025-12-31', threshold: 20 },
    { id: 2, name: 'Amoxicillin', category: 'Antibiotic', stock: 80, unit: 'capsules', expiryDate: '2025-10-15', threshold: 15 },
    { id: 3, name: 'Bandages', category: 'First Aid', stock: 45, unit: 'pieces', expiryDate: '2026-05-20', threshold: 10 },
    { id: 4, name: 'Vitamin C', category: 'Supplements', stock: 200, unit: 'tablets', expiryDate: '2025-08-10', threshold: 30 },
    { id: 5, name: 'Ibuprofen', category: 'Pain Relief', stock: 120, unit: 'tablets', expiryDate: '2025-11-20', threshold: 25 },
  ]);

  // Categories for dropdown
  const categories = ['Pain Relief', 'Antibiotic', 'First Aid', 'Supplements', 'Antihistamine', 'Other'];
  
  // Units for dropdown
  const units = ['tablets', 'capsules', 'bottles', 'pieces', 'ml', 'grams'];

  // Filter items based on search term
  const filteredItems = inventoryItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding new item
  const handleAddItem = () => {
    const newId = inventoryItems.length > 0 ? Math.max(...inventoryItems.map(item => item.id)) + 1 : 1;
    setInventoryItems([...inventoryItems, { id: newId, ...newItem }]);
    setNewItem({ name: '', category: '', stock: '', unit: 'tablets', expiryDate: '', threshold: '10' });
    setShowAddModal(false);
  };

  // Handle deleting an item
  const handleDeleteItem = (id) => {
    setInventoryItems(inventoryItems.filter(item => item.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inventory Management</h2>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600"
        >
          <FaPlus className="mr-2" /> Add New Item
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or category..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Unit</th>
              <th className="py-3 px-4 text-left">Expiry Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4">{item.stock}</td>
                <td className="py-3 px-4">{item.unit}</td>
                <td className="py-3 px-4">{item.expiryDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.stock <= item.threshold / 2 
                      ? 'bg-red-100 text-red-800' 
                      : item.stock <= item.threshold 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                  }`}>
                    {item.stock <= item.threshold / 2 
                      ? 'Critical' 
                      : item.stock <= item.threshold 
                        ? 'Low' 
                        : 'In Stock'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-3">
                    <FaEdit />
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Add New Item</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-lg"
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                placeholder="Medicine name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
              <select 
                className="w-full px-3 py-2 border rounded-lg"
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newItem.stock}
                  onChange={(e) => setNewItem({...newItem, stock: e.target.value})}
                  placeholder="Quantity"
                  min="0"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Unit</label>
                <select 
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newItem.unit}
                  onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
                >
                  {units.map((unit, index) => (
                    <option key={index} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newItem.expiryDate}
                  onChange={(e) => setNewItem({...newItem, expiryDate: e.target.value})}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Threshold</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border rounded-lg"
                  value={newItem.threshold}
                  onChange={(e) => setNewItem({...newItem, threshold: e.target.value})}
                  placeholder="Low stock alert"
                  min="0"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button 
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageInventory;