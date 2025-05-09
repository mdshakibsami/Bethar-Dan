import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const CreatePrescription = () => {
    // Demo medicines array that will later come from database
    const demoMedicines = [
        { id: '1', name: 'Paracetamol', timesPerDay: 3, days: 5 },
        { id: '2', name: 'Amoxicillin', timesPerDay: 2, days: 7 },
        { id: '3', name: 'Ibuprofen', timesPerDay: 1, days: 3 },
        { id: '4', name: 'Cetirizine', timesPerDay: 1, days: 5 },
        { id: '5', name: 'Omeprazole', timesPerDay: 2, days: 14 }
    ];
    
    // Setup React Hook Form
    const {
        register, 
        control, 
        handleSubmit, 
        setValue, 
        formState: { errors } 
    } = useForm({
        defaultValues: {
            studentName: '',
            studentRoll: '',
            diseaseDescription: '',
            medicines: [{ name: '', timesPerDay: 1, days: 1 }]
        }
    });
    
    // Setup field array for dynamic medicine fields
    const { fields, append, remove } = useFieldArray({
        control,
        name: "medicines"
    });
    
    // State for tracking which medicine input has active suggestions
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);
    
    // Filter suggestions based on input
    const getSuggestions = (input) => {
        if (!input) return [];
        
        const inputValue = input.toLowerCase();
        return demoMedicines.filter(med => 
            med.name.toLowerCase().includes(inputValue)
        );
    };
    
    // Handle suggestion selection
    const handleSuggestionSelect = (index, suggestion) => {
        setValue(`medicines.${index}.name`, suggestion.name);
        setValue(`medicines.${index}.timesPerDay`, suggestion.timesPerDay);
        setValue(`medicines.${index}.days`, suggestion.days);
        setActiveSuggestionIndex(null);
    };
    
    // Handle form submission
    const onSubmit = (data) => {
        console.log('Prescription Data:', data);
        // Here you would normally send the data to an API
        alert('Prescription saved successfully!');
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Create Prescription</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                        <label className="block font-medium">Student Name:</label>
                        <input
                            {...register("studentName", { required: "Student name is required" })}
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.studentName && (
                            <p className="text-red-500 text-sm">{errors.studentName.message}</p>
                        )}
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block font-medium">Student Roll:</label>
                        <input
                            {...register("studentRoll", { required: "Student roll is required" })}
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.studentRoll && (
                            <p className="text-red-500 text-sm">{errors.studentRoll.message}</p>
                        )}
                    </div>
                </div>
                
                <div className="space-y-2 mb-4">
                    <label className="block font-medium">Disease Description:</label>
                    <textarea
                        {...register("diseaseDescription", { required: "Disease description is required" })}
                        className="w-full border border-gray-300 rounded-md p-2 min-h-[100px]"
                        placeholder="Describe the symptoms and diagnosis..."
                    />
                    {errors.diseaseDescription && (
                        <p className="text-red-500 text-sm">{errors.diseaseDescription.message}</p>
                    )}
                </div>
                
                {/* Medicine List Headers */}
                <div className="bg-gray-100 p-4 rounded-lg mb-2 hidden md:grid md:grid-cols-12 gap-4 font-medium">
                    <div className="md:col-span-4">Medicine</div>
                    <div className="md:col-span-3">Times Per Day</div>
                    <div className="md:col-span-3">Days</div>
                    <div className="md:col-span-2">Action</div>
                </div>
                
                {/* Medicine Fields Array */}
                <div className="space-y-3">
                    {fields.map((field, index) => {
                        // We need to wrap this in a Controller to maintain proper value binding
                        return (
                            <div key={field.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                <div className="md:col-span-4 space-y-2 relative">
                                    <label className="block font-medium md:hidden">Medicine:</label>
                                    <Controller
                                        name={`medicines.${index}.name`}
                                        control={control}
                                        rules={{ required: "Medicine name is required" }}
                                        render={({ field }) => (
                                            <>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    onFocus={() => setActiveSuggestionIndex(index)}
                                                    onBlur={() => setTimeout(() => setActiveSuggestionIndex(null), 200)}
                                                    placeholder="Type medicine name"
                                                    className="w-full border border-gray-300 rounded-md p-2"
                                                />
                                                
                                                {activeSuggestionIndex === index && field.value && (
                                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                                                        {getSuggestions(field.value).map((suggestion) => (
                                                            <div 
                                                                key={suggestion.id}
                                                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                                                onMouseDown={(e) => {
                                                                    e.preventDefault();
                                                                    handleSuggestionSelect(index, suggestion);
                                                                }}
                                                            >
                                                                {suggestion.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    />
                                    
                                    {errors.medicines?.[index]?.name && (
                                        <p className="text-red-500 text-sm">{errors.medicines[index].name.message}</p>
                                    )}
                                </div>
                                
                                <div className="md:col-span-3">
                                    <label className="block font-medium md:hidden">Times Per Day:</label>
                                    <input
                                        {...register(`medicines.${index}.timesPerDay`, {
                                            required: "Required",
                                            min: { value: 1, message: "Min 1" },
                                            valueAsNumber: true
                                        })}
                                        type="number"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                        min="1"
                                    />
                                    {errors.medicines?.[index]?.timesPerDay && (
                                        <p className="text-red-500 text-sm">{errors.medicines[index].timesPerDay.message}</p>
                                    )}
                                </div>
                                
                                <div className="md:col-span-3">
                                    <label className="block font-medium md:hidden">Days:</label>
                                    <input
                                        {...register(`medicines.${index}.days`, {
                                            required: "Required",
                                            min: { value: 1, message: "Min 1" },
                                            valueAsNumber: true
                                        })}
                                        type="number"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                        min="1"
                                    />
                                    {errors.medicines?.[index]?.days && (
                                        <p className="text-red-500 text-sm">{errors.medicines[index].days.message}</p>
                                    )}
                                </div>
                                
                                <div className="md:col-span-2 flex justify-center">
                                    {fields.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="text-red-500 hover:text-red-700"
                                            title="Remove medicine"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Add Medicine Button */}
                <div className="mt-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
                        onClick={() => append({ name: '', timesPerDay: 1, days: 1 })}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add Medicine
                    </button>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-end mt-6">
                    <button 
                        type="submit" 
                        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                    >
                        Save Prescription
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePrescription;