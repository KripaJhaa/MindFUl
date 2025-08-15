import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  role: yup.string().required('Role is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  message: yup.string().required('Message is required'),
}).required();

type FormData = {
  name: string;
  role: string;
  email: string;
  phone?: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema) as any
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await fetch('https://formspree.io/f/xdoqqwoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thank you!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've received your message and will get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                {...register('name')}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="role" className="block text-sm font-semibold leading-6 text-gray-900">
              I am a...
            </label>
            <div className="mt-2.5">
              <select
                {...register('role')}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="institution">Institution</option>
              </select>
              {errors.role && <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                {...register('email')}
                type="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone (optional)
            </label>
            <div className="mt-2.5">
              <input
                {...register('phone')}
                type="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                {...register('message')}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
