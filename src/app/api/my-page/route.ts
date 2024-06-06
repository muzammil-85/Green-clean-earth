export const fetchUserData = async (user_id, token) => {
    console.log('Fetching user');
    const headersList = {
      "Authorization": `Bearer ${token}`,
    };
    
    const response = await fetch(`http://localhost:3000/api/v1/user/${user_id}`, { 
      method: "GET",
      headers: headersList
    });
    
    const data = await response.json();
    return data;
  };
  

  export async function uploadActivityData(formData,token) {
    const headersList = {
        "Authorization": `Bearer ${token}`,
      };
    try {
      const response = await fetch("http://localhost:3000/api/v1/activity/new", {
        method: "POST",
        body: formData,
        headers: headersList
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }


  export const fetchActivityData = async (token) => {
    console.log('Fetching user');
    const headersList = {
      "Authorization": `Bearer ${token}`,
    };
    
    const response = await fetch(`http://localhost:3000/api/v1/activity/all`, { 
      method: "GET",
      headers: headersList
    });
    
    const data = await response.json();
    return data;
  };