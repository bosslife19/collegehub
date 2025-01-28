import React from 'react';

const PrivacyNotice = () => {
  return (
    <div className="bg-[#F4E2EF] min-h-screen py-8 px-4 md:px-12 inter">
      <div className="max-w-4xl mx-auto bg-white p-7 rounded-xl shadow-md">
        <h1 className="text-3xl font-[700] text-[#212121] mb-6 font-sans  border-b pb-[20px]  ">Privacy Notice</h1>

        <section className="mb-8">
          <h2 className="md:text-2xl font-semibold text-gray-700 mb-4">1. About Roommates</h2>
          <p className="text-gray-600 leading-relaxed text-[13px] md:text-[15px]">
            College Hub helps you find compatible roommates by sharing essential information between users. 
            Your privacy is important to us, and we only use the information you provide to connect you with 
            suitable roommate options. We recommend users share only necessary personal information 
            when communicating with potential roommates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="md:text-2xl font-semibold text-gray-700 mb-4">2. Booking Rides</h2>
          <p className="text-gray-600 leading-relaxed text-[13px] md:text-[15px]">
            Our ride-booking feature connects students seeking affordable and reliable transportation options.
            To facilitate this service, we may collect location data and contact information. This information is
            used solely for booking rides and ensuring safe travel experiences. We do not share your data with
            third-party services without your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="md:text-2xl font-semibold text-gray-700 mb-4">3. Chatting Features</h2>
          <p className="text-gray-600 leading-relaxed text-[13px] md:text-[15px]">
            The real-time chat feature on College Hub enables seamless communication between students.
            We respect your privacy by securing all messages with encryption and ensuring that your chat
            data remains confidential. Please communicate responsibly and avoid sharing sensitive
            information over chats.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="md:text-2xl font-semibold text-gray-700 mb-4">4. Data Protection and Security</h2>
          <p className="text-gray-600 leading-relaxed text-[13px] md:text-[15px]">
            College Hub employs robust security measures to protect user data from unauthorized access,
            loss, or misuse. We continuously update our practices to safeguard your personal information.
            
            However, users are encouraged to take precautions when sharing information and using our
            platform to ensure their data security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="md:text-2xl font-semibold text-gray-700 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed text-[13px] md:text-[15px]">
            You have the right to access, modify, or delete your personal data. If you wish to exercise these
            rights or have concerns about how your information is used, please contact our support team.
          </p>
        </section>

        <footer className="text-gray-500 mt-6">
          <p>
            For more information or support, please contact us at
            <a href="mailto:support@collegehub.com" className="text-blue-500"> support@collegehub.com</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyNotice;
