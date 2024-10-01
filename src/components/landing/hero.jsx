import { firstTimer, newConvert, pin } from "../../assets";

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-11">
      <h1 className="text-4xl font-light text-center mb-12">
        <span className="text-purple-800">Welcome</span> to RCF UNILAG
        <br />
        <span className="text-purple-800">follow up</span>
      </h1>
      <div className="grid grid-cols-2 gap-8 sm:gap-11 md:gap-16 comic-neue-regular">
        <div className="bg-blue-100 p-4 rounded-2xl shadow relative pb-12 sm:pb-16 mb-4">
          <h2 className="text-xl sm:text-4xl md:text-[40px] md:max-w-3/5 font-extralight mb-4">
            New convert courses
          </h2>
          <img
            src={newConvert}
            alt="Study materials"
            className="absolute bottom-0 right-0 w-[120px] h-[80px]"
          />
        </div>
        <div className="bg-blue-100 p-4 rounded-2xl shadow relative pb-12 sm:pb-16 mb-4">
          <h2 className="text-xl sm:text-4xl md:text-[40px] md:max-w-3/5 font-extralight mb-4">
            First timer's attendance
          </h2>
          <img
            src={firstTimer}
            alt="Attendance chart"
            width={80}
            height={80}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 comic-neue-regular text-center">
        <div className="bg-purple-200 p-4 rounded-2xl shadow col-span-2 relative row-span-3">
          <div className="w-full flex items-center justify-center">
            <img
              src={pin}
              alt="Decorative 3d pin"
              className="relative w-[120px] mb-2 translate-x-1/3"
            />
          </div>
          <p className="text-sm sm:text-lg md:text-xl">
            You have taken a momentous step in your spiritual journey by
            accepting Jesus Christ as your Lord and Savior. As you embark on
            this new chapter, remember the words of the Apostle Paul in Romans
            10:9-10: "If you confess with your mouth, "Jesus is Lord," and
            believe in your heart that God raised him from the dead, you will be
            saved."
          </p>
        </div>
        <div className="bg-pink-100 p-4 rounded-2xl shadow relative row-span-2 col-span-2 ">
          <div className="w-full flex items-center justify-center">
            <img
              src={pin}
              alt="Decorative 3d pin"
              className="relative w-[70px] mb-2 translate-x-1/3"
            />
          </div>
          <p className="text-xs sm:text-lg md:text-xl">
            You are now part of a loving and supportive community. We are here
            to walk alongside you as you grow in your faith. May the Lord bless
            and keep you.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-2xl shadow relative col-span-2 text-center">
          <div className="w-full flex items-center justify-center">
            <img
              src={pin}
              alt="Decorative 3d pin"
              width={30}
              height={30}
              className="relative w-[70px] mb-2 translate-x-1/3"
            />
          </div>
          <p className="text-xs sm:text-lg italic">
            May His face shine upon you and be gracious to you. May the Lord
            lift up His countenance upon you and give you peace - Numbers
            6:24-26
          </p>
        </div>
      </div>
    </div>
  );
}
