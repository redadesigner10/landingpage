import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  // Set timer for 3 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds > 0 ? prevTime.seconds - 1 : 59;
        const newMinutes = newSeconds === 59 
          ? (prevTime.minutes > 0 ? prevTime.minutes - 1 : 59) 
          : prevTime.minutes;
        const newHours = newMinutes === 59 && newSeconds === 59
          ? (prevTime.hours > 0 ? prevTime.hours - 1 : 23)
          : prevTime.hours;
        const newDays = newHours === 23 && newMinutes === 59 && newSeconds === 59
          ? prevTime.days - 1
          : prevTime.days;
        
        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="flex items-center justify-center" dir="ltr">
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col">
          <div className="bg-purple-700 text-white rounded py-1 px-2 font-bold text-xl">
            {formatNumber(timeLeft.days)}
          </div>
          <span className="text-xs text-gray-600 mt-1">Days</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-purple-700 text-white rounded py-1 px-2 font-bold text-xl">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-xs text-gray-600 mt-1">Hours</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-purple-700 text-white rounded py-1 px-2 font-bold text-xl">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-xs text-gray-600 mt-1">Minutes</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-purple-700 text-white rounded py-1 px-2 font-bold text-xl">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-xs text-gray-600 mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;