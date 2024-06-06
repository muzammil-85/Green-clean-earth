"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { DialogUploadActivities } from "./dialog_upload_activities";
import Table from "@/components/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { fetchActivityData } from "../api/my-page/route";

const headings = [
  "Sl No",
  "Views, Likes, Comments, and Shares",
  "Category",
  "Name and Address of Participant",
  "Name of Art - Brief Description",
  "Thumbnail",
  "Value",
];

export default function ActivitiesTab() {
  const [activity, setActivity] = useState([]);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    async function fetchData() {
      if (token) {
        const d = await fetchActivityData(token);
        setActivity(d.activity);
      }
    }
    fetchData();
  }, [token]);

  return (
    <div className="">
      <DialogUploadActivities />
      <p>Table</p>
      <Table data={activity} headings={headings} />
    </div>
  );
}