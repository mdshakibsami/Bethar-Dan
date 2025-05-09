import React from 'react';
import { useForm } from 'react-hook-form';

export const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add your registration logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        {...register('username', { required: 'Username is required' })}
                        placeholder="Enter your username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        id="fullName"
                        {...register('fullName', { required: 'Full Name is required' })}
                        placeholder="Enter your full name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
                        placeholder="Enter your email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        {...register('phoneNumber', { required: 'Phone Number is required' })}
                        placeholder="Enter your phone number"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <input
                        id="role"
                        {...register('role', { required: 'Role is required' })}
                        placeholder="Enter your role"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                    <input
                        id="designation"
                        {...register('designation', { required: 'Designation is required' })}
                        placeholder="Enter your designation"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <input
                        type="file"
                        id="profilePic"
                        {...register('profilePic', { required: 'Profile Picture is required' })}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                    />
                    {errors.profilePic && <p className="text-red-500 text-sm mt-1">{errors.profilePic.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Register
                </button>
            </form>
        </div>
    );
};
