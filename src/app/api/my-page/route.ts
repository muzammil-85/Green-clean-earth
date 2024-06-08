"use client";
import axios from "axios";
import { apiURL } from "@/app/api/status/route";

export const fetchUserData = async (user_id, token) => {
    console.log('Fetching user');
    const headersList = {
      "Authorization": `Bearer ${token}`,
    };
    
    const response = await fetch(`${apiURL}/user/${user_id}`, { 
      method: "GET",
      headers: headersList
    });
    
    const data = await response.json();
    return data;
  };
  

  export const uploadActivityData = async (data: any, token: string | null, id: string | null) => {
    try {
      const response = await fetch(`${apiURL}/activity/new`, { 
        method: "POST",
        body: data,
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      return response.json();
    } catch (error) {
      console.error("Error uploading activity data:", error);
      throw error;
    }
  };

  export const fetchActivityData = async (token) => {
    console.log('Fetching user');
    const headersList = {
      "Authorization": `Bearer ${token}`,
    };
    
    const response = await fetch(`${apiURL}/activity/all`, { 
      method: "GET",
      headers: headersList
    });
    
    const data = await response.json();
    return data;
  };


export const fetchPlantsData = async (token : string) => {
  try {
    const header = {
      'Authorization': `Bearer ${token}`,
    };

    const response = await fetch(`${apiURL}/uploads/me`, {
      method: 'GET',
      headers: header,
    });

    if (!response.ok) {
      throw new Error(`Error fetching plants: ${response.statusText}`);
    }

    const plantData = await response.json();
    return plantData;

  } catch (error) {
    console.error("Error fetching plants:", error);
    return error;
  }
}