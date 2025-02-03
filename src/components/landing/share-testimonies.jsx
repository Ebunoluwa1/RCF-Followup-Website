function Testimonial({ name, content }) {
  return (
    <div className="w-full bg-white border shadow-md rounded-xl p-6 ">
      <h3 className="font-medium text-right  text-lg lg:text-xl mb-2">{name}</h3>
      <p className="text-sm xl:text-lg font-light text-gray-600">{content}</p>
    </div>
  );
}

export default function Testimonies() {
  const testimonials = [
    {
      name: "Emmanuel God'stime",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
    {
      name: "Emmanuel God'stime",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
    {
      name: "Emmanuel God'stime",
      content:
        "“Ever since i gave my life to Christ, my life has never been the same. It’s been an awesome experience getting to know Him day by day. Feels like i just started living. Glory to God for this awesome experience.”",
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl text-font-bold md:text-center mb-3 relative ">
          Testimonials
          <span className="absolute bottom-0 left-0 mt-1 transform w-9 h-[2px] bg-black rounded-full"></span>
        </h2>
      </div>
      <p className="text-center text-gray-600 mb-8">
        We are excited to share testimonies of some of our new converts so your
        faith can be boosted.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
  );
}
