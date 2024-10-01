import { studyTogether } from "../../assets"
import { Button } from "../common"

export default function ShareYourFaith() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl text-font-bold md:text-center mb-8 relative ">
          Start Your Faith Journey
          <span className="absolute bottom-0 left-0 mt-1 transform w-16 h-[3px] bg-black rounded-full"></span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-600">
            Ready to embark on a life-changing journey? Join our New Convert Course and discover the joy of faith. Learn from experienced believers, connect with a supportive community, and gain a deeper understanding of God's Word. Don't miss this opportunity to grow stronger in your faith. Enroll now!
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded py-1.5 px-9" size="sm">
            Enroll Now
          </Button>
        </div>
        <div className="md:w-1/2 max-h-[320px] md:max-h-[400px] max-w-[450px] overflow-hidden rounded-lg">
          <img
            src={studyTogether}
            alt="People studying together"
            className="rounded-lg shadow-md object-cover -mt-24"
          />
        </div>
      </div>
    </section>
  )
}