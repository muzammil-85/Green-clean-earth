import { baseUrl } from "../status/route";

// fetch the clubs for the school from api endpoint
export const fetchClubData = async () => {
    try {
      const response = await fetch(`${baseUrl}/clubs`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching plants: ${response.statusText}`);
      }
  
      const clubsData = await response.json();
      return clubsData;
  
    } catch (error) {
      console.error("Error fetching plants:", error);
      return error;
    }
  }