import { studyTogether } from "../../assets";
import { Button, ButtonLinks } from "../common";

export default function ShareYourFaith() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-[#FBF1FE] sm:bg-transparent">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl text-font-bold md:text-center mb-8 relative ">
          Start Your Faith Journey
          <span className="absolute bottom-0 left-0 mt-1 transform w-16 h-[3px] bg-black rounded-full"></span>
        </h2>
      </div>
      <div className="flex max-w-6xl mx-auto flex-col justify-between  md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-600 text-sm sm:text-lg font-medium max-w-[420px]">
            Ready to embark on a life-changing journey? Join our New Convert
            Course and discover the joy of faith. Learn from experienced
            believers, connect with a supportive community, and gain a deeper
            understanding of God's Word. Don't miss this opportunity to grow
            stronger in your faith. Enroll now!




         </p>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded hidden sm:block py-1 px-7 sm:py-1.5 sm:px-9">
            Enroll Now
          </Button>
        </div>
        <div className="md:w-1/2 max-h-[320px] md:max-h-[400px] max-w-[500px] overflow-hidden rounded-lg">
          <img
            src={studyTogether}
            alt="People studying together"
            className="rounded-lg shadow-md object-cover -mt-24"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded sm:hidden block py-1 px-7 sm:py-1.5 sm:px-9" size="sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
}
