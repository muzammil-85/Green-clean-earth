import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { DialogUploadActivities } from "./dialog_upload_activities";
import Table from "@/components/table";

const headings = ['Sl No', 'Views, Likes, Comments, and Shares', 'Category', 'Name and Address of Participant', 'Name of Art - Brief Description', 'Thumbnail', 'Value']

const data = [
  {
      id: '1',
      social: '1000 Views, 200 Likes, 120 Comments and 38 Shares',
      category: 'Green Activities',
      participant_details: 'Sherlock Holmes, 221B Baker Street, London',
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
    return (
        <div className="">
          <DialogUploadActivities/>
          <p>Table</p>
          <Table data={data} headings={headings} />
        </div>
    )
}