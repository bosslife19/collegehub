// import React from "react";

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing College Hub, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use the platform.`,
  },
  {
    title: "2. Eligibility",
    content: `You must be at least 16 years old to use College Hub. By using the platform, you confirm that you meet this eligibility requirement.`,
  },
  {
    title: "3. Account Responsibility",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must notify us immediately of any unauthorized access or security breach of your account.",
      "College Hub will not be liable for any loss or damage resulting from your failure to comply with this obligation.",
    ],
  },
  {
    title: "4. Use of the Platform",
    content: [
      "Engaging in fraudulent or deceptive activities.",
      "Uploading or sharing content that violates any intellectual property rights.",
      "Using the platform to harass, abuse, or harm other users.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: `All content on College Hub, including text, graphics, logos, and images, is the property of College Hub or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or use any content without prior written permission.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `College Hub is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the platform’s content. We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the platform.`,
  },
  {
    title: "7. Changes to Terms",
    content: `We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting. It is your responsibility to review the terms periodically.`,
  },
  
];

const TermsConditions = () => {
  return (
    <div className= " md:py-8 px-1 sm:px-8 lg:px-8 overflow-y-scroll md:h-[500px] smooth-scroll transition-all duration-500 ease-in-out">
      <div className="max-w-4xl mx-auto bg-white    rounded-lg p-2 md:p-8 space-y-8">
        <p className="text-gray-600 mb-4 text-center text-[13px] md:text-lg">
          Welcome to <b>College Hub!</b> By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the platform.
        </p>

        {termsData.map((section, index) => (
          <section key={index} className="space-y-6">
            <h2 className="md:text-2xl font-semibold text-gray-800 mb-3">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside text-gray-600 text-[12px] md:text-[14px] space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-[12px] md:text-[14px]">{section.content}</p>
            )}
          </section>
        ))}

        {/* <p className="text-gray-600 text-sm mt-6 text-center">
          Last updated: [Date]
        </p> */}
      </div>
    </div>
  );
};

export default TermsConditions;
