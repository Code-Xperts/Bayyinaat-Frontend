export function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
  
    // Pad minutes with leading zero if needed
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
    return `${hours}:${minutesStr} ${ampm}`;
  }
  
  