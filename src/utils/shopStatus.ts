import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/bakeryData';

export interface ShopStatusState {
  isOpen: boolean;
  statusText: string;
  badgeColor: string;
  nextEventText: string;
  countdownText: string;
  currentTimeString: string;
}

export function getShopStatus(): ShopStatusState {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const openHour = BUSINESS_INFO.openingHour; // 6
  const closeHour = BUSINESS_INFO.closingHour; // 23 (11 PM)

  const isOpen = currentHour >= openHour && currentHour < closeHour;

  let countdownText = '';
  let nextEventText = '';

  if (isOpen) {
    // Calculates hours & minutes until 11:00 PM
    const minutesUntilClose = (closeHour - currentHour) * 60 - currentMinute;
    const hrs = Math.floor(minutesUntilClose / 60);
    const mins = minutesUntilClose % 60;
    nextEventText = 'Closes tonight at 11:00 PM';
    countdownText = `Closes in ${hrs}h ${mins}m`;
  } else {
    // Calculates hours & minutes until 6:00 AM
    let minutesUntilOpen = 0;
    if (currentHour >= closeHour) {
      // It's between 23:00 and 24:00 (11 PM and midnight)
      minutesUntilOpen = (24 - currentHour + openHour) * 60 - currentMinute;
    } else {
      // It's between midnight and 6:00 AM
      minutesUntilOpen = (openHour - currentHour) * 60 - currentMinute;
    }
    const hrs = Math.floor(minutesUntilOpen / 60);
    const mins = minutesUntilOpen % 60;
    nextEventText = 'Opens at 6:00 AM';
    countdownText = `Opens in ${hrs} hours ${mins} minutes`;
  }

  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return {
    isOpen,
    statusText: isOpen ? 'OPEN NOW' : 'CLOSED',
    badgeColor: isOpen ? 'bg-[#10B981]' : 'bg-[#DC2626]',
    nextEventText,
    countdownText,
    currentTimeString: timeStr
  };
}

export function useShopStatus(): ShopStatusState {
  const [status, setStatus] = useState<ShopStatusState>(getShopStatus);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getShopStatus());
    }, 30000); // update every 30 seconds
    return () => clearInterval(timer);
  }, []);

  return status;
}
