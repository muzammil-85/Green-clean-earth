"use client";
import { apiURL } from "../status/route";

export const uploadPlantData = async (data: any, token: string | null) => {
    try {
      const response = await fetch(`${apiURL}/uploads/new`, { 
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