import { memo, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { createBooking } from '../../lib/db';
import './BookingForm.css';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  counselorId?: string;
  counselorName?: string;
}

function UnmemoizedBookingForm({ isOpen, onClose, counselorId, counselorName }: BookingFormProps) {
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
    if (!formData.dateTime) {
      toast.error('Please select a date and time');
      return;
    }
    try {
      await createBooking({
        ...formData,
        dateTime: formData.dateTime,
        counselorId
      });
      toast.success('Session booked successfully!');
      onClose();
    } catch (error) {
      console.error('Booking error:', error);
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
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 1 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="bg-white w-full sm:rounded-2xl sm:w-[440px] max-h-[85vh] sm:max-h-[92vh] overflow-y-auto shadow-xl relative"
          >
            {/* Sticky header */}
            <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-100 flex items-center">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 -ml-2"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="flex-1 text-center text-lg font-semibold text-gray-900">Book Your Session</h2>
              <div className="w-10"></div> {/* Spacer for alignment */}
            </div>

            {/* Main content */}
            <div className="px-4 py-6 sm:px-6">
              {counselorName && (
                <div className="mb-6 text-center">
                  <p className="text-gray-600">
                    with <span className="text-indigo-600 font-semibold">{counselorName}</span>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker
                    selected={formData.dateTime}
                    onChange={(date: Date | null) => setFormData(prev => ({ ...prev, dateTime: date }))}
                    dateFormat="MMM d, yyyy"
                    minDate={minDate}
                    maxDate={maxDate}
                    placeholderText="Select Date"
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                  <DatePicker
                    selected={formData.dateTime}
                    onChange={(date: Date | null) => setFormData(prev => ({ ...prev, dateTime: date }))}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    filterTime={filterAvailableTimes}
                    placeholderText="Select Time"
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>

                <select
                  name="preferredMode"
                  value={formData.preferredMode}
                  onChange={handleChange}
                  className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value="video">Video Call</option>
                  <option value="chat">Chat</option>
                </select>

                {/* Progress and Submit Button */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 sm:relative sm:p-0 sm:border-0">
                  <div className="mb-4 hidden sm:block">
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
                  
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/30 transition-all duration-200"
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
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const BookingForm = memo(UnmemoizedBookingForm);
BookingForm.displayName = 'BookingForm';

export default BookingForm;
