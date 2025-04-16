import { access } from "fs";
import Image from "next/image";
import ToggleSwitch from "./components/ToggleSwitch";
import PreferencesSection from './components/Languages'
import Channels from './components/Channel'

export default function Home() {
  const Account = {
    mainInformation: {
      imgSrc: "https://www.chikoshoes.com/wp-content/uploads/2014/02/CHIKO-LOGO-WHITE-300-300.jpg",
      name: "Chiko",
      category: "Footwear",
      include: `Men's Footwear (Formal Shoes, Casual Shoes, Athletic Shoes, Boots),
Women's Footwear (Heels & Pumps, Flats & Loafers, Athletic Shoes, Boots),
Kids' Footwear (School Shoes, Casual Sneakers, Sandals & Open-Toe Shoes, Specialty Footwear),
Athletic & Performance Footwear (Running Shoes, Training & Cross-Training Shoes, Court & Sport-Specific Shoes),
Specialty & Outdoor Footwear (Hiking & Trekking Boots, Waterproof & Weather-Resistant Shoes, Orthopedic & Comfort Shoes),
and Sandals & Casual Slip-Ons (Casual Sandals, Flip Flops, Comfort Sandals).`,
    },
    accessingAccount: {
      primaryEmail: "chicko32367471@sup.supplliex.com",
      secondEmail: " chicko32367472@sup.supplliex.com",
      ownerPersonalEmail: " Ahmed.ali@gmail.com",
      ownerPhoneNumber: "+20|02359469632",
    },
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 lg:p-12 space-y-5">
      {/* Account Settings Header */}
      <div>
        <h1 className="font-bold text-xl md:text-2xl">Account settings</h1>
        
        {/* Main Information Section */}
        <div className="mt-4">
          <h3 className="text-[#038C8C] font-bold mb-3">Main information about account</h3>
          <div className="flex flex-col md:flex-row gap-5">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mt-2">
                <img 
                  src={Account.mainInformation.imgSrc} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-gray-800 font-bold text-lg md:text-xl mt-2">
                {Account.mainInformation.name}
              </h1>
              <p className="font-bold text-gray-400 text-sm md:text-base">#3236747</p>
            </div>

            {/* Account Details */}
            <div className="flex-1 space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                <ToggleSwitch />
                <p className="text-gray-600 text-sm md:text-base">Make your profile public</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
                <h1 className="text-[#038C8C] font-bold inline-block min-w-[120px]">Account category:</h1>
                <p className="text-gray-600 text-sm md:text-base">{Account.mainInformation.category}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                <h1 className="text-[#038C8C] font-bold inline-block min-w-[60px]">Include:</h1>
                <p className="text-gray-600 text-sm md:text-base">{Account.mainInformation.include}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessing Account Section */}
      <div className="flex flex-col space-y-3 md:space-y-4">
        <h3 className="text-[#038C8C] font-bold">Accessing account</h3>
        
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
          <h1 className="text-gray-800 font-bold inline-block min-w-[110px]">Primary email:</h1>
          <p className="text-gray-600 text-sm md:text-base">{Account.accessingAccount.primaryEmail}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
          <h1 className="text-gray-800 font-bold inline-block min-w-[150px]">Second access Email:</h1>
          <p className="text-gray-600 text-sm md:text-base">{Account.accessingAccount.secondEmail}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
          <h1 className="text-gray-800 font-bold inline-block min-w-[150px]">Owner Personal Email:</h1>
          <p className="text-gray-600 text-sm md:text-base">{Account.accessingAccount.ownerPersonalEmail}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
          <h1 className="text-gray-800 font-bold inline-block min-w-[110px]">Phone number:</h1>
          <p className="text-gray-600 text-sm md:text-base">{Account.accessingAccount.ownerPhoneNumber}</p>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="flex flex-col space-y-3 md:space-y-4">
        <h3 className="text-[#038C8C] font-bold">Preferred Languages and preferences</h3>
        <PreferencesSection/>
      </div>

      {/* Notification Settings */}
      <div className="flex flex-col space-y-3 md:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-gray-800 text-sm md:text-base">Order updates.</p>
          <ToggleSwitch/>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-gray-800 text-sm md:text-base">Low stock alerts.</p>
          <ToggleSwitch/>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-gray-800 text-sm md:text-base">Platform announcements.</p>
          <ToggleSwitch/>
        </div>
        
        <p className="text-[#038C8C] text-sm md:text-base">Turn on alerts for all stock products</p>
      </div>

      {/* Communication Channel */}
      <div className="flex flex-col space-y-3 md:space-y-4">
        <h3 className="text-[#038C8C] font-bold">Communication channel</h3>
        <Channels/>
      </div>

      {/* Delete Account Button */}
      <button className="bg-[#038C8C] text-white font-bold py-2 px-6 md:py-3 md:px-10 rounded w-full sm:w-fit hover:bg-[#027575] transition-colors">
        Delete Account
      </button>
    </div>
  );
}