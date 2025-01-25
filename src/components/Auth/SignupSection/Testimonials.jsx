import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    header: "Great Service!",
    subheader: "By John Doe",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada."
  },
  {
    id: 2,
    header: "Highly Recommended",
    subheader: "By Jane Smith",
    rating: 4,
    content:
      "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
  },
  {
    id: 3,
    header: "Excellent Support",
    subheader: "By Alex Johnson",
    rating: 5,
    content:
      "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut."
  },
  {
    id: 4,
    header: "Amazing Experience",
    subheader: "By Emily Davis",
    rating: 5,
    content:
      "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."
  },
  {
    id: 5,
    header: "Top Notch Quality",
    subheader: "By Michael Brown",
    rating: 5,
    content:
      "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt."
  }
];

const TestimonialSlider = () => {
  return (
    <div className="py-10 bg-gray-100 w-full overflow-hidden">
      <div className="relative w-full h-full">
        {/* Marquee container */}
        <div className="flex items-center w-full overflow-hidden whitespace-nowrap animate-marquee">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 flex flex-col items-center justify-between px-6 py-8 m-4 bg-white rounded-xl shadow-lg border w-80"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {testimonial.header}
              </h3>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <h4 className="text-lg font-medium text-gray-600 mb-4 text-center">
                {testimonial.subheader}
              </h4>
              <p className="text-gray-500 text-center max-w-md">
                {testimonial.content}
              </p>
            </div>
          ))}
          {/* Duplicate testimonials for infinite scroll effect */}
          {testimonials.map((testimonial) => (
            <div
              key={`duplicate-${testimonial.id}`}
              className="flex-shrink-0 flex flex-col items-center justify-between px-6 py-8 m-4 bg-white rounded-xl shadow-lg border w-80"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                {testimonial.header}
              </h3>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <h4 className="text-lg font-medium text-gray-600 mb-4 text-center">
                {testimonial.subheader}
              </h4>
              <p className="text-gray-500 text-center max-w-md">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
