import { memo, useState, useMemo } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Add custom styles for react-datepicker
import './BookingForm.css';
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  counselorId?: string;
  counselorName?: string;
}

const BookingForm: FC<BookingFormProps> = memo(({ isOpen, onClose, counselorId, counselorName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateTime: null as Date | null,
    concerns: '',
    preferredMode: 'video' as 'video' | 'chat'
  });

  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }, []);

  const maxDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date;
  }, []);

  const filterAvailableTimes = (time: Date) => {
    const selectedTime = time.getHours() * 60 + time.getMinutes();
    const isWorkingHour = selectedTime >= 9 * 60 && selectedTime <= 17 * 60;
    const is30MinInterval = time.getMinutes() % 30 === 0;
    return isWorkingHour && is30MinInterval;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement API call to save booking
      console.log('Booking submitted:', { ...formData, counselorId });
      toast.success('Session booked successfully!');
      onClose();
    } catch (error) {
      toast.error('Failed to book session. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
      >
        <motion.div
          initial={{ y: "100%", opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 1 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="bg-white w-full sm:rounded-2xl sm:w-[440px] min-h-[50vh] sm:min-h-0 sm:max-h-[92vh] overflow-y-auto shadow-xl relative px-4 sm:px-6 pb-8 pt-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start mb-6">
              {/* Mobile header with close button */}
              <div className="flex items-center justify-between mb-4 sm:hidden">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 -ml-2 p-2"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex-1 text-center">
                  <h2 className="text-lg font-semibold text-gray-900">Book Your Session</h2>
                </div>
                <div className="w-10"></div> {/* Spacer for alignment */}
              </div>

              {/* Desktop header */}
              <div className="hidden sm:block flex-1">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 hidden sm:block">Book Your Session</h2>
                {counselorName && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-gray-600"
                  >
                    with <span className="text-indigo-600 font-semibold">{counselorName}</span>
                  </motion.p>
                )}
              </div>

              {/* Desktop close button */}
              <button
                onClick={onClose}
                className="hidden sm:block text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <span className="sr-only">Close</span>
                <motion.svg 
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              </button>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <label
                htmlFor="name"
                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow duration-200"
                placeholder="Enter your full name"
              />
              <motion.div
                initial={false}
                animate={{ 
                  scale: formData.name ? 1 : 0,
                  opacity: formData.name ? 1 : 0
                }}
                className="absolute right-3 top-3 text-green-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </motion.div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your phone number"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <label className="block text-sm font-medium text-gray-900">
                Select Date & Time
              </label>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <DatePicker
                      selected={formData.dateTime}
                      onChange={(date: Date | null) => setFormData(prev => ({ ...prev, dateTime: date }))}
                      minDate={minDate}
                      maxDate={maxDate}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Select date"
                      className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      wrapperClassName="w-full"
                      calendarClassName="rounded-xl shadow-lg border-0 !bg-white"
                      customInput={
                        <motion.input
                          whileTap={{ scale: 0.98 }}
                          className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                        />
                      }
                      dayClassName={(date: Date) => {
                        if (date.getDay() === 0 || date.getDay() === 6) {
                          return "text-gray-300 disabled";
                        }
                        return "text-gray-900";
                      }}
                    />
                    <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <DatePicker
                      selected={formData.dateTime}
                      onChange={(date: Date | null) => setFormData(prev => ({ ...prev, dateTime: date }))}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      filterTime={filterAvailableTimes}
                      dateFormat="h:mm aa"
                      timeFormat="h:mm aa"
                      placeholderText="Select time"
                      className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      wrapperClassName="w-full"
                      calendarClassName="rounded-xl shadow-lg border-0 !bg-white"
                      customInput={
                        <motion.input
                          whileTap={{ scale: 0.98 }}
                          className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"
                        />
                      }
                    />
                    <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {formData.dateTime && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between px-3 py-2 bg-indigo-50 rounded-lg text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-indigo-700 font-medium">
                      {formData.dateTime.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                      {' '}at{' '}
                      {formData.dateTime.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, dateTime: null }))}
                    className="text-indigo-500 hover:text-indigo-600 p-1 rounded-full hover:bg-indigo-100 transition-colors duration-150"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </motion.div>

            <div>
              <label htmlFor="preferredMode" className="block text-sm font-medium text-gray-700">
                Preferred Mode
              </label>
              <select
                id="preferredMode"
                name="preferredMode"
                required
                value={formData.preferredMode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="video">Video Call</option>
                <option value="chat">Chat</option>
              </select>
            </div>

            <div>
              <label htmlFor="concerns" className="block text-sm font-medium text-gray-700">
                Primary Concerns (Optional)
              </label>
              <textarea
                id="concerns"
                name="concerns"
                rows={3}
                value={formData.concerns}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Briefly describe what you'd like to discuss..."
              />
            </div>

            <motion.div 
              className="pt-6 pb-20 sm:pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <div className="absolute left-0 -top-6 w-full">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Contact Info</span>
                    <span>Date & Time</span>
                    <span>Preferences</span>
                  </div>
                  <div className="mt-1 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-indigo-600"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: !formData.name || !formData.email || !formData.phone ? "33%" :
                               !formData.dateTime ? "66%" :
                               formData.preferredMode ? "100%" : "66%" 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fixed submit button for mobile */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 sm:hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-200"
              >
                <span>Confirm Booking</span>
                <motion.svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={false}
                  animate={{ 
                    x: [0, 4, 0],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Desktop submit button */}
            <div className="hidden sm:block">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-200"
              >
                <span>Confirm Booking</span>
                <motion.svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={false}
                  animate={{ 
                    x: [0, 4, 0],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

BookingForm.displayName = 'BookingForm';

export default BookingForm;
