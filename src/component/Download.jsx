import { FaApple } from "react-icons/fa";

export default function DownloadApp() {
  const data = [
    { id: 1, img: "/images/prescription.png", title: "Access To Prescriptions" },
    { id: 2, img: "/images/health.png", title: "Track Health Efficiently" },
    { id: 3, img: "/images/chat.png", title: "Direct Chat With Doctors" },
    { id: 4, img: "/images/reminder.png", title: "In-App Reminders For Consultations" },
  ];

  return (
    <div className="mt-16 bg-[#FBF6EA] py-16">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-bold text-[#3A643B] max-w-[580px]">
            Download Amrutam Ayurveda App Now
          </h1>
          <p className="text-lg text-[#676767] max-w-[540px]">
            The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! 
            Apart from mimicking the website, the app has added benefits
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[480px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border border-[#E4E4E4] py-4 px-2 rounded-xl  shadow-sm"
              >
                <img src="/images/Chat.png" alt={item.title} className="w-[50px] border border-[#3A643B] rounded-full p-2" />
                <p className="text-base font-medium text-[#3A643B] ">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 mt-6">
            <div className="flex items-center gap-3 rounded-lg bg-black px-4 py-2 cursor-pointer hover:bg-gray-900 transition">
              <img
                src="/images/Playstore.png"
                className="w-8 h-8"
                alt="Google Play"
              />
              <div className="text-white leading-tight">
                <p className="text-[10px] uppercase">Get it on</p>
                <h1 className="text-lg font-semibold">Google Play</h1>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-black px-4 py-2 cursor-pointer hover:bg-gray-900 transition">
              <FaApple className="text-white text-3xl" />
              <div className="text-white leading-tight">
                <p className="text-[10px]">Download on the</p>
                <h1 className="text-lg font-semibold">App Store</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <img src="/images/Time.png" alt="Engagement Time" />
            <img src="/images/Phone.png" alt="App Preview" className="max-h-[400px]" />
          </div>
          <div className="bg-[#F4F4F4] px-6 py-3 rounded-xl shadow-sm text-center">
            <h1 className="text-xl font-semibold text-[#3A643B]">10K+ Downloads</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
