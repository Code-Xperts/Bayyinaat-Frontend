import axios from 'axios';

async function getUserLocationFromIP() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    const data = await response.json();
    const city = data.city;
    const country = data.country;
    return { city, country };
  } catch (error) {
    console.error('Error fetching location:', error);
    return { city: 'Unavailable', country: 'Unavailable' };
  }
}

function getTodayFormatted() {
  const today = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  return today.toLocaleDateString('en-US', options);
}

export const getNamazTimings = async () => {

  const { city, country } = await getUserLocationFromIP();

  const date = getTodayFormatted();


  const url = `https://prayer-times11.p.rapidapi.com/timingsByCity/${date}?method=2&city=${city}&country=${country}`;
  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': 'a78b0b045emshf025ba249e51f9fp15435djsn36bc99eb2b27',
          'x-rapidapi-host': 'prayer-times11.p.rapidapi.com',
          Accept: 'application/json'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result?.data
  } catch (error) {
      console.error(error);
  }
}
