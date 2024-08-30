import React from "react";
import ClockComponent from "./ClockComponent";

const ClockGrid = ({ onFlagClick, selectedTimezone }) => {
  const timezones = [
    { timezone: "Asia/Kolkata", country: "India", flag: "🇮🇳" },
    { timezone: "America/New_York", country: "USA", flag: "🇺🇸" },
    { timezone: "Europe/London", country: "UK", flag: "🇬🇧" },
    { timezone: "Asia/Tokyo", country: "Japan", flag: "🇯🇵" },
    { timezone: "Australia/Sydney", country: "Australia", flag: "🇦🇺" },
    { timezone: "America/Los_Angeles", country: "USA (LA)", flag: "🇺🇸" },
    { timezone: "Europe/Berlin", country: "Germany", flag: "🇩🇪" },
    { timezone: "Asia/Shanghai", country: "China", flag: "🇨🇳" },
    { timezone: "Africa/Johannesburg", country: "South Africa", flag: "🇿🇦" },
    {
      timezone: "America/Argentina/Buenos_Aires",
      country: "Argentina",
      flag: "🇦🇷",
    },
    { timezone: "Asia/Singapore", country: "Singapore", flag: "🇸🇬" },
    { timezone: "Europe/Paris", country: "France", flag: "🇫🇷" },
    { timezone: "America/Toronto", country: "Canada", flag: "🇨🇦" },
    { timezone: "Asia/Seoul", country: "South Korea", flag: "🇰🇷" },
    { timezone: "America/Mexico_City", country: "Mexico", flag: "🇲🇽" },
    { timezone: "Pacific/Auckland", country: "New Zealand", flag: "🇳🇿" },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <ClockComponent timezone={selectedTimezone} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {timezones.map((tz, index) => (
          <button
            key={index}
            className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg hover:bg-gray-100 text-center"
            onClick={() => onFlagClick(tz.timezone)}
            style={{ width: "100%", minWidth: "120px" }} // Adjust button size
          >
            <p className="text-3xl">{tz.flag}</p>
            <p className="text-sm font-semibold">{tz.country}</p>{" "}
            {/* Adjust text size */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClockGrid;
