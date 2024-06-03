import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { DialogUploadActivities } from "./dialog_upload_activities";


export default function ActivitiesTab() {
    return (
        <div className="">
          <DialogUploadActivities/>
          <p>Table</p>
        </div>
    )
}