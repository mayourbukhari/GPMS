import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../stores/authStore';
import { supabase } from '../../lib/supabase';

interface GatepassFormData {
  purpose: string;
  validFrom: string;
  validUntil: string;
}

export default function GatepassForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<GatepassFormData>();
  const user = useAuthStore((state) => state.user);

  const onSubmit = async (data: GatepassFormData) => {
    if (!user) return;

    try {
      const { error } = await supabase.from('gatepasses').insert([
        {
          userId: user.id,
          purpose: data.purpose,
          validFrom: data.validFrom,
          validUntil: data.validUntil,
          status: 'pending'
        }
      ]);

      if (error) throw error;
    } catch (error) {
      console.error('Error creating gatepass:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Request Gatepass</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Purpose</label>
          <textarea
            {...register('purpose', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Valid From</label>
            <input
              type="datetime-local"
              {...register('validFrom', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valid Until</label>
            <input
              type="datetime-local"
              {...register('validUntil', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}