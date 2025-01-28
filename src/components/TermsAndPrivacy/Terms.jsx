import React, { useEffect, useState } from 'react';

const TermsOfService = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };


    useEffect(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString(); // Format as MM/DD/YYYY
      setCurrentDate(formattedDate);
    }, []);
  return (
    <div className="bg-[#F4E2EF] font-inter min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="md:text-lg text-gray-500">Effective Date: {currentDate}</p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="md:text-lg text-gray-700">
            By using College Hub’s platform, you agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you must stop using the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">2. User Registration</h2>
          <p className="md:text-lg text-gray-700">
            To access certain features of College Hub (such as booking rides, finding roommates, and using the chat functionality), you must create an account. You agree to provide accurate, current, and complete information during registration and to update it as necessary to maintain its accuracy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">3. Roommate Matching and Housing Services</h2>
          <p className="md:text-lg text-gray-700 mb-4">
            College Hub provides a platform for students to find and connect with potential roommates. When using this feature, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 md:text-lg text-gray-700">
            <li>Provide accurate information about your living preferences, habits, and requirements.</li>
            <li>Respect the privacy of others and refrain from posting inappropriate or misleading content.</li>
            <li>Understand that College Hub is not responsible for any roommate disputes or housing issues that may arise.</li>
            <li>Use the roommate feature solely for the purpose of finding living arrangements for students.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">4. Booking Rides</h2>
          <p className="md:text-lg text-gray-700 mb-4">
            Our platform allows users to book rides for transportation to and from college-related events. By booking a ride through College Hub, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 md:text-lg text-gray-700">
            <li>Use the ride-booking service for personal, non-commercial purposes only.</li>
            <li>Provide accurate information regarding your ride preferences and destinations.</li>
            <li>Understand that College Hub is not responsible for the actions of drivers or ride availability.</li>
            <li>Respect the rules and guidelines set forth by drivers and other users for the safety and comfort of all passengers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">5. Chatting and Communication</h2>
          <p className="md:text-lg text-gray-700 mb-4">
            College Hub provides a chat feature to facilitate communication between users. When using this feature, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 md:text-lg text-gray-700">
            <li>Communicate respectfully with other users.</li>
            <li>Refrain from sending abusive, harmful, or unsolicited messages.</li>
            <li>Understand that College Hub may monitor chats to ensure compliance with our guidelines.</li>
            <li>Not use the chat feature for illegal activities or spam.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">6. User Conduct</h2>
          <p className="md:text-lg text-gray-700 mb-4">
            You agree not to engage in any of the following activities:
          </p>
          <ul className="list-disc pl-6 space-y-2 md:text-lg text-gray-700">
            <li>Upload, post, or transmit any content that is unlawful, harmful, or offensive.</li>
            <li>Engage in activities that may harm, disable, or overburden the platform.</li>
            <li>Use the platform to impersonate another individual or entity.</li>
            <li>Engage in any fraudulent or deceptive activities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms-agree"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms-agree" className="ml-2 md:text-lg text-gray-700">
              I have read and agree to the Terms of Service.
            </label>
          </div>
        </section>

        <footer className="text-center mt-8">
          <p className="md:text-lg text-gray-600">
            By using College Hub, you acknowledge that you have read and agree to these Terms of Service.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
