"use client";
import { FC, useState } from "react";
import { ChevronDown, Download, LogOut } from "lucide-react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const stats = [
    {
      number: "578",
      label: "Total Resellers",
      icon: "👥",
      name: "/reseller.svg",
    },

    { number: "163", label: "Credit Points", icon: "💳", name: "/credit.png" },
    {
      number: "5329",
      label: "Total Credit Share",
      icon: "📊",
      name: "/total.svg",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log("Signing out...");
    setIsDropdownOpen(false);
  };

  const [date1, setDate1] = useState("mm-dd-yyyy");
  const [date2, setDate2] = useState("mm-dd-yyyy");

  const handleDateChange = (setDate) => {
    const today = new Date();
    const formattedDate = `${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}-${today.getFullYear()}`;
    setDate(formattedDate);
  };

  return (
    <div className="flex-1 bg-black p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Welcome Back, Ali <span className="text-xl">👋</span>
          </h1>
          <p className="text-[#B58DD5] font-normal text-sm mt-1">
            Here's what's happening with your store today
          </p>
        </div>

        <div className="flex items-center gap-10">
          <button className="flex items-center text-sm gap-2 bg-[#14081E] text-gray-300 px-4 py-2 rounded-lg">
            Credit Points: 5
          </button>

          <div className="relative">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src="/man.svg"
                alt="Profile"
                className="w-10 h-full rounded-full"
              />

              <div className="text-left">
                <div className="text-white">Ali Riaz</div>
                <div className="text-gray-400 text-sm">Web Designer</div>
              </div>
              <ChevronDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#14081E] rounded-md shadow-lg py-1 z-10">
                <button
                  className="block px-4 py-2 text-sm text-white hover:bg-[#2D1541] w-full text-left"
                  onClick={toggleDropdown}
                >
                  Ali Riaz
                </button>
                <button
                  className="block px-4 py-2 text-sm text-white hover:bg-[#2D1541] w-full text-left flex items-center"
                  onClick={handleSignOut}
                >
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#14081E] flex gap-4 p-6 rounded-xl">
            <div className=" w-16 flex items-center justify-center rounded-lg bg-[#2D1541]">
              <img src={stat.name} />
            </div>

            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white font-bold flex items-center text-sm">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Download Card */}
        <div className="bg-[#14081E] p-6 rounded-xl">
          <h3 className="text-white font-bold text-sm mb-4">
            Download Reseller Credit Share
          </h3>
          <h3 className="text-white font-bold text-sm mb-4">Report</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[13px] font-medium text-sm block mb-2">
                Start Date
              </label>

              <div className="relative w-full   bg-[#2D1541] rounded-lg">
                {/* Custom date picker input */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="pl-10    bg-[#2D1541] text-white font-medium text-sm px-2 py-3  rounded-lg"
                  placeholderText="MM-dd-yyyy"
                  dateFormat="MM-dd-yyyy"
                />
                {/* Calendar Icon on the left */}
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
              </div>
            </div>
            {/* ======== */}

            <div className="">
              <label className="text-[13px] font-medium text-sm block mb-2">
                End Date
              </label>
              <div className="relative  w-full bg-[#2D1541] rounded-lg">
                {/* Custom date picker input */}
                <DatePicker
                  selected={selectedDate2}
                  onChange={(date) => setSelectedDate2(date)}
                  className="pl-10 w-full bg-[#2D1541] text-white font-medium text-sm px-2 py-3  rounded-lg"
                  placeholderText="MM-dd-yyyy"
                  dateFormat="MM-dd-yyyy"
                />
                {/* Calendar Icon on the left */}
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
              </div>
            </div>
            <button className="w-full   bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white py-2 rounded-lg flex items-center justify-center gap-2">
              <Download size={16} />
              Download
            </button>
          </div>
        </div>

        {/* App Wise Card */}
        <div className="bg-[#14081E] p-6 rounded-xl">
          <h3 className="text-white mb-4">App Wise - Total Activation</h3>
          <div className="flex items-center justify-center h-48">
            <img src="/app.svg" alt="App Activation" className="w-36 h-36" />
          </div>
        </div>

        {/* Monthly Activation Card */}
        <div className="bg-[#14081E] p-6 rounded-xl">
          <h3 className="text-white mb-4">Monthly Activation Trends</h3>
          <div className="flex items-center justify-center h-48">
            <img src="/month.png" alt="Monthly Trends" className="w-36 h-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
