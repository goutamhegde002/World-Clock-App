import React, { useEffect, useState } from "react";
import "./ClockComponent.css"; // Ensure this file contains the CSS you provided

const ClockComponent = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getClockHands = (date) => {
    const hours = date.getUTCHours() % 12;
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    const hourDeg = (hours + minutes / 60) * 30; // 360 / 12
    const minuteDeg = (minutes + seconds / 60) * 6; // 360 / 60
    const secondDeg = seconds * 6; // 360 / 60

    return {
      hour: hourDeg,
      minute: minuteDeg,
      second: secondDeg,
    };
  };

  const { hour, minute, second } = getClockHands(time);

  return (
    <div className="vintage-clock">
      <div className="vintage-clock-face">
        <div
          className="vintage-hand hour"
          style={{ transform: `rotate(${hour}deg)` }}
        ></div>
        <div
          className="vintage-hand minute"
          style={{ transform: `rotate(${minute}deg)` }}
        ></div>
        <div
          className="vintage-hand second"
          style={{ transform: `rotate(${second}deg)` }}
        ></div>
        <div className="vintage-center"></div>
      </div>
      <div className="vintage-clock-time">
        {time.toLocaleTimeString("en-US", { timeZone: timezone })}
      </div>
    </div>
  );
};

export default ClockComponent;
