import chat from '../../../assets/travel-app-430x242.jpg';

const ServiceBody = () => {
  return (
    <div className='md:flex justify-between bg-[#F4E2EF] text-[#fff] items-start pt-[50px] pb-[60px]'>
      <div className='px-[30px] md:w-3/5 h-[350px] md:h-[450px] py-[20px] bg-[#91447B]'>
        <h3 className="text-[17px] md:text-[30px] font-alata md:leading-[45.12px] font-semibold">
          Our Services
        </h3>
        <p className="text-[13px] md:text-[20px] md:leading-[32.23px] font-nunito font-[600] md:mt-2">
          College Hub aims to build a vibrant community for students, offering comfortable living, productive study environments, and meaningful connections.
        </p>
        <div className='md:px-[40px] mt-4'>
          <h4 className="text-lg md:text-2xl font-semibold mb-3">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-sm md:text-base font-poppins font-normal space-y-2">
            <li>Comfortable rooms designed for focused living and learning</li>
            <li>Find a compatible roommate for an enjoyable living experience</li>
            <li>Smart study mates to collaborate on academic goals</li>
            <li>Create group chats and connect with friends easily</li>
            <li>Peaceful reading spaces for focused study sessions</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-2/4 mt-6 md:mt-0">
        <img
          src={chat}
          alt="Chat with Us Illustration"
          className="w-full object-cover h-[450px]"
        />
      </div>
    </div>
  );
};

export default ServiceBody;
