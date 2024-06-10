"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { apiURL, imageURL } from "@/app/api/status/route";
import { fetchPlantsData } from "@/app/api/status/route";
import { string } from "zod";
import { DialogUploadPlant } from "./dialog_upload_plant";


interface TreeDetails {
  name: string;
  image: string;
  description: string;
}

interface TreeDetailsCardProps {
  tree: TreeDetails;
}



const TreeDetailsCard: React.FC<TreeDetailsCardProps> = ({ tree }) => {
  function formatDateTime(isoString) {
    const date = new Date(isoString);
  
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getUTCFullYear();
    
    // const hours = String(date.getUTCHours()).padStart(2, '0');
    // const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    // const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
    const formattedDate = `${day}/${month}/${year}`;
    // const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    return `${formattedDate}`;
  }

  const formattedDateTime = formatDateTime(tree.up_date);
  return (
    <div className="bg-white p-4  rounded-lg overflow-hidden border shadow transform transition-transform hover:border-green-600 hover:shadow-lg">
      <img className="w-full h-48 object-cover" src={imageURL+tree.up_file} alt={tree.name} />
      <div className="p-4">
      <div className="text-sm text-gray-600">Tree number: </div>
          <div className="text-xl mb-4">{ tree.up_id }</div>
      <div className="text-sm text-gray-600">Tree name: </div>
          <div className="text-xl mb-4">{ tree.up_tree_name }</div>
          <div className="text-sm text-gray-600">Planter name: </div>
          <div className="text-xl mb-4">{ tree.up_planter }</div>
        {/* <h2 className="text-xl font-bold mb-2">{tree.up_tree_name}</h2> */}
        <p className="text-gray-600 text-sm">{formattedDateTime}</p>
      </div>
    </div>
  );
};





export default function MyUploadsTab({token}) {
  const [upload, setUpload] = useState([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  
  useEffect(() => {
    const fetchTrees = async () => {
        const response = await fetchPlantsData(token!);
        setUpload(response.Uploads);
    };
    fetchTrees();
  }, [token,upload]);
    return (
        <div className="">
          <DialogUploadPlant  token={token}/>
          {/* <a
          href={`/upload-plant?id=${id}&token=${token}`}
          className="float-right place-items-center w-25 bg-green-100 text-green-600  py-2 px-4 my-2 border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white"
        >
          Upload Plant
        </a> */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {upload ? (
  upload
    .slice() // Create a shallow copy of the array to avoid mutating the original array
    .reverse() // Reverse the order of the array
    .map((tree, index) => <TreeDetailsCard key={index} tree={tree} />)
) : (
  "No Tree Details Found"
)}
    </div>
        </div>
    )
}