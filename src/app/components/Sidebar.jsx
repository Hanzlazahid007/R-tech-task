"use client";

import { FC, useState } from "react";
import {
  LayoutDashboard,
  CreditCard,
  AppWindow,
  Users,
  Tag,
  Ticket,
  Bell,
  PlayCircle,
  Settings,
  User,
  Lock,
  ChevronDown,
  CreditCardIcon,
  Smartphone,
  UserPlus,
  FileText,
  MessageSquare,
  BellIcon,
  Play,
  Cog,
  Download,
} from "lucide-react";

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [menuItems, setMenuItems] = useState([
    {
      icon: LayoutDashboard,
      text: "Dashboard",
      active: true,
    },
    {
      icon: CreditCard,
      text: "Credit Plans",
      hasDropdown: true,
      dropdownItems: [
        { icon: CreditCardIcon, text: "View Credits" },
        { icon: FileText, text: "Credit History" },
        { icon: UserPlus, text: "Credit Transfer" },
      ],
    },
    {
      icon: AppWindow,
      text: "App Activation",
      hasDropdown: true,
      dropdownItems: [
        { icon: Smartphone, text: "Mobile Apps" },
        { icon: Play, text: "TV Apps" },
      ],
    },
    {
      icon: Users,
      text: "Reseller",
      hasDropdown: true,
      dropdownItems: [
        { icon: UserPlus, text: "Add Reseller" },
        { icon: Users, text: "View Resellers" },
        { icon: FileText, text: "Reseller Reports" },
      ],
    },
    {
      icon: Tag,
      text: "Logs",
      hasDropdown: true,
      addLineBelow: true,
      dropdownItems: [
        { icon: FileText, text: "View Logs" },
        { icon: Download, text: "Download Logs" },
      ],
    },
    {
      icon: Ticket,
      text: "Tickets",
      hasDropdown: true,
      dropdownItems: [
        { icon: MessageSquare, text: "Open Tickets" },
        { icon: FileText, text: "Closed Tickets" },
      ],
    },
    { icon: Bell, text: "Offer & Notifications" },
    {
      icon: PlayCircle,
      text: "Check Playlist & MAC",
      hasDropdown: true,
      addLineBelow: true,
      dropdownItems: [
        { icon: Play, text: "View Playlist" },
        { icon: Tag, text: "Check MAC" },
      ],
    },
    {
      icon: Settings,
      text: "Settings",
      hasDropdown: true,
      dropdownItems: [
        { icon: Cog, text: "General Settings" },
        { icon: User, text: "Account Settings" },
        { icon: Bell, text: "Notification Settings" },
      ],
    },
    { icon: User, text: "Profile Settings" },
    { icon: Lock, text: "Update Credit Password" },
  ]);

  const toggleDropdown = (text) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

  return (
    <div className="w-64 min-h-screen bg-[#14081E] text-gray-300 p-4">
      <div className="mb-4">
        <img src="/logo.svg" alt="Axon Logo" className="h-20 " />
      </div>

      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => {
                item.hasDropdown && toggleDropdown(item.text);
                setMenuItems((prev) =>
                  prev.map((menuItem) => ({
                    ...menuItem,
                    active:
                      menuItem.text === item.text ? !menuItem.active : false,
                  }))
                );
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer text-sm
                ${
                  item.active
                    ? "bg-gradient-to-r from-[#3CCACC] to-[#8E37D7] text-white"
                    : "hover:bg-white/10"
                }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span>{item.text}</span>
              </div>
              {item.hasDropdown && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 
                    ${openDropdowns[item.text] ? "rotate-180" : ""}`}
                />
              )}
            </div>

            {/* Dropdown Items */}
            {item.hasDropdown && openDropdowns[item.text] && (
              <div className="ml-12 mt-1 space-y-1">
                {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                  <div
                    key={dropdownIndex}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10"
                  >
                    <dropdownItem.icon size={16} />
                    <span className="text-sm">{dropdownItem.text}</span>
                  </div>
                ))}
              </div>
            )}
            {item.addLineBelow && (
              <div className="border-b border-gray-700 my-3"></div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
