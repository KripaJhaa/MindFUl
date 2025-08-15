import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '../data/events';

export default function EventRegistration() {
  const { eventSlug } = useParams();
  const event = events.find(e => {
    const slug = e.registrationUrl.split('/').pop();
    return slug === eventSlug;
  });

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>
            <p className="mt-2 text-gray-600">{event.description}</p>
          </div>

          <div className="mb-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-medium text-blue-900 mb-4">Event Details</h2>
            <div className="space-y-2 text-sm text-blue-800">
              <p>
                <span className="font-medium">Date:</span>{' '}
                {event.date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p>
                <span className="font-medium">Duration:</span> {event.duration}
              </p>
              <p>
                <span className="font-medium">Host:</span> {event.host}
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
                Special Requirements or Questions
              </label>
              <textarea
                name="specialRequirements"
                id="specialRequirements"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register for Event
            </motion.button>
          </form>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              By registering for this event, you agree to receive communications about the event details
              and any updates. Your information will be kept confidential and used only for
              event-related purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
