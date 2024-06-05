import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { DialogUploadActivities } from "./dialog_upload_activities";
import Table from "@/components/table";
import { useEffect, useState } from "react";
import axios from 'axios';
const headings = ['Sl No', 'Views, Likes, Comments, and Shares', 'Category', 'Name and Address of Participant', 'Name of Art - Brief Description', 'Thumbnail', 'Value']

const data = [
  {
      id: '1',
      social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
      category: 'Green Activities',
      participant_details: 'Sherlock Holmes, 221B Baker Street,London',
      description: 'Youtube video',
      thumbnail: '..',
      value: '200'
  },
  {
    id: '2',
    social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
    category: 'Green Activities',
    participant_details: 'Sherlock Holmes, 221B Baker Street, London',
    description: 'Youtube video',
    thumbnail: '..',
    value: '200'
  },
  {
    id: '3',
    social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
    category: 'Green Activities',
    participant_details: 'Sherlock Holmes, 221B Baker Street, London',
    description: 'Youtube video',
    thumbnail: '..',
    value: '200'
  },
  {
    id: '4',
    social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
    category: 'Green Activities',
    participant_details: 'Sherlock Holmes, 221B Baker Street, London',
    description: 'Youtube video',
    thumbnail: '..',
    value: '200'
  },
  {
    id: '5',
    social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
    category: 'Green Activities',
    participant_details: 'Sherlock Holmes, 221B Baker Street, London',
    description: 'Youtube video',
    thumbnail: '..',
    value: '200'
  },
  {
    id: '6',
    social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
    category: 'Green Activities',
    participant_details: 'Sherlock Holmes, 221B Baker Street, London',
    description: 'Youtube video',
    thumbnail: '..',
    value: '200'
  },
]



export default function ActivitiesTab() {

const [activity, setActivity] = useState([]);
useEffect(() => {
  async function fetchData() {
    try {
      const activityResponse = await axios.get("https://gce-backend.onrender.com/api/v1/activity/all", { withCredentials: true });
      const activityData = activityResponse.data;
      console.log(activityData);

      // Check if the token is present in the response headers
      const token = activityResponse.headers["set-cookie"]?.[0]?.split(";")[0].split("=")[1];
      console.log(token);
      if (token) {
        // Store the token in a cookie
        document.cookie = `token=${token}; path=/`;
        // You can also store the token in a state management system
      }

      // setActivity(countryData.country);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}, []);

    return (
        <div className="">
          <DialogUploadActivities/>
          <p>Table</p>
          <Table data={data} headings={headings} />
        </div>
    )
}